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
function changeIconExp(event) {
    // Obtener el botón que llamó la función
    const button = event.currentTarget;

    // Encontrar el ícono <i> dentro del botón
    const icon = button.querySelector("i");

    // Alternar clases del ícono
    if (icon.classList.contains("bi-plus-lg")) {
        icon.classList.replace("bi-plus-lg", "bi-dash-lg");
    } else {
        icon.classList.replace("bi-dash-lg", "bi-plus-lg");
    }
    // Cambiar el estado de aria-expanded
    const isExpanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!isExpanded));
    // Encontrar el contenedor padre más cercano (exp-dynamic-card)
    const card = button.closest(".exp-dynamic-card");

    // Encontrar el div con la clase "dynamic-info" dentro del card
    const dynamicInfo = card.querySelector(".dynamic-info");

    // Alternar la clase "show" para aplicar la transición
    dynamicInfo.classList.toggle("show");
    // Alternar atributo hidden para accesibilidad
    if (dynamicInfo.hasAttribute("hidden")) {
        dynamicInfo.removeAttribute("hidden");
    } else {
        dynamicInfo.setAttribute("hidden", "");
    }
}

function toggleMenu() {
    const navList = document.querySelector('.nav-list');
    navList.classList.toggle('open');
}

document.querySelector("#contact-info form").addEventListener("submit", function (e) {
    e.preventDefault(); // Evita el envío por defecto

    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const message = document.querySelector("#message").value.trim();

    // Reemplaza por tu correo real
    const destinatario = "dantrixxheron.bn@gmail.com";

    const asunto = encodeURIComponent("Hagamos contacto desde la web");
    const cuerpo = encodeURIComponent(
        `Hola soy ${name} mucho gusto!\n
        \n${message}
        \n\nMi correo es ${email}.\n
        \nEspero tu respuesta!`
    );

    window.location.href = `mailto:${destinatario}?subject=${asunto}&body=${cuerpo}`;
});
