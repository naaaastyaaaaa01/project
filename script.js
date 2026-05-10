const facts = [
    "Скоро здесь будет интересный факт №1",
    "Скоро здесь будет интересный факт №2",
    "Скоро здесь будет интересный факт №3",
    "Скоро здесь будет интересный факт №4",
    "Скоро здесь будет интересный факт №6"
];

function displayRandomFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    const factElement = document.getElementById("factDisplay");
    if (factElement) {
        factElement.textContent = facts[randomIndex];
    }
}

// ===== УНИВЕРСАЛЬНАЯ СИСТЕМА ТЕМ ДЛЯ ВСЕХ СТРАНИЦ =====
function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    
    // Загрузка сохранённой темы
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
        if (themeToggle) themeToggle.checked = true;
    } else {
        body.classList.remove('dark-theme');
        if (themeToggle) themeToggle.checked = false;
    }
    
    // Обработчик переключения
    if (themeToggle && !themeToggle.hasListener) {
        themeToggle.hasListener = true;
        themeToggle.addEventListener('change', (e) => {
            if (e.target.checked) {
                body.classList.add('dark-theme');
                localStorage.setItem('theme', 'dark');
            } else {
                body.classList.remove('dark-theme');
                localStorage.setItem('theme', 'light');
            }
        });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    // Инициализируем тему
    initTheme();
    
    // Факты (только на главной)
    const btn = document.getElementById("generateFactBtn");
    if (btn) {
        btn.addEventListener("click", displayRandomFact);
    }
    if (document.getElementById("factDisplay")) {
        displayRandomFact();
    }
});