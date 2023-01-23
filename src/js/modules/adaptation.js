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


export default adaptation;