import hamburger from "./modules/hamburger";
import adaptation from "./modules/adaptation";
import languages from "./modules/languages";
import animation from "./modules/animation";
import moreInform from "./modules/moreInform";

window.addEventListener("DOMContentLoaded",()=>{

    hamburger();
    adaptation();
    languages();
    moreInform();
    animation(11,"rgba(30, 30, 30, .1)","#2CBF96",0.935);
});