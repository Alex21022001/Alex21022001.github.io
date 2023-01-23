/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/adaptation.js":
/*!**************************************!*\
  !*** ./src/js/modules/adaptation.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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
        width = (canvas.width = box.clientWidth + 45), //45 px = more info btn
        height = (canvas.height = h),
        str = "UTTT ".split(""),
        col = width * 0.5 / font,
        arr = [];

    if (window.screen.availWidth < 768) {
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

    function stopAnimationByScroll(id) {
        const canvas = document.querySelector(".aboutUs");
        let stop = false;

        window.addEventListener("scroll", () => {
            const rect = canvas.getBoundingClientRect();
            if ((rect.top + rect.height) < 0) {
                clearInterval(id);
                stop = true;
            }
            if (((rect.top + rect.height) > 0) && stop) {
                id = setInterval(draw, 50);
                stop = false;
            }
        });
    }


    let id = setInterval(draw, 50);

    if (window.screen.availWidth < 768) {

    } else {
        window.addEventListener("resize", () => location.reload());
    }

    stopAnimationByScroll(id);
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (animation);

/***/ }),

/***/ "./src/js/modules/downloadPDF.js":
/*!***************************************!*\
  !*** ./src/js/modules/downloadPDF.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const downloadPDF = () => {
    const pdfBtns = document.querySelectorAll("[data-pdf-btn]"),
        lang = localStorage.getItem("lang");

    pdfBtns.forEach(changePDFAccordingLang)

    function changePDFAccordingLang(btn) {
        const href = lang === "ua" ?
            btn.getAttribute("href")
                .replaceAll(/(EN)/gi, "UA") : btn.getAttribute("href");
        btn.setAttribute("href",href);
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (downloadPDF);

/***/ }),

/***/ "./src/js/modules/form/Loading.js":
/*!****************************************!*\
  !*** ./src/js/modules/form/Loading.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Loading {
    constructor(form) {
        this.btn = form.querySelector("[type='submit']");
        this.btnCopy = this.btn.cloneNode(true);
    }

    showLoading() {
        this.btn.innerHTML = "<div class='load'></div>";
        this.btn.disabled = true;
    }

    hideLoading() {
        this.btn.innerHTML = this.btnCopy.innerHTML;
        this.btn.disabled = false;
    }

}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loading);

/***/ }),

/***/ "./src/js/modules/form/form.js":
/*!*************************************!*\
  !*** ./src/js/modules/form/form.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Loading */ "./src/js/modules/form/Loading.js");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service */ "./src/js/modules/form/service.js");
/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validation */ "./src/js/modules/form/validation.js");




const form = () => {
    const forms = document.querySelectorAll("form");

    forms.forEach(item => {
        const name = {name: "name", checked: false},
            email = {name: "email", checked: false},
            phone = {name: "phone", checked: false},
            checked = {name: "agreement", checked: false};
        const validation = new _validation__WEBPACK_IMPORTED_MODULE_2__["default"](item, name, email, phone, checked);

        validation.validate();
        item.addEventListener("submit", (e) => finalValidation({item, e, name, email, phone, checked}));
    });


    function finalValidation({item, e, name, email, phone, checked}) {
        e.preventDefault();
        const state = [name, email, phone, checked];
        let success = true;

        state.forEach(({name, checked}) => {
            if (checked === false) {
                success = false;
                const errorBlock = item.querySelector(`label > [name='${name}'] ~ .input-error`);

                if (errorBlock) {
                    errorBlock.classList.add("input-error_active");
                    errorBlock.style.display = "block";
                }
            }
        });

        if (success) {
            const data = new FormData(item);
            const loading = new _Loading__WEBPACK_IMPORTED_MODULE_0__["default"](item);

            loading.showLoading();

            (0,_service__WEBPACK_IMPORTED_MODULE_1__.post)("src/sendMail.php", data)
                .then(() => {
                    alert("Success");
                    item.reset();
                })
                .catch(() => {
                    alert("Error");
                    throw new Error("We can't send your data");
                }).finally(() => {
                loading.hideLoading();
            });
        }
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (form);

/***/ }),

