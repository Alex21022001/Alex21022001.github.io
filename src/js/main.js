import hamburger from "./modules/hamburger";
import adaptation from "./modules/adaptation";
import languages from "./modules/languages";
import animation from "./modules/animation";

window.addEventListener("DOMContentLoaded",()=>{

    hamburger();
    adaptation();
    languages();
    animation(11,"rgba(30, 30, 30, .1)","#2CBF96");

});