/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/adaptation.js":
/*!**************************************!*\
  !*** ./src/js/modules/adaptation.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const adaptation = () => {
    const logo = document.querySelector(".promo__logo"),
        images = document.querySelectorAll('.promo__logo > img'),
        img = document.createElement("img");

    if (window.screen.availWidth <= 350) {
        img.setAttribute("src", "src/icons/s_logo.svg");
        images.forEach(item => {
            item.remove();
        });

        logo.append(img);
    }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (adaptation);

/***/ }),

/***/ "./src/js/modules/animation.js":
/*!*************************************!*\
  !*** ./src/js/modules/animation.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const animation = (font, background, color, speed) => {
    const canvas = document.querySelector("#canvas"),
        box = document.querySelector(".aboutUs"),
        h = box.offsetHeight,
        content = document.querySelector(".aboutUs__description_additional");

    content.style.maxHeight = "0px";

    let ctx = canvas.getContext("2d"),
        width = (canvas.width = box.clientWidth), //45 px = more info btn
        height = (canvas.height = h),
        str = "UTTT ".split(""),
        col = width * 0.5 / font,
        arr = [];

    if (window.screen.availWidth <768){
        col = width / font;
    }

    for (let i = 0; i < col; i++) {
        arr[i] = 1
    }

    function getRandomText() {
        let txt = str[Math.floor(Math.random() * str.length)];
        let random = Math.floor(Math.random() * 2);
        if (txt === "U") {
            ctx.fillStyle = "#075B99";
        } else if (txt === "T" && random === 1) {
            ctx.fillStyle = "#6F39A4";
        }

        return txt;
    }

    const draw = () => {
        ctx.fillStyle = background;
        ctx.fillRect(0, 0, width, height);
        ctx.font = `${font}px`;

        for (let i = 0; i < arr.length; i++) {
            ctx.fillStyle = color;
            let txt = getRandomText();

            ctx.fillText(txt, i * font, arr[i] * font);

            if (arr[i] * font > height && Math.random() > speed) {
                arr[i] = 0;
            }
            arr[i]++
        }
    }
    const id = setInterval(draw, 50);
    window.addEventListener("resize", () => location.reload())
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (animation);

/***/ }),

/***/ "./src/js/modules/hamburger.js":
/*!*************************************!*\
  !*** ./src/js/modules/hamburger.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const hamburger = () => {
    const hamburger = document.querySelector(".hamburger"),
        close = document.querySelector(".promo__mobile-menu_close"),
        menu = document.querySelector(".promo__mobile-menu_block"),
        overlay = document.querySelector(".overlay"),
        languages = menu.querySelectorAll(".languages > div"),
        mobileMenuElements = document.querySelectorAll(".promo__mobile-menu_list a");

    function showMenu(){
        menu.style.display = "block";

        setTimeout(() => {
            this.classList.add("hamburger_hidden")
            document.body.style.overflow = "hidden";
            overlay.classList.add("overlay_active");
            menu.classList.add("promo__mobile-menu_active");
            close.style.display = "block";
        }, 100);
    }


    function hideMenu(){
        document.body.style.overflow = "";
        overlay.classList.remove("overlay_active");
        menu.classList.remove("promo__mobile-menu_active");

        setTimeout(function () {
            hamburger.classList.remove("hamburger_hidden")
            menu.style.display = "none";
        }, 400);
    }


    window.addEventListener("resize",()=>{
       if (window.screen.availWidth >= 768){
           hideMenu();
       }
    });

    languages.forEach(lang=>{
       lang.addEventListener("click",hideMenu);
    });

    mobileMenuElements.forEach(item=>{
        item.addEventListener("click",hideMenu);
    });

    hamburger.addEventListener("click", showMenu);
    close.addEventListener("click", hideMenu);


}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hamburger);

/***/ }),

/***/ "./src/js/modules/languages.js":
/*!*************************************!*\
  !*** ./src/js/modules/languages.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const languages = () => {

    const languages = document.querySelectorAll(".languages > div");
    let lang = "en";

    function getLang(){
        if (localStorage.getItem("lang")){
            lang = localStorage.getItem("lang");
        }else {
            localStorage.setItem("lang",lang);
        }

        languages.forEach(item=>{
           if (item.classList.contains(lang)){
               item.classList.add("language_active");
           }else {
               item.style.cursor = "pointer";
           }
        });
        changeLanguage();
    }


    function changeLanguage(){
        for (let key in allLangs){
            document.querySelector(`.lang-${key}`).innerHTML = allLangs[key][lang];
        }
    }



    languages.forEach(langItem => {
        langItem.addEventListener("click", function () {

            languages.forEach(item => {
                item.classList.remove("language_active");
                item.style.cursor = "auto";
                if (item !== this) {
                    item.style.cursor = "pointer";
                }
            });


            this.classList.add("language_active");
            lang = this.getAttribute("class").split(" ")[0];
            localStorage.setItem("lang",lang);
            changeLanguage();
        });
    });



    getLang();

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (languages);

/***/ }),

/***/ "./src/js/modules/moreInform.js":
/*!**************************************!*\
  !*** ./src/js/modules/moreInform.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

        if (window.screen.availWidth <768) {
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (moreInform);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_hamburger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/hamburger */ "./src/js/modules/hamburger.js");
/* harmony import */ var _modules_adaptation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/adaptation */ "./src/js/modules/adaptation.js");
/* harmony import */ var _modules_languages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/languages */ "./src/js/modules/languages.js");
/* harmony import */ var _modules_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/animation */ "./src/js/modules/animation.js");
/* harmony import */ var _modules_moreInform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/moreInform */ "./src/js/modules/moreInform.js");






window.addEventListener("DOMContentLoaded",()=>{

    (0,_modules_hamburger__WEBPACK_IMPORTED_MODULE_0__["default"])();
    (0,_modules_adaptation__WEBPACK_IMPORTED_MODULE_1__["default"])();
    (0,_modules_languages__WEBPACK_IMPORTED_MODULE_2__["default"])();
    (0,_modules_moreInform__WEBPACK_IMPORTED_MODULE_4__["default"])();
    (0,_modules_animation__WEBPACK_IMPORTED_MODULE_3__["default"])(11,"rgba(30, 30, 30, .1)","#2CBF96",0.935);
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map