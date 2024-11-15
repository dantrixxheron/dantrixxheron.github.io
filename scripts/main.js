function toggleTheme() {
    const body = document.body;
    const themeToggleButton = document.getElementById("theme-toggle");
    const btns = document.getElementsByClassName("btn");

    // Cambia la clase en el body para alternar el tema
    body.classList.toggle("dark-theme");

    // Cambia el estilo y el texto del botón según el tema
    if (body.classList.contains("dark-theme")) {
        themeToggleButton.textContent = "light_mode";
        themeToggleButton.classList.replace("btn-light", "btn-dark");
        changeTheme(btns, "btn-outline-dark", "btn-outline-light");
    } else {
        themeToggleButton.textContent = "dark_mode";
        themeToggleButton.classList.replace("btn-dark", "btn-light");
        changeTheme(btns, "btn-outline-light", "btn-outline-dark");
    }
}
function changeTheme(array, elementPast, elementNew) {
    Array.from(array).forEach(e => {
        e.classList.replace(elementPast, elementNew);
    });
}