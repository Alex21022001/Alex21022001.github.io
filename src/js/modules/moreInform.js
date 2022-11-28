

const moreInform = () => {
    const btn = document.querySelector(".aboutUs__more-information"),
        parent = document.querySelector(".aboutUs__description"),
        content = parent.querySelector(".aboutUs__description_additional");

    btn.addEventListener("click", () => {
        btn.remove();

        content.style.display = "unset";
        content.classList.add("aboutUs__description_additional-active");


    })
}

export default moreInform;