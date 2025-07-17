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