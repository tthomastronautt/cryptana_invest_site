/* === Cards section start === */
const cardSection = document.querySelector('.cards-section')

let cards = [
    {
        title: 'Din personlige wallet',
        image: './img/wallet-solid.svg',
        alt: 'wallet icon',
        button: 'Din Wallet'
    },
    {
        title: 'Følg markedet på forskellige valuta',
        image: './img/euro-sign-solid.svg',
        alt: 'euro icon',
        button: 'Køb Valuta'
    },
    {
        title: 'Investér i dagens højeste kurs',
        image: './img/bitcoin-sign-solid.svg',
        alt: 'bitcoin icon',
        button: 'Køb Crypto'
    },
    {
        title: 'Følg kurserne på markedets coins',
        image: './img/arrow-trend-up-solid.svg',
        alt: 'up arrow icon',
        button: 'Se Kurser'
    },
]

cards.forEach(e => {
    cardSection.innerHTML += `
    <div class="grid-container">
        <div class="card-box">
            <h1 class="card-title">${e.title}</h1>
            <img class="card-icon" src="${e.image}" alt="${e.alt}">
            <p class="card-button">${e.button}</p>
        </div>
    </div>
    `
})

/* === Cards section end === */



/* === Slide section start === */
let slideData = [
    {
        image: 'slider-image-1',
        text: '<b>DOWNLOAD VORES APP<b/><br><br>Følg kurser på dine investeringer<br><br>Hold styr på din portfolio'
    },
    {
        image: 'slider-image-2',
        text: '<b>KONTAKT DIN EXPERT<b/><br><br>Cryptana Invest har døgnservice.<br><br>Følg dine investeringer, og få råd fra vores eksperter når det passer dig.<br><br>Hold kursen klar med Cryptana Invest.'
    },
    {
        image: 'slider-image-3',
        text: '<b>INVESTER I DIN FREMTID<b/><br><br>Brug en sikker samarbejdspartner.<br><br>Hold styr på din portfolio.<br><br>Vælg en sikker kurs med Cryptana Invest.'
    }
]

const sliderContainer = document.querySelector('.slider-section')

slideData.forEach(slide => {
    sliderContainer.innerHTML += `
    <div class="singleSlide ${slide.image}">
        <p class="slider-text">${slide.text}</p>
    </div>
    `
})

const slides = document.querySelectorAll('.singleSlide')

let slidesLength = slides.length - 1
let currentImageIndex = 0

const setActiveSlide = (index) => {
    
    slides.forEach( (slide) => {
        slide.classList.remove('active')
    })

    slides[index].classList.add('active')
}

const next = () => {
    if(currentImageIndex >= slidesLength){
        currentImageIndex = 0
    } else {
        currentImageIndex += 1
    }

    setActiveSlide(currentImageIndex)
}

setActiveSlide(currentImageIndex)

setInterval(next, 5000)

/* === Slide section end === */