function map() {
    const arr = [...document.querySelectorAll(".point")];

    bindEvent(arr,showText);


    function showText(e) {
        const target = e.currentTarget;
        const desc = document.querySelector(`#${target.getAttribute("id")} + .point_desc`);

        target.classList.add("point_active");
        desc.classList.add("point_desc_active");

        setTimeout(close, 3500);

        function close() {
            target.classList.remove("point_active");
            desc.classList.remove("point_desc_active");
        }
    }

    function bindEvent(arr, callback) {
        arr.forEach(item => {
            item.addEventListener("click", callback);
        })
    }
}

export default map;