import hamburger from "./modules/hamburger";
import adaptation from "./modules/adaptation";
import languages from "./modules/languages";
import animation from "./modules/animation";
import moreInform from "./modules/moreInform";
import slider from "./modules/slider";
import slider_more from "./modules/slider_more";
import downloadPDF from "./modules/downloadPDF";

document.body.onload = function () {
    setTimeout(() => {
        const preloader = document.querySelector(".preloader");

        if (!preloader.classList.contains("preloader_done")) {
            preloader.classList.add("preloader_done");
            document.body.classList.add("preloader-body_done");
        }
    }, 300);

}

window.addEventListener("DOMContentLoaded", () => {

    try {
        hamburger();
    } catch (e) {
        console.log("Something wrong in hamburger module. " + e);
    }

    try {
        adaptation();
    } catch (e) {
        console.log("Something wrong in adaptation module. " + e);
    }

    try {
        languages();
    } catch (e) {
        console.log("Something wrong in languages module. " + e);
    }

    try {
        moreInform();
    } catch (e) {
        console.log("Something wrong in moreInformation module. " + e);
    }

    try {
        animation(11, "rgba(30, 30, 30, .1)", "#2CBF96", 0.935);
    } catch (e) {
        console.log("Something wrong in animation module. " + e);
    }

    try {
        slider();
    } catch (e) {
        console.log("Something wrong in slider module. " + e);
    }

    try {
        slider_more();
    } catch (e) {
        console.log("Something wrong in slider_more module. " + e);
    }

    try {
        downloadPDF();
    } catch (e) {
        console.log("Something wrong in downloadPDF module. " + e);
    }


});