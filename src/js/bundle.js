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
        languages = menu.querySelectorAll(".languages > div");


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




window.addEventListener("DOMContentLoaded",()=>{

    (0,_modules_hamburger__WEBPACK_IMPORTED_MODULE_0__["default"])();
    (0,_modules_adaptation__WEBPACK_IMPORTED_MODULE_1__["default"])();
    (0,_modules_languages__WEBPACK_IMPORTED_MODULE_2__["default"])();
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map