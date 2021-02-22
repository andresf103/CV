let divColapsables = document.getElementsByClassName("colapsable");
/** */
for (let i = 0; i < divColapsables.length; i++) {
    divColapsables[i].addEventListener("click", (ev) => {
        ev.target.classList.toggle("active"); //agregamos o quitamos la clase active
        /* nextElementSibling devuelve el elemento inmediato siguiente, en este caso el bloque de texto que esta escondido. */
        let content = ev.target.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            /* o no tiene tamaño o le agregamos el tamaño del contenido */
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}