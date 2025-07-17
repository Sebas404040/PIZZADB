// --- Lógica para el menú de navegación móvil ---
document.addEventListener('DOMContentLoaded', () => {
    for (let i = 1; i <= 4; i++) {
        const btn = document.getElementById(`mobile-menu-button-${i}`);
        const menu = document.getElementById(`mobile-menu-${i}`);
        if (btn && menu) {
            btn.addEventListener('click', () => {
                menu.classList.toggle('hidden');
            });
        }
    }
});

// --- JS del Paso 1 ---
(() => {
    const ingredientCards = document.querySelectorAll('#step-1 .ingredient-card');
    const modal = document.getElementById('modal-step1');
    const modalTitle = document.getElementById('modal-title-step1');
    const modalExample = document.getElementById('modal-example-step1');
    const closeModalBtn = document.getElementById('close-modal-btn-step1');

    if (!modal) return;

    function openModal(ingredientName, ingredientInfo) {
        modalTitle.textContent = `Descubriste: ${ingredientName}`;
        modalExample.textContent = ingredientInfo;
        modal.classList.remove('hidden');
    }
    function closeModal() {
        modal.classList.add('hidden');
    }

    ingredientCards.forEach(card => {
        card.addEventListener('click', () => {
            const name = card.dataset.ingredient;
            const info = card.dataset.info;
            openModal(name, info);
        });
    });
    closeModalBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (event) => {
        if (event.target === modal) closeModal();
    });
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
    });
})();

// --- JS del Paso 2 ---
(() => {
    const step2_section = document.getElementById('step-2');
    if (!step2_section) return;

    const draggableItems = step2_section.querySelectorAll('.data-card');
    const dropZones = step2_section.querySelectorAll('.drop-zone');
    const dataSource = document.getElementById('data-source-step2');
    const successModal = document.getElementById('success-modal-step2');
    const closeModalBtn = document.getElementById('close-modal-btn-step2');

    draggableItems.forEach(item => {
        item.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', e.target.id);
            setTimeout(() => item.classList.add('dragging'), 0);
        });
        item.addEventListener('dragend', () => item.classList.remove('dragging'));
    });

    dropZones.forEach(zone => {
        zone.addEventListener('dragover', e => {
            e.preventDefault();
            zone.classList.add('drag-over-highlight');
        });
        zone.addEventListener('dragleave', () => zone.classList.remove('drag-over-highlight'));
        zone.addEventListener('drop', e => {
            e.preventDefault();
            zone.classList.remove('drag-over-highlight');
            const id = e.dataTransfer.getData('text/plain');
            const draggable = document.getElementById(id);
            if (draggable && draggable.dataset.type === zone.dataset.type) {
                const contentArea = zone.querySelector('.content-area');
                contentArea.appendChild(draggable);
                draggable.classList.remove('bg-red-100', 'bg-green-100', 'bg-yellow-100');
                draggable.classList.add('bg-white', 'shadow-sm', 'p-2', 'rounded-md');
                draggable.setAttribute('draggable', 'false');
                draggable.style.cursor = 'default';
                if (dataSource.children.length === 0) {
                    successModal.classList.remove('hidden');
                }
            } else if (draggable) {
                draggable.classList.add('shake');
                setTimeout(() => draggable.classList.remove('shake'), 500);
            }
        });
    });
    closeModalBtn.addEventListener('click', () => successModal.classList.add('hidden'));
})();

