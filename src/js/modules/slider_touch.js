const slider_touch = () => {
    // const sliderWrapper = document.querySelector(".slider__slides"),
    //     sliderInner = document.querySelector(".slider__inner"),
    //     slides = document.querySelectorAll(".slider__item"),
    //     mainWrapper = document.querySelector(".projects__slider");
    //
    // sliderWrapper.style.transform = `translate3d(0px, 0px, 0px)`;
    //
    // let posInit = 0,
    //     posX1 = 0,
    //     posX2 = 0,
    //     posFinal = 0,
    //     posThreshold = parseInt(slides[0].style.width) * .35;
    //
    //
    // function swipeStart(e){
    //     posInit = posX1 = e.touches[0].clientX;
    //     sliderWrapper.style.transition = "";
    //
    //     console.log(posInit);
    //     console.log(posThreshold);
    //     document.addEventListener("touchmove",swipeAction);
    //     document.addEventListener("touchend",swipeEnd);
    // }
    //
    // function swipeAction(e){
    //     let transform = +sliderWrapper.style.transform.match(/[-0-9.]+(?=px)/)[0];
    //
    //     posX2 = posX1 - e.touches[0].clientX;
    //     posX1 = e.touches[0].clientX;
    //
    //
    //     sliderWrapper.style.transform = `translate3d(${transform - posX2}px, 0px, 0px)`;
    // }
    //
    // function swipeEnd(){
    //     posFinal = posInit - posX1;
    //
    //
    //     if (Math.abs(posFinal) > posThreshold){
    //         console.log(true);
    //     }else if (posFinal < posThreshold){
    //         console.log(false);
    //     }
    // }
    //
    // sliderInner.addEventListener("touchstart",swipeStart);
}

export default slider_touch;