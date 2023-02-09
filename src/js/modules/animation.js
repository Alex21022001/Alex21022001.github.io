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

    // if (window.screen.availWidth < 768) {
    //     window.addEventListener("resize", () => location.reload());
    // }

    stopAnimationByScroll(id);
}


export default animation;