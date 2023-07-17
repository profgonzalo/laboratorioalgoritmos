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

//Para que al cambiar el tamaño el nav vuelva a como era
window.addEventListener("resize", function() {
    if (window.innerWidth > 480) {
      menu.style.display = "flex";
    }
    else if (window.innerWidth <= 480 & menu.style.display == "flex") {
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

// Para borrar el texto escrito en el input
function reestablecerFiltro() {
    document.getElementById("buscar").value = "";
    filtrarTemas("");
}