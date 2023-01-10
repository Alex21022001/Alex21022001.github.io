const sliderMore = () => {
    const moreBtns = document.querySelectorAll(".slider__item-more");

    moreBtns.forEach(btn => {

        btn.addEventListener("click", (e) => {
            const informationToShow = btn.parentElement.querySelector(".slider__item-additional");
            const btns = btn.parentElement.querySelector(".slider__item-btns");

            btn.style.display = "none";
            informationToShow.classList.add("slider__item-additional_active");
            informationToShow.style.maxHeight = informationToShow.scrollHeight + "px";
            setTimeout(() => {
                btns.style.maxHeight = btns.scrollHeight + "px";
                btns.classList.add("slider__item-btns_active");
            }, 1500);
        });
    })
}

const hideSlideDesc=()=>{
    const moreBtns = document.querySelectorAll(".slider__item-more");
    const informationToShow = btn.parentElement.querySelector(".slider__item-additional");
    const btns = btn.parentElement.querySelector(".slider__item-btns");



}

export default sliderMore;