const cards = document.querySelectorAll(".card");
const leftArrow = document.getElementById("prev-arrow");
const rightArrow = document.getElementById("next-arrow");
let currentIndex = 0;
let isAnimating = false;
const backgrounds = [
    "linear-gradient(180deg, #ef6916, #770101)", // cobra
    "linear-gradient(180deg, #5A2180, #CE2013)", // panthers
    "linear-gradient(180deg, #F34801, #000000)", // horses
    "linear-gradient(180deg, #0B6744, #fff)",    // eagles
    "linear-gradient(180deg, #5F0102, #FFF19B)", // flames
    "linear-gradient(180deg, #FFF, #0162C4)"     // wolves
];


function updateCarousel(newIndex) {
    if (isAnimating) return;
    isAnimating = true;

    currentIndex = (newIndex + cards.length) % cards.length;
    const carouselContainer = document.getElementById("carousel");
    carouselContainer.style.background = backgrounds[currentIndex];



    cards.forEach((card, i) => {
        const offset = (i - currentIndex + cards.length) % cards.length;

        card.classList.remove(
            "center",
            "left-1",
            "left-2",
            "right-1",
            "right-2",
            "hidden"
        );

        if (offset === 0) {
            card.classList.add("center");
        } else if (offset === 1) {
            card.classList.add("right-1");
        } else if (offset === 2) {
            card.classList.add("right-2");
        } else if (offset === cards.length - 1) {
            card.classList.add("left-1");
        } else if (offset === cards.length - 2) {
            card.classList.add("left-2");
        } else {
            card.classList.add("hidden");
        }
    });

    setTimeout(() => {
        isAnimating = false;
    }, 800);

    leftArrow.addEventListener("click", () => {
        updateCarousel(currentIndex - 1);
    });

    rightArrow.addEventListener("click", () => {
        updateCarousel(currentIndex + 1);
    });

}

updateCarousel(currentIndex);
