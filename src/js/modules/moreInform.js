

const moreInform = () => {
    const btn = document.querySelector(".aboutUs__more-information"),
        parent = document.querySelector(".aboutUs__description"),
        content = parent.querySelector(".aboutUs__description_additional"),
        arrow = document.createElement("div");

    btn.addEventListener("click", () => {
        btn.style.display = "none";

        content.style.display = "block";
        content.classList.add("aboutUs__description_additional-active");


        arrow.classList.add("aboutUs__arrow");
        arrow.innerHTML = "<svg width=\"100%\" height=\"8\" viewBox=\"0 0 77 8\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
            "<path d=\"M77 4L1 4\" stroke=\"#EEF3F3\"/>\n" +
            "<path d=\"M4 7L1 4L4 1\" stroke=\"#EEF3F3\"/>\n" +
            "</svg>\n";
        parent.insertAdjacentElement("beforeend",arrow);
    });

    arrow.addEventListener("click",function (){
        btn.style.display = "block";
        content.style.display = "none";
        this.remove();
    });
}

export default moreInform;