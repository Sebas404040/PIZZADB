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