/***/ "./src/js/modules/form/service.js":
/*!****************************************!*\
  !*** ./src/js/modules/form/service.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "post": () => (/* binding */ post)
/* harmony export */ });
const post = async (url, data) => {
    const result = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name: data.get("name"), phone: data.get("phone"), email: data.get("email")})
    });

    if (!result.ok) {
        throw new Error("We couldn't do fetch to " + url + ". The status: " + result.status);
    }

    return await result.json();
}



/***/ }),

/***/ "./src/js/modules/form/validation.js":
/*!*******************************************!*\
  !*** ./src/js/modules/form/validation.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vanilla_masker_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vanilla-masker.min */ "./src/js/modules/form/vanilla-masker.min.js");
/* harmony import */ var _vanilla_masker_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vanilla_masker_min__WEBPACK_IMPORTED_MODULE_0__);



class FormValidation {
    constructor(form, name, email, phone, checked) {
        this.form = form;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.checked = checked;
    }


    validate() {
        const inputs = this.form.querySelectorAll("input:not(#agreement,[name='phone'])"),
            checkbox = this.form.querySelector("#agreement"),
            phoneElement = this.form.querySelector("[name='phone']");

        inputs.forEach(this.validateNameAndEmail);
        this.validateCheckbox(checkbox);
        this.validatePhone(phoneElement);
    }

    validateNameAndEmail = (input) => {
        input.addEventListener("input", (e) => {
            const target = e.target;
            const parent = target.parentElement;

            if (target.value.length > 33)
                target.value = target.value.substring(0, 31);

            if (target.getAttribute("name") === "email") {
                this.email.checked = target.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/gi) ? true : false;
            }

            if (target.getAttribute("name") === "name") {
                this.name.checked = target.value.length > 3;
            }

            const errorBlock = parent.querySelector(".input-error");
            errorBlock.style.display = "none";
            errorBlock.classList.remove("input-error_active");
        });
    }

    validateCheckbox = (checkbox) => {
        checkbox.addEventListener("change", (e) => {
            const parent = e.target.parentElement;

            this.checked.checked = e.target.checked;

            if (this.checked.checked === true) {
                const errorBlock = parent.querySelector(".input-error");
                errorBlock.style.display = "none";
                errorBlock.classList.remove("input-error_active");
            }
        });
    }

    validatePhone = (phoneElement) => {
        _vanilla_masker_min__WEBPACK_IMPORTED_MODULE_0___default()(phoneElement).maskPattern("+999 999-999-999");

        phoneElement.addEventListener("input", (e) => {
            const parent = phoneElement.parentElement;

            this.phone.checked = phoneElement.value.length > 9;

            const errorBlock = parent.querySelector(".input-error");
            errorBlock.style.display = "none";
            errorBlock.classList.remove("input-error_active");
        });
    }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormValidation);





/***/ }),

