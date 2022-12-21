const slider = () => {
    const sliderWrapper = document.querySelector(".slider__slides"),
        sliderInner = document.querySelector(".slider__inner"),
        slides = document.querySelectorAll(".slider__item"),
        mainWrapper = document.querySelector(".projects__slider"),
        indicatorWrapper = document.querySelector(".slider__indicators"),
        prev = document.querySelector(".slider__prev"),
        next = document.querySelector(".slider__next"),
        contentWidth = mainWrapper.scrollWidth + "px";


    let offset = 0,
        currentSlide = 0,
        currentIndicator = 0;


    for (let i = 0; i < slides.length; i++) {
        const indicator = document.createElement("li");
        if (i === currentSlide) {
            indicator.classList.add("active");
        }
        indicator.setAttribute("data-slide-to", `${i}`);
        indicatorWrapper.append(indicator);
    }
    if (window.screen.availWidth < 992) {
        indicatorWrapper.style.width = parseInt(contentWidth) - 10 + "px";
    }


    const indicators = document.querySelectorAll(".slider__indicators > li");
    sliderWrapper.style.width = slides.length * 100 + "%";

    slides.forEach(item => {
        item.style.width = contentWidth;
    });

    function doSlideMove() {
        sliderWrapper.style.transform = `translate3d(-${offset}px,0px,0px)`;

        indicators.forEach((item, index) => {
            if (index === currentIndicator) {
                item.classList.add("active");
            } else {
                item.classList.remove("active");
            }

        })
    }

    function moveNext(e, prevent) {
        if (prevent)
            e.preventDefault();


        if (offset >= parseInt(contentWidth) * (slides.length - 1)) {
            offset = 0;
            currentSlide = 0;
            currentIndicator = 0;
        } else {
            offset += parseInt(contentWidth);
            currentSlide++;
            currentIndicator++;
        }

        doSlideMove();
    }

    function movePrev(e, prevent) {
        if (prevent)
            e.preventDefault();

        if (offset === 0) {
            offset = parseInt(contentWidth) * (slides.length - 1);
            currentSlide = slides.length - 1;
            currentIndicator = slides.length - 1
        } else {
            offset -= parseInt(contentWidth);
            currentSlide--;
            currentIndicator--;
        }

        doSlideMove();
    }

    indicators.forEach(item => {
        item.addEventListener("click", (e) => {
            const ind = parseInt(item.getAttribute("data-slide-to"));
            currentIndicator = ind;
            currentSlide = ind;
            offset = currentSlide * parseInt(contentWidth);
            doSlideMove();
        });
    })


    sliderWrapper.style.transform = `translate3d(0px, 0px, 0px)`;

    let posInit = 0,
        posX1 = 0,
        posX2 = 0,
        posFinal = 0,
        posThreshold = parseInt(slides[0].style.width) * .35,
        middleWidth = parseInt(slides[0].style.width) / 2;


    function swipeStart(e) {
        posInit = posX1 = e.touches[0].clientX;
        sliderWrapper.style.transition = "";


        sliderInner.addEventListener("touchmove", swipeAction);
        sliderInner.addEventListener("touchend", swipeEnd);
    }

    function swipeAction(e) {
        let transform = +sliderWrapper.style.transform.match(/[-0-9.]+(?=px)/)[0];

        posX2 = posX1 - e.touches[0].clientX;
        posX1 = e.touches[0].clientX;


        sliderWrapper.style.transform = `translate3d(${transform - posX2}px, 0px, 0px)`;
    }

    function swipeEnd(e) {
        posFinal = posInit - posX1;

        if (Math.abs(posFinal) > posThreshold && posInit > middleWidth && currentSlide !== slides.length - 1) {
            moveNext(e, false);
        }

        if (Math.abs(posFinal) > posThreshold && posInit < middleWidth && currentSlide !== 0) {
            movePrev(e, false);
        }

        if (posInit !== posX1) {
            doSlideMove();
        }
    }

    next.addEventListener("click", (e) => moveNext(e, true));
    prev.addEventListener("click", (e) => movePrev(e, true));

    sliderInner.addEventListener("touchstart", swipeStart);
}

export default slider;