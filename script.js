function mostrarMenu(){
    const botonMenu = document.getElementById("btn-menu");
    const menu = document.getElementById("menu");
    if (menu.style.display === "none")
    {
        menu.style.display = "block";
    }
    else
    {
        menu.style.display = "none";
    }
}

window.addEventListener("resize", function() {
    if (window.innerWidth > 480) {
      menu.style.display = "flex";
    }
    else if (window.innerWidth <= 480) {
        menu.style.display = "none";
      }
  });

  // Buscador de teoría
  function filtrarTemas(textoBusqueda) {
    const temas = document.getElementsByClassName("tema");

    for (let i = 0; i < temas.length; i++) {
        const tema = temas[i];
        const nombreTema = tema.getElementsByClassName("nombre-tema")[0].textContent.toLowerCase();
      
        if (nombreTema.includes(textoBusqueda.toLowerCase())) {
            tema.style.display = "flex";
        } else {
            tema.style.display = "none";
        }
    }
}

function reestablecerFiltro() {
    document.getElementById("buscar").value = "";
    filtrarTemas("");
}

  // Función para animar las noticias
function animarNoticias() {
    const newsItems = document.querySelectorAll('.noticias li');
    let delay = 0;

    newsItems.forEach(item => {
        item.style.opacity = 0;
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        item.style.transitionDelay = `${delay}s`;
        delay += 0.1;
    });

    setTimeout(() => {
        newsItems.forEach(item => {
            item.style.opacity = 1;
            item.style.transform = 'translateY(0)';
        });
    }, 500);
}

// Llamamos a la función de animación al cargar la página
window.addEventListener('load', animarNoticias);