/***/ "./src/js/modules/form/vanilla-masker.min.js":
/*!***************************************************!*\
  !*** ./src/js/modules/form/vanilla-masker.min.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;!function(a,b){ true?!(__WEBPACK_AMD_DEFINE_FACTORY__ = (b),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):0}(this,function(){var a=[9,16,17,18,36,37,38,39,40,91,92,93],b=function(b){for(var c=0,d=a.length;c<d;c++)if(b==a[c])return!1;return!0},c=function(a){return a=a||{},a={delimiter:a.delimiter||".",lastOutput:a.lastOutput,precision:a.hasOwnProperty("precision")?a.precision:2,separator:a.separator||",",showSignal:a.showSignal,suffixUnit:a.suffixUnit&&" "+a.suffixUnit.replace(/[\s]/g,"")||"",unit:a.unit&&a.unit.replace(/[\s]/g,"")+" "||"",zeroCents:a.zeroCents},a.moneyPrecision=a.zeroCents?0:a.precision,a},d=function(a,b,c){for(;b<a.length;b++)"9"!==a[b]&&"A"!==a[b]&&"S"!==a[b]||(a[b]=c);return a},e=function(a){this.elements=a};e.prototype.unbindElementToMask=function(){for(var a=0,b=this.elements.length;a<b;a++)this.elements[a].lastOutput="",this.elements[a].onkeyup=!1,this.elements[a].onkeydown=!1,this.elements[a].value.length&&(this.elements[a].value=this.elements[a].value.replace(/\D/g,""))},e.prototype.bindElementToMask=function(a){for(var c=this,d=function(d){d=d||window.event;var e=d.target||d.srcElement;b(d.keyCode)&&setTimeout(function(){c.opts.lastOutput=e.lastOutput,e.value=f[a](e.value,c.opts),e.lastOutput=e.value,e.setSelectionRange&&c.opts.suffixUnit&&e.setSelectionRange(e.value.length,e.value.length-c.opts.suffixUnit.length)},0)},e=0,g=this.elements.length;e<g;e++)this.elements[e].lastOutput="",this.elements[e].onkeyup=d,this.elements[e].value.length&&(this.elements[e].value=f[a](this.elements[e].value,this.opts))},e.prototype.maskMoney=function(a){this.opts=c(a),this.bindElementToMask("toMoney")},e.prototype.maskNumber=function(){this.opts={},this.bindElementToMask("toNumber")},e.prototype.maskAlphaNum=function(){this.opts={},this.bindElementToMask("toAlphaNumeric")},e.prototype.maskPattern=function(a){this.opts={pattern:a},this.bindElementToMask("toPattern")},e.prototype.unMask=function(){this.unbindElementToMask()};var f=function(a){if(!a)throw new Error("VanillaMasker: There is no element to bind.");var b="length"in a?a.length?a:[]:[a];return new e(b)};return f.toMoney=function(a,b){if(b=c(b),b.zeroCents){b.lastOutput=b.lastOutput||"";var d="("+b.separator+"[0]{0,"+b.precision+"})",e=new RegExp(d,"g"),f=a.toString().replace(/[\D]/g,"").length||0,g=b.lastOutput.toString().replace(/[\D]/g,"").length||0;a=a.toString().replace(e,""),f<g&&(a=a.slice(0,a.length-1))}var h=a.toString().replace(/[\D]/g,""),i=new RegExp("^(0|\\"+b.delimiter+")"),j=new RegExp("(\\"+b.separator+")$"),k=h.substr(0,h.length-b.moneyPrecision),l=k.substr(0,k.length%3),m=new Array(b.precision+1).join("0");k=k.substr(k.length%3,k.length);for(var n=0,o=k.length;n<o;n++)n%3==0&&(l+=b.delimiter),l+=k[n];l=l.replace(i,""),l=l.length?l:"0";var p="";if(!0===b.showSignal&&(p=a<0||a.startsWith&&a.startsWith("-")?"-":""),!b.zeroCents){var q=h.length-b.precision,r=h.substr(q,b.precision),s=r.length;m=(m+r).slice(-(b.precision>s?b.precision:s))}return(b.unit+p+l+b.separator+m).replace(j,"")+b.suffixUnit},f.toPattern=function(a,b){var c,e="object"==typeof b?b.pattern:b,f=e.replace(/\W/g,""),g=e.split(""),h=a.toString().replace(/\W/g,""),i=h.replace(/\W/g,""),j=0,k=g.length,l="object"==typeof b?b.placeholder:void 0;for(c=0;c<k;c++){if(j>=h.length){if(f.length==i.length)return g.join("");if(void 0!==l&&f.length>i.length)return d(g,c,l).join("");break}if("9"===g[c]&&h[j].match(/[0-9]/)||"A"===g[c]&&h[j].match(/[a-zA-Z]/)||"S"===g[c]&&h[j].match(/[0-9a-zA-Z]/))g[c]=h[j++];else if("9"===g[c]||"A"===g[c]||"S"===g[c])return void 0!==l?d(g,c,l).join(""):g.slice(0,c).join("")}return g.join("").substr(0,c)},f.toNumber=function(a){return a.toString().replace(/(?!^-)[^0-9]/g,"")},f.toAlphaNumeric=function(a){return a.toString().replace(/[^a-z0-9 ]+/i,"")},f});

/***/ }),

