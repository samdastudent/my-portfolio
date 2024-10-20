const toggleThemeButton = document.getElementById('theme-toggle');
const imgElement = document.getElementById('mode-icon');
const currentTheme = localStorage.getItem('theme') || 'light';

if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    imgElement.src = 'assets/icon__feature/light.png';
} else {
    document.documentElement.setAttribute('data-theme', 'light');
    imgElement.src = 'assets/icon__feature/dark.png';
}

toggleThemeButton.addEventListener('click', () => {
    const theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', theme);

    if (theme === 'dark') {
        imgElement.src = 'assets/icon__feature/light.png';
    } else {
        imgElement.src = 'assets/icon__feature/dark.png';
    }

    localStorage.setItem('theme', theme);
});