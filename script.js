// Массив фактов о команде
const facts = [
    "Скоро здесь будет интересный факт №1",
    "Скоро здесь будет интересный факт №2",
    "Скоро здесь будет интересный факт №3",
    "Скоро здесь будет интересный факт №4",
    "Скоро здесь будет интересный факт №5"
];

function displayRandomFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    const factElement = document.getElementById("factDisplay");
    if (factElement) {
        factElement.textContent = facts[randomIndex];
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("generateFactBtn");
    if (btn) {
        btn.addEventListener("click", displayRandomFact);
    }
    displayRandomFact();
});
// ===== ПЕРЕКЛЮЧЕНИЕ ТЕМЫ =====
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Проверяем сохранённую тему
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-theme');
    if (themeToggle) themeToggle.checked = true;
}

// Функция сохранения темы
function setTheme(isDark) {
    if (isDark) {
        body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light');
    }
}

// Слушатель на тумблер
if (themeToggle) {
    themeToggle.addEventListener('change', (e) => {
        setTheme(e.target.checked);
    });
}