/***/ "./src/js/modules/hamburger.js":
/*!*************************************!*\
  !*** ./src/js/modules/hamburger.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

    // languages.forEach(lang=>{
    //    lang.addEventListener("click",hideMenu);
    // });

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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const languages = () => {

    const languages = document.querySelectorAll(".languages > div");
    let lang = "en";

    function getLang() {
        if (localStorage.getItem("lang")) {
            lang = localStorage.getItem("lang");
        } else {
            localStorage.setItem("lang", lang);
        }

        languages.forEach(item => {
            if (item.classList.contains(lang)) {
                item.classList.add("language_active");
            } else {
                item.style.cursor = "pointer";
            }
        });
        changeLanguage();
    }


    function changeLanguage() {
        if (lang !== "en") {
            for (let key in allLangs) {
                document.querySelectorAll(`.lang-${key}`).forEach(item => {
                    item.innerHTML = allLangs[key][lang];
                });
            }

            translateForms();
            adaptMainTitle();
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
            localStorage.setItem("lang", lang);
            location.reload();
        });
    });


    getLang();

}

function translateForms() {
    const forms = document.querySelectorAll("form");

    forms.forEach(form => {
        form.querySelector("[name='name']").setAttribute("placeholder", "Вкажіть ваше ім'я");
        form.querySelector("[name='email']").setAttribute("placeholder", "Вкажіть ваш Email");
        form.querySelector("[name='phone']").setAttribute("placeholder", "Вкажіть ваш телефон");

        form.querySelector(".full-name").textContent = "Ваше повне ім'я";
        form.querySelector(".email").textContent = "Ваш Email";
        form.querySelector(".phone").textContent = "Ваш номер телефону";

        form.querySelector(".accept_agreement").innerHTML = "Я приймаю <a class=\"contacts__agreement_link\" href=\"#\">ці умови</a>"
        form.querySelector(".contacts__agreement-label > .input-error").textContent = "Для відправки Ви повинні погодитися з нашою політикою"
    });
}

function adaptMainTitle(){
    const title = document.querySelector(".promo__text-title");

    if (window.screen.availWidth <426 && localStorage.getItem("lang") === "ua"){
        console.log(title);
        title.innerHTML = "ТОВ\"Юкрейніан Текнолоджи Трансфер Тим\" <br> (UTTT LLC)";
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (languages);

/***/ }),

/***/ "./src/js/modules/moreInform.js":
/*!**************************************!*\
  !*** ./src/js/modules/moreInform.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const moreInform = () => {
    const btn = document.querySelector(".aboutUs__more-information"),
        parent = document.querySelector(".aboutUs__description"),
        content = parent.querySelector(".aboutUs__description_additional"),
        arrow = document.createElement("div"),
        parentHeight = (parent.scrollHeight - content.scrollHeight);
    let arrowElement;

    btn.addEventListener("click", () => {
        btn.style.display = "none";
        btn.classList.add("aboutUs__more-information_active");
        content.style.maxHeight = content.scrollHeight + "px";

        if (window.screen.availWidth < 768) {
            parent.style.minHeight = (parentHeight + 42) + "px";
        } else
            parent.style.minHeight = (parentHeight - 70) + "px";

        arrow.classList.add("aboutUs__arrow");
        arrow.innerHTML = "<svg width=\"100%\" height=\"8\" viewBox=\"0 0 77 8\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
            "<path d=\"M77 4L1 4\" stroke=\"#EEF3F3\"/>\n" +
            "<path d=\"M4 7L1 4L4 1\" stroke=\"#EEF3F3\"/>\n" +
            "</svg>";
        parent.insertAdjacentElement("beforeend", arrow);

        arrowElement = arrow.querySelectorAll("path");
    });


    arrow.addEventListener("click", function () {
        content.style.maxHeight = "15px";
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

/***/ }),

