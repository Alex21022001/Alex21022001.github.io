const moreInform = () => {
    const btn = document.querySelector(".aboutUs__more-information"),
        parent = document.querySelector(".aboutUs__description"),
        content = parent.querySelector(".aboutUs__description_additional"),
        arrow = document.createElement("div"),
        parentHeight = (parent.scrollHeight - content.scrollHeight) + "px";
    let arrowElement;

    btn.addEventListener("click", () => {
        btn.style.display = "none";
        btn.classList.add("aboutUs__more-information_active");
        content.style.maxHeight = content.scrollHeight + "px";

        if (window.screen.availWidth <768){
            parent.style.minHeight = parentHeight;
        }

        arrow.classList.add("aboutUs__arrow");
        arrow.innerHTML = "<svg width=\"100%\" height=\"8\" viewBox=\"0 0 77 8\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
            "<path d=\"M77 4L1 4\" stroke=\"#EEF3F3\"/>\n" +
            "<path d=\"M4 7L1 4L4 1\" stroke=\"#EEF3F3\"/>\n" +
            "</svg>";
        parent.insertAdjacentElement("beforeend", arrow);

        arrowElement = arrow.querySelectorAll("path");
    });


    arrow.addEventListener("click", function () {
        content.style.maxHeight = "0px";
        arrow.remove();

        setTimeout(() => {
            btn.style.display = "inline-block";
        }, 1200);
        setTimeout(() => {
            btn.classList.remove("aboutUs__more-information_active");
        }, 1300);
    });

    arrow.addEventListener("mouseover", () => {
        arrowElement.forEach(item => {
            item.setAttribute("stroke", "#2CBF96");
        });
    });

    arrow.addEventListener("mouseout", () => {
        arrowElement.forEach(item => {
            item.setAttribute("stroke", "#EEF3F3");
        });
    });


}

export default moreInform;