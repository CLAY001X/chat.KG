// Показать модальное окно при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('welcome-modal');
    const closeButton = document.querySelector('.close-button');

    // Показать модальное окно
    modal.style.display = 'flex';

    // Закрыть модальное окно
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Закрыть модальное окно при клике вне его
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
