const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const switchThemeBtn = document.getElementById('theme-switch-toggle');
const { LIGHT, DARK } = Theme;

function onSetTheme(theme) {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
}

function onChangeTheme() {
    if (localStorage.getItem('theme') === DARK) {
        onSetTheme(LIGHT);
    } else {
        onSetTheme(DARK);
    }
}

function onCheckTheme() {
    const localStorageName = localStorage.getItem('theme');

    if (localStorageName === DARK) {
        document.body.className = localStorageName;
        switchThemeBtn.checked = true;
    }
}

switchThemeBtn.addEventListener('change', onChangeTheme);
window.onload = onCheckTheme();
