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
            location.reload();
        });
    });



    getLang();

}

export default languages;