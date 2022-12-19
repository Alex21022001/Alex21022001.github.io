const sliderMore = ()=>{
    const moreBtn = document.querySelector(".slider__item-more"),
        informationToShow = document.querySelector(".slider__item-additional"),
        btns= document.querySelector(".slider__item-btns");

    moreBtn.addEventListener("click",(e)=>{
        moreBtn.style.display = "none";
        informationToShow.classList.add("slider__item-additional_active");
        informationToShow.style.maxHeight = informationToShow.scrollHeight + "px";
        setTimeout(()=>{
            btns.style.maxHeight = btns.scrollHeight + "px";
            btns.classList.add("slider__item-btns_active");
        },1500);
    });
}

export default sliderMore;