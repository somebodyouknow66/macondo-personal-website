document.querySelector('.avatar').addEventListener('click', () => {
    document.querySelector('.burst-menu').classList.toggle('open');
})

const overlay = document.querySelector('.modal-overlay');

document.querySelectorAll('.dock-item').forEach(btn => {
    btn.addEventListener('click', () => {
        const section = btn.dataset.modal;
        const isOpen = overlay.classList.contains('open');
        const isSame = overlay.dataset.current === section;

        if (isOpen && isSame) {
            overlay.classList.remove('open');
        } else {
            overlay.dataset.current = section;
            overlay.classList.add('open');
        }
    });
});

document.querySelector('modal-close').addEventListener('keydown', e => {
    if (e.key === 'Escape' ) overlay.classList.remove('open');
});

overlay.addEventListener('click', e => {
    if (e.target === overlay) overlay.classList.remove('open');
})