/***/ "./src/js/modules/slider/slider.js":
/*!*****************************************!*\
  !*** ./src/js/modules/slider/slider.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const slider = () => {
    const sliderWrapper = document.querySelector(".slider__slides"),
        sliderInner = document.querySelector(".slider__inner"),
        slides = document.querySelectorAll(".slider__item"),
        mainWrapper = document.querySelector(".projects__slider"),
        indicatorWrapper = document.querySelector(".slider__indicators"),
        prev = document.querySelector(".slider__prev"),
        next = document.querySelector(".slider__next"),
        contentWidth = mainWrapper.scrollWidth + "px";


    let offset = 0,
        currentSlide = 0,
        prevSlideNumber = 0,
        currentIndicator = 0;


    for (let i = 0; i < slides.length; i++) {
        const indicator = document.createElement("li");
        if (i === currentSlide) {
            indicator.classList.add("active");
        }
        indicator.setAttribute("data-slide-to", `${i}`);
        indicatorWrapper.append(indicator);
    }
    if (window.screen.availWidth < 992) {
        indicatorWrapper.style.width = parseInt(contentWidth) - 10 + "px";
    }


    const indicators = document.querySelectorAll(".slider__indicators > li");

    sliderWrapper.style.width = slides.length * 100 + "%";

    slides.forEach(item => {
        item.style.width = contentWidth;
    });

    function hideSlideDesc() {
        const moreBtns = document.querySelectorAll(".slider__item-more");

        moreBtns.forEach(btn => {
            const informationToShow = btn.parentElement.querySelector(".slider__item-additional");
            const btns = btn.parentElement.querySelector(".slider__item-btns");

            if (btns.classList.contains("slider__item-btns_active")) {
                setTimeout(() => {
                    btn.style.display = "block";
                }, 2000);

                informationToShow.classList.remove("slider__item-additional_active");
                informationToShow.style.maxHeight = 0;
                btns.style.maxHeight = 0;
                btns.classList.remove("slider__item-btns_active");
            }
        })
    }

    function doSlideMove() {
        sliderWrapper.style.transform = `translate3d(-${offset}px,0px,0px)`;

        indicators.forEach((item, index) => {
            if (index === currentIndicator) {
                item.classList.add("active");
            } else {
                item.classList.remove("active");
            }
        });
        if (prevSlideNumber !== currentSlide) {
            hideSlideDesc();
            prevSlideNumber = currentSlide;
        }
    }

    function moveNext(e, prevent) {
        if (prevent)
            e.preventDefault();


        if (offset >= parseInt(contentWidth) * (slides.length - 1)) {
            offset = 0;
            currentSlide = 0;
            currentIndicator = 0;
        } else {
            offset += parseInt(contentWidth);
            currentSlide++;
            currentIndicator++;
        }

        doSlideMove();
    }

    function movePrev(e, prevent) {
        if (prevent)
            e.preventDefault();

        if (offset === 0) {
            offset = parseInt(contentWidth) * (slides.length - 1);
            currentSlide = slides.length - 1;
            currentIndicator = slides.length - 1
        } else {
            offset -= parseInt(contentWidth);
            currentSlide--;
            currentIndicator--;
        }

        doSlideMove();
    }

    indicators.forEach(item => {
        item.addEventListener("click", (e) => {
            const ind = parseInt(item.getAttribute("data-slide-to"));
            currentIndicator = ind;
            currentSlide = ind;
            offset = currentSlide * parseInt(contentWidth);
            doSlideMove();
        });
    })


    sliderWrapper.style.transform = `translate3d(0px, 0px, 0px)`;

    let posInit = 0,
        posX1 = 0,
        posX2 = 0,
        posFinal = 0,
        posThreshold = parseInt(slides[0].style.width) * .35,
        middleWidth = parseInt(slides[0].style.width) / 2;


    function swipeStart(e) {
        posInit = posX1 = e.touches[0].clientX;
        sliderWrapper.style.transition = "";


        sliderInner.addEventListener("touchmove", swipeAction);
        sliderInner.addEventListener("touchend", swipeEnd);
    }

    function swipeAction(e) {
        let transform = +sliderWrapper.style.transform.match(/[-0-9.]+(?=px)/)[0];

        posX2 = posX1 - e.touches[0].clientX;
        posX1 = e.touches[0].clientX;


        sliderWrapper.style.transform = `translate3d(${transform - posX2}px, 0px, 0px)`;
    }

    function swipeEnd(e) {
        posFinal = posInit - posX1;

        if (Math.abs(posFinal) > posThreshold && posInit > middleWidth && currentSlide !== slides.length - 1) {
            moveNext(e, false);
        }

        if (Math.abs(posFinal) > posThreshold && posInit < middleWidth && currentSlide !== 0) {
            movePrev(e, false);
        }

        if (posInit !== posX1) {
            doSlideMove();
        }
    }

    next.addEventListener("click", (e) => moveNext(e, true));
    prev.addEventListener("click", (e) => movePrev(e, true));

    sliderInner.addEventListener("touchstart", swipeStart);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);

/***/ }),

