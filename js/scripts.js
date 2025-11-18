const toggleTheme = document.getElementById("toggle-theme"); // ← coincidir exactamente con el HTML
const toggleIcon = document.getElementById("toggle-icon");
const toggleText = document.getElementById("toggle-text");

const toggleColors = document.getElementById("toggle-colors");//acceder al contenedor de los colores

const rootStyle = document.documentElement.style; //acceder a las variables CSS definidas en :root, es decir todas.

toggleTheme.addEventListener("click", () => {//añadir un evento de click al botón de alternar tema
    document.body.classList.toggle("dark");

    if(toggleIcon.src.includes("sun.svg")) {
        toggleIcon.src = "assets/icons/moon.svg";
        toggleText.textContent = "Dark Mode";
    } else {
        toggleIcon.src = "assets/icons/sun.svg";
        toggleText.textContent = "Light Mode";
    }
});

toggleColors.addEventListener("click", (e) => {//añadir un evento de click al contenedor de colores
rootStyle.setProperty("--primary-color", e.target.dataset.color);//cambiar el valor de la variable CSS --main-color al color seleccionado
});