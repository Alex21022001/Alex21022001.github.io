const form = () => {
    const forms = document.querySelectorAll("form");

    let name = false,
        email = false,
        phone = true,
        checked = false;

    forms.forEach(item => {
        item.addEventListener("submit", (e) => {
            e.preventDefault();

            if (name && email && checked && phone) {
                console.log("Success");
            } else {
                console.log("Error");
            }
        });

        const inputs = item.querySelectorAll("input:not(#agreement,[name='phone'])"),
            checkbox = item.querySelector("#agreement");

        checkbox.addEventListener("change", (e) => {
            checked = e.target.checked;
        });

        inputs.forEach(validateInput);
    });


    function validateInput(input) {

        input.addEventListener("input", (e) => {
            const target = e.target;

            if (target.value.length > 21)
                target.value = target.value.substring(0, 21);

            if (target.getAttribute("name") === "email") {
                email = target.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/gi) ? true : false;
            }

            if (target.getAttribute("name") === "full-name") {
                name = target.value.length > 3;
            }
        });
    }

}

export default form;