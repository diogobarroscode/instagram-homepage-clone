/* Animação do slide */

/* variáveis */
let time = 4000,
    currentImageIndex = 0,
    images = document.querySelectorAll(".slide img")
    max = images.length;

/* lógica por trás da animação das imagens */
function nextImage() {

    images[currentImageIndex]
        .classList.remove("selected")

    currentImageIndex++

    if(currentImageIndex >= max)
        currentImageIndex = 0;
    

    images[currentImageIndex]
        .classList.add("selected")
}

/* inicializando a função */
function start() {
    setInterval(() => {
        nextImage()
    }, time)
}


window.addEventListener("load", start)