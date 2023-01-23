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

export default languages;