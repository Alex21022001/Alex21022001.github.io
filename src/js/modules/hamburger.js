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

export default hamburger;