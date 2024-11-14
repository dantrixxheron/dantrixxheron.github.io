function toggleTheme() {
    const body = document.body;
    const themeToggleButton = document.getElementById("theme-toggle");

    // Cambia la clase en el body para alternar el tema
    body.classList.toggle("dark-theme");

    // Cambia el estilo y el texto del botón según el tema
    if (body.classList.contains("dark-theme")) {
        themeToggleButton.textContent = "light_mode";
      themeToggleButton.classList.replace("btn-light", "btn-dark");
    } else {
        themeToggleButton.textContent = "dark_mode";
        themeToggleButton.classList.replace("btn-dark", "btn-light");
    }
}