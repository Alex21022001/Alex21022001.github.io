const sliderMore = ()=>{
    const moreBtn = document.querySelector(".slider__item-more"),
        text = document.querySelector(".slider__item-text"),
        app = document.querySelector(".slider__item-app"),
        btns= document.querySelector(".slider__item-btns");

    moreBtn.addEventListener("click",(e)=>{
        moreBtn.style.display = "none";

    });
}

export default sliderMore;