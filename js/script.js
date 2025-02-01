document.addEventListener("DOMContentLoaded", () => {
    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach((dropdown) => {
        const link = dropdown.querySelector("a");
        const menu = dropdown.querySelector(".dropdown-menu");

        // Mostra o nasconde il menu al clic
        link.addEventListener("click", (e) => {
            e.preventDefault();
            menu.classList.toggle("show");
        });

        // Chiude il menu se si clicca fuori
        document.addEventListener("click", (e) => {
            if (!dropdown.contains(e.target)) {
                menu.classList.remove("show");
            }
        });
    });
});

