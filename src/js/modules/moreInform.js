import animation from "./animation";

const moreInform = (animation,id)=>{
    const btn = document.querySelector(".aboutUs__more-information"),
        parent = document.querySelector(".aboutUs__description"),
        content = parent.querySelector(".aboutUs__description_additional"),
        canvas = document.querySelector("#canvas");

    btn.addEventListener("click",()=>{
        content.classList.add("aboutUs__description_additional-active");

        animation(11,"rgba(30, 30, 30, .1)","#2CBF96",id);
    })
}

export default moreInform;