/***/ "./src/js/modules/slider/slider_more.js":
/*!**********************************************!*\
  !*** ./src/js/modules/slider/slider_more.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sliderMore);

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_hamburger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/hamburger */ "./src/js/modules/hamburger.js");
/* harmony import */ var _modules_adaptation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/adaptation */ "./src/js/modules/adaptation.js");
/* harmony import */ var _modules_languages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/languages */ "./src/js/modules/languages.js");
/* harmony import */ var _modules_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/animation */ "./src/js/modules/animation.js");
/* harmony import */ var _modules_moreInform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/moreInform */ "./src/js/modules/moreInform.js");
/* harmony import */ var _modules_slider_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider/slider */ "./src/js/modules/slider/slider.js");
/* harmony import */ var _modules_slider_slider_more__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/slider/slider_more */ "./src/js/modules/slider/slider_more.js");
/* harmony import */ var _modules_downloadPDF__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/downloadPDF */ "./src/js/modules/downloadPDF.js");
/* harmony import */ var _modules_form_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/form/form */ "./src/js/modules/form/form.js");










document.body.onload = function () {
    setTimeout(() => {
        const preloader = document.querySelector(".preloader");

        if (!preloader.classList.contains("preloader_done")) {
            preloader.classList.add("preloader_done");
            document.body.classList.add("preloader-body_done");
        }
    }, 600);

}

window.addEventListener("DOMContentLoaded", () => {

    try {
        ;(0,_modules_hamburger__WEBPACK_IMPORTED_MODULE_0__["default"])();
    } catch (e) {
        console.log("Something wrong in hamburger module. " + e);
    }

    try {
        (0,_modules_adaptation__WEBPACK_IMPORTED_MODULE_1__["default"])();
    } catch (e) {
        console.log("Something wrong in adaptation module. " + e);
    }

    try {
        (0,_modules_languages__WEBPACK_IMPORTED_MODULE_2__["default"])();
    } catch (e) {
        console.log("Something wrong in languages module. " + e);
    }

    try {
        (0,_modules_moreInform__WEBPACK_IMPORTED_MODULE_4__["default"])();
    } catch (e) {
        console.log("Something wrong in moreInformation module. " + e);
    }

    try {
        (0,_modules_animation__WEBPACK_IMPORTED_MODULE_3__["default"])(11, "rgba(30, 30, 30, .1)", "#2CBF96", 0.935);
    } catch (e) {
        console.log("Something wrong in animation module. " + e);
    }

    try {
        (0,_modules_slider_slider__WEBPACK_IMPORTED_MODULE_5__["default"])();
    } catch (e) {
        console.log("Something wrong in slider module. " + e);
    }

    try {
        (0,_modules_slider_slider_more__WEBPACK_IMPORTED_MODULE_6__["default"])();
    } catch (e) {
        console.log("Something wrong in slider_more module. " + e);
    }

    try {
        (0,_modules_downloadPDF__WEBPACK_IMPORTED_MODULE_7__["default"])();
    } catch (e) {
        console.log("Something wrong in downloadPDF module. " + e);
    }

    try {
        (0,_modules_form_form__WEBPACK_IMPORTED_MODULE_8__["default"])();
    } catch (e) {
        console.log("Something wrong in form module. " + e);
    }


});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map