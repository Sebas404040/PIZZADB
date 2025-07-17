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