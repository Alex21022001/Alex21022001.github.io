const slider = () => {
    const sliderWrapper = document.querySelector(".slider__slides"),
        sliderInner = document.querySelector(".slider__inner"),
        slides = document.querySelectorAll(".slider__item"),
        prev = document.querySelector(".slider__prev"),
        next = document.querySelector(".slider__next"),
        contentWidth = sliderInner.clientWidth + "px" //?????????????


    let offset = 0;
    let currentSlide = 0;

    sliderWrapper.style.width = slides.length * 100 + "%";

    console.log(slides.length);

    slides.forEach(item => {
        item.style.width = contentWidth;
    });

    function doSlideMove() {
        sliderWrapper.style.transform = `translateX(-${offset}px)`;
    }


    next.addEventListener("click", (e) => {
        e.preventDefault();

        if (offset >= parseInt(contentWidth) * (slides.length - 1)) {
            offset = 0;
            currentSlide = 0;
        } else {
            offset += parseInt(contentWidth);
            currentSlide++;
        }

        doSlideMove();

    });

    prev.addEventListener("click", (e) => {
        e.preventDefault();

        if (offset === 0) {
            offset = parseInt(contentWidth) * (slides.length - 1);
            currentSlide = slides.length - 1;
        } else {
            offset -= parseInt(contentWidth);
            currentSlide--;
        }

        doSlideMove();

    });

}

export default slider;