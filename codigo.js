let divColapsables = document.getElementsByClassName("colapsable");
/** */
for (let i = 0; i < divColapsables.length; i++) {
    divColapsables[i].addEventListener("click", (ev) => {
        ev.target.classList.toggle("active");
        /* nextElementSibling devuelve el elemento inmediato siguiente, en este caso el bloque de texto que esta escondido. */
        let content = ev.target.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}