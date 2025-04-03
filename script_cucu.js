document.addEventListener("DOMContentLoaded", function () {
    // Inicializar AOS
    AOS.init({
        once: true,
        duration: 1000,
    });

    // Botón flotante para regresar al inicio
    const backToTopButton = document.getElementById("back-to-top");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.add("show");
        } else {
            backToTopButton.classList.remove("show");
        }
    });

    backToTopButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Función para abrir el modal
    function openModal(card) {
        const modal = document.getElementById("modal");
        const modalImage = document.getElementById("modal-image");
        const modalName = document.getElementById("modal-name");
        const modalDescription = document.getElementById("modal-description");
        const modalSocial1 = document.getElementById("modal-social");
        const modalSocial2 = document.getElementById("modal-social");

        // Obtener datos de la tarjeta
        const image = card.getAttribute("data-image");
        const name = card.querySelector("h3").textContent;
        const description = card.getAttribute("data-description");
        const type = card.getAttribute("data-type");

       // Mostrar uno o dos botones según el tipo
    if (type === "producer") {
        const social1 = card.getAttribute("data-social-1");
        const social2 = card.getAttribute("data-social-2");
        modalSocial1.href = social1;
        modalSocial2.href = social2;
        modalSocial2.style.display = "inline-block"; // Mostrar el segundo botón
    } else {
        const social = card.getAttribute("data-social");
        modalSocial1.href = social;
        modalSocial2.style.display = "none"; // Ocultar el segundo botón
    }

    // Mostrar el modal
    modal.style.display = "block";
}

    // Función para cerrar el modal
    function closeModal() {
        const modal = document.getElementById("modal");
        if (modal) {
            modal.style.display = "none";
        }
    }

    // Cerrar modal al hacer clic fuera del contenido
    window.onclick = function (event) {
        const modal = document.getElementById("modal");
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
});