// --- JS del Paso 3 ---
(() => {
    const step3_section = document.getElementById('step-3');
    if (!step3_section) return;

    const draggables = step3_section.querySelectorAll('[draggable="true"]');
    const dropZone = document.getElementById('drop-zone-pedido-step3');
    const confirmBtn = document.getElementById('confirm-btn-step3');
    const pedidosTableBody = document.getElementById('pedidos-table-body-step3');
    const detallePedidosTableBody = document.getElementById('detalle-pedidos-table-body-step3');
    const pedidoClienteDiv = document.getElementById('pedido-cliente-step3');
    const pedidoPizzasUl = document.getElementById('pedido-pizzas-step3');
    const dropZonePlaceholder = document.getElementById('drop-zone-placeholder-step3');
    const explanationModal = document.getElementById('explanation-modal-step3');
    const closeModalBtn = document.getElementById('close-modal-btn-step3');
    const showExplanationBtn = document.getElementById('show-explanation-btn-step3');

    let currentOrder = { clienteId: null, clienteElement: null, pizzaIds: [], pizzaElements: [] };
    let nextPedidoId = 101;
    let nextDetalleId = 501;

    draggables.forEach(item => {
        item.addEventListener('dragstart', e => {
            if (item.classList.contains('is-selected')) { e.preventDefault(); return; }
            e.dataTransfer.setData('text/plain', item.id);
        });
    });

    dropZone.addEventListener('dragover', e => { e.preventDefault(); dropZone.classList.add('drag-over-highlight'); });
    dropZone.addEventListener('dragleave', () => dropZone.classList.remove('drag-over-highlight'));
    dropZone.addEventListener('drop', e => {
        e.preventDefault();
        dropZone.classList.remove('drag-over-highlight');
        const id = e.dataTransfer.getData('text/plain');
        const element = document.getElementById(id);
        if (!element || element.classList.contains('is-selected')) return;

        if (element.dataset.type === 'cliente') {
            if (currentOrder.clienteElement) { currentOrder.clienteElement.classList.remove('is-selected'); }
            currentOrder.clienteId = element.dataset.id;
            currentOrder.clienteElement = element;
            pedidoClienteDiv.innerHTML = `<p class="font-semibold p-2 bg-green-100 rounded-md">Cliente: ${element.children[1].textContent}</p>`;
            element.classList.add('is-selected');
        } else if (element.dataset.type === 'pizza') {
            if (!currentOrder.pizzaIds.includes(element.dataset.id)) {
                currentOrder.pizzaIds.push(element.dataset.id);
                currentOrder.pizzaElements.push(element);
                const li = document.createElement('li');
                li.textContent = element.children[1].textContent;
                pedidoPizzasUl.appendChild(li);
                element.classList.add('is-selected');
            }
        }
        updateDropZoneUI();
    });

    function updateDropZoneUI() {
        dropZonePlaceholder.classList.toggle('hidden', currentOrder.clienteId || currentOrder.pizzaIds.length > 0);
        confirmBtn.classList.toggle('hidden', !(currentOrder.clienteId && currentOrder.pizzaIds.length > 0));
    }

    confirmBtn.addEventListener('click', () => {
        const pedidoId = nextPedidoId++;
        const pedidoRow = document.createElement('div');
        pedidoRow.id = `pedido-row-${pedidoId}`;
        pedidoRow.className = 'grid grid-cols-3 items-center p-2 rounded-lg bg-blue-50';
        pedidoRow.innerHTML = `
                    <span class="font-mono bg-blue-200 text-blue-800 px-2 py-1 rounded">${pedidoId}</span>
                    <span>${new Date().toLocaleDateString()}</span>
                    <span class="font-mono bg-green-200 text-green-800 px-2 py-1 rounded foreign-key-span" 
                          data-references="cliente-row-${currentOrder.clienteId}-step3">${currentOrder.clienteId}</span>`;
        pedidosTableBody.appendChild(pedidoRow);

        currentOrder.pizzaIds.forEach(pizzaId => {
            const detalleId = nextDetalleId++;
            const detalleRow = document.createElement('div');
            detalleRow.id = `detalle-row-${detalleId}`;
            detalleRow.className = 'grid grid-cols-3 items-center p-2 rounded-lg bg-purple-50';
            detalleRow.innerHTML = `
                        <span class="font-mono bg-purple-200 text-purple-800 px-2 py-1 rounded">${detalleId}</span>
                        <span class="font-mono bg-blue-200 text-blue-800 px-2 py-1 rounded foreign-key-span" 
                              data-references="pedido-row-${pedidoId}">${pedidoId}</span>
                        <span class="font-mono bg-yellow-200 text-yellow-800 px-2 py-1 rounded foreign-key-span" 
                              data-references="pizza-row-${pizzaId}-step3">${pizzaId}</span>`;
            detallePedidosTableBody.appendChild(detalleRow);
        });
        addHighlightListeners();
        resetForNextOrder();
    });

    function addHighlightListeners() {
        const foreignKeys = document.querySelectorAll('#step-3 .foreign-key-span');
        foreignKeys.forEach(fk => {
            fk.replaceWith(fk.cloneNode(true));
        });
        document.querySelectorAll('#step-3 .foreign-key-span').forEach(fk => {
            const targetId = fk.dataset.references;
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                fk.addEventListener('mouseover', () => targetElement.classList.add('highlight-relation'));
                fk.addEventListener('mouseout', () => targetElement.classList.remove('highlight-relation'));
            }
        });
    }

    function resetForNextOrder() {
        if (currentOrder.clienteElement) { currentOrder.clienteElement.classList.remove('is-selected'); }
        currentOrder.pizzaElements.forEach(el => el.classList.remove('is-selected'));
        currentOrder = { clienteId: null, clienteElement: null, pizzaIds: [], pizzaElements: [] };
        pedidoClienteDiv.innerHTML = '';
        pedidoPizzasUl.innerHTML = '';
        updateDropZoneUI();
    }

    showExplanationBtn.addEventListener('click', () => explanationModal.classList.remove('hidden'));
    closeModalBtn.addEventListener('click', () => explanationModal.classList.add('hidden'));
    explanationModal.addEventListener('click', (e) => {
        if (e.target === explanationModal) explanationModal.classList.add('hidden');
    });
})();