const animation = (font, background, color) => {
    const canvas = document.querySelector("#canvas"),
        box = document.querySelector(".aboutUs"),
        h = box.offsetHeight,
        moreInform = document.querySelector(".aboutUs__description_additional");

    moreInform.style.display = "none";


    let ctx = canvas.getContext("2d"),
        width = (canvas.width = box.clientWidth),
        height = (canvas.height = h),
        str = "UTTT ".split(""),
        col = width*0.5/font,
        arr = [];

    for (let i = 0; i < col; i++) {
        arr[i] = 1
    }

    function getRandomText(){
        let txt = str[Math.floor(Math.random() * str.length)];
        let random =Math.floor(Math.random() * 2);
        if (txt === "U"){
            ctx.fillStyle = "#075B99";
        }else if (txt === "T" && random === 1){
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

            if (arr[i] * font > height && Math.random() > 0.885) {
                arr[i] = 0;
            }
            arr[i]++
        }
    }
    const id = setInterval(draw, 50);
    window.addEventListener("resize", () => location.reload())
}

export default animation;