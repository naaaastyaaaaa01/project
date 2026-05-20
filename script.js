const facts = [
    "Лиза 10 лет занималась фехтованием",
    "Лиза поступила на IT-специальность, не зная, как работает комп",
    "Настя 15 лет занимается танцами",
    "У Насти аллергия на холод",
    "Скоро здесь будет интересный факт №6"
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

    // ----- Блок для темы -----
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
        if (themeToggle) themeToggle.checked = true;
    }
    
    function setTheme(isDark) {
        if (isDark) {
            body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light');
        }
    }
    
    if (themeToggle) {
        themeToggle.addEventListener('change', (e) => {
            setTheme(e.target.checked);
        });
    }
});
