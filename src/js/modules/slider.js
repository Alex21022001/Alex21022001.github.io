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
    if (window.screen.availWidth <992){
        indicatorWrapper.style.width = parseInt(contentWidth) - 10 +"px";
    }


    const indicators = document.querySelectorAll(".slider__indicators > li");
    sliderWrapper.style.width = slides.length * 100 + "%";

    slides.forEach(item => {
        item.style.width = contentWidth;
    });

    function doSlideMove() {
        sliderWrapper.style.transform = `translateX(-${offset}px)`;

        indicators.forEach((item, index) => {
            if (index === currentIndicator) {
                item.classList.add("active");
            } else {
                item.classList.remove("active");
            }

        })
    }


    next.addEventListener("click", (e) => {
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
    });

    prev.addEventListener("click", (e) => {
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
    });

    indicators.forEach(item => {
        item.addEventListener("click", (e) => {
            const ind = parseInt(item.getAttribute("data-slide-to"));
            currentIndicator = ind;
            currentSlide = ind;
            offset = currentSlide * parseInt(contentWidth);
            doSlideMove();
        });
    })


}

export default slider;