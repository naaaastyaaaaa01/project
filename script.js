// Массив фактов о команде
const facts = [
    "Денис коллекционирует ретро-приставки, у него их 7 штук.",
    "Настя может приготовить 10 видов пасты без рецепта.",
    "Никита играет на гитаре и пишет свои песни.",
    "Лиза однажды посмотрела 4 фильма за день на кинофестивале.",
    "Тимур написал рассказ, который опубликовали в городском альманахе.",
    "Наша команда собралась впервые за чашкой кофе и сразу придумала тему сайта.",
    "Все мы из разных городов: Москва, Казань, Новосибирск, Ростов и Санкт-Петербург."
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