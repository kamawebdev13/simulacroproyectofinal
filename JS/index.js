/*CARROUSEL PARA LA SECCION BLOG*/

/*DECLARAMOS LAS VARIABLES*/
const container = document.getElementById("card-container")
const cardInfo = [
    {
        src: "./images/imgi_9_short-stories-one-moment-around-the-world_1.jpg",
        title: "One moment around the world",
        description: "It's five o'clock in London and Ryan is watching TV. What time is it in other parts of the world?",
        alt: "boys playing football",
        url: "/blog/one-moment.html"
    },
    {
        src: "./images/imgi_10_your-turn-flags_0.png",
        title: "Flags",
        description: "Think of a flag – it can be the flag of a country or an invented one. What colour or colours is it?",
        alt: "boy typing on a pc",
        url: "/blog/flags.html"
    },

    {
        src: "./images/How-to-make-a-bookmark-no-text (1).webp",
        title: "How to Videos",
        description: "Do you like making things? Do you like learning how to do things? Watch our How to ... videos to learn how to make and do lots of fun things!",
        alt: "two girls smiling",
        url: "/blog/how-to-videos.html"
    },
    {
        src: "./images/section-reading-practice.jpg",
        title: "Reading practice",
        description: "Do you like reading in English? Reading is a great way to improve your vocabulary and learn new things. We have lots of interesting texts for you to read. Read, play games, print activities and post comments too!",
        alt: "children reading on cellphones",
        url: "/blog/reading-practice.html"
    },
    {
        src: "./images/imgi_9_short-stories-one-moment-around-the-world_1.jpg",
        title: "One moment around the world",
        description: "It's five o'clock in London and Ryan is watching TV. What time is it in other parts of the world?",
        alt: "boys playing football",
        url: "/blog/one-moment.html",
    },
    {
        src: "./images/imgi_10_your-turn-flags_0.png",
        title: "Flags",
        description: "Think of a flag – it can be the flag of a country or an invented one. What colour or colours is it?",
        alt: "boy typing on a pc",
        url: "/blog/flags.html"
    }
];

let cardPlace = 0
let carrouselInterval
let resumeCarrousel
let isPaused = false


/*FUNCION PARA PAUSAR Y REANUDAR CARROUSEL DE INMEDIATO */
const pauseCarrousel = () => {
    isPaused = true
    clearInterval(carrouselInterval)
    clearTimeout(resumeCarrousel)
}

const resumeCarrouselNow = () => {
    if (!isPaused) return

    isPaused = false
    clearTimeout(resumeCarrousel)
    const Allcards = document.querySelectorAll(".blog__card")
    Allcards.forEach(c => c.classList.remove("active"))

    controlCarrousel()
}


/*FUNCION PARA MOVER Y DETENER NUESTRO CARROUSEL*/
const controlCarrousel = () => {
    clearInterval(carrouselInterval)

    carrouselInterval = setInterval(() => {
        /*MOVEMOS CADA CARTA A LA IZQUIERDA*/
        cardPlace -= 1
        container.style.transform = `translateX(${Math.round(cardPlace)}px)`

        /* SI EL CARROUSEL LLEGA A LA MITAD SE DEVUELVE AL INICIO, EN ESTE CASO PORQUE DUPLICAMOS LOS OBJETOS DEL ARRAY*/
        if (Math.abs(cardPlace) >= container.scrollWidth / 2) {

            cardPlace = 0
        }

    }, 20)

}

/*CREAMOS LA CARD QUE MOSTRARA NUESTRO BLOG POST*/

cardInfo.forEach(card => {

    const newCard = document.createElement("div")
    newCard.classList.add("blog__card")

    const src = card.src
    const title = card.title
    const description = card.description
    const alt = card.alt

    newCard.innerHTML = `
     <a href="${card.url}" class="blog__card-link">
        <div class="blog__card-inner">
            <img loading="lazy" class="blog-image" src="${src}" alt="${alt}">
            <div class="description">
                <h3 class="text--md">${title}</h3>
                <p class="text--sm">${description}</p>
            </div>
        </div>
    </a>
        `
    /* DETENEMOS EL CARROUSEL Y A SU VEZ AGREGAMOS EL STYLE (QUE AUMENTA TAMAÑO DE LA CARTA AL HACER HOVER)*/

    newCard.addEventListener("mouseenter", () => {
        pauseCarrousel()
        newCard.classList.add("active")
    })
    /* REANUDAMOS EL CARROUSEL Y A SU VEZ QUITAMOS EL STYLE (QUE AUMENTA TAMAÑO DE LA CARTA AL HACER HOVER)*/

    newCard.addEventListener("mouseleave", () => {
        newCard.classList.remove("active")
        resumeCarrouselNow()
    })
    container.appendChild(newCard)
})
/*  REANUDAR CARROUSEL de INMEDIATO AL HACER CLICK FUERA DEL CONTENEDOR DE LAS CARTAS*/
document.addEventListener("click", (e) => {
    if (!e.target.closest(".blog__card")) {
        resumeCarrouselNow()
    }
})


controlCarrousel()




