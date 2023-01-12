import VanillaMasker from "./vanilla-masker.min"

const form = () => {
    const forms = document.querySelectorAll("form");

    const name = {name: "name", checked: false},
        email = {name: "email", checked: false},
        phone = {name: "phone", checked: false},
        checked = {name: "agreement", checked: false};

    forms.forEach(item => {
        item.addEventListener("submit", (e) => {
            e.preventDefault();
            const state = [name, email, phone, checked];
            let success = true;

            state.forEach(({name, checked}) => {
                if (checked === false) {
                    success = false;
                    const errorBlock = item.querySelector(`label > [name='${name}'] ~ .input-error`);

                    if (errorBlock) {
                        if (name === "agreement") {
                            errorBlock.classList.add("input-error_active");
                        }
                        errorBlock.style.display = "block";
                    }
                }
            });
            if (success) {
                const data = new FormData(item);
                console.log({name: data.get("name"), phone: data.get("phone"), email: data.get("email")});
                post("src/sendMail.php", data)
                    .then(res => {
                        if (!res.ok) {
                            console.log(res.status);
                            console.log(res.body);
                            throw new Error("fetch is wrong");
                        }
                        return res.json();
                    }).then(res => console.log(res))
                    .catch(res => console.log(res));
            }
        });

        validate(item);
    });

    const post = async (url, data) => {
        return await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name: data.get("name"), phone: data.get("phone"), email: data.get("email")})
        });

        // if (!result.ok) {
        //     throw new Error("We couldn't do fetch to " + url + ". The status: " + result.status);
        // }
        //
        // return await result.json();
    }

    function validate(item) {
        const inputs = item.querySelectorAll("input:not(#agreement,[name='phone'])"),
            checkbox = item.querySelector("#agreement"),
            phoneElement = item.querySelector("[name='phone']");


        inputs.forEach(validateNameAndEmail);
        validateCheckbox(checkbox);
        validatePhone(phoneElement);
    }


    function validateNameAndEmail(input) {
        input.addEventListener("input", (e) => {
            const target = e.target;
            const parent = target.parentElement;

            if (target.value.length > 21)
                target.value = target.value.substring(0, 21);

            if (target.getAttribute("name") === "email") {
                email.checked = target.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/gi) ? true : false;
            }

            if (target.getAttribute("name") === "name") {
                name.checked = target.value.length > 3;
            }

            parent.querySelector(".input-error").style.display = "none";
        });
    }

    function validateCheckbox(checkbox) {
        checkbox.addEventListener("change", (e) => {
            const parent = e.target.parentElement;

            checked.checked = e.target.checked;

            if (checked.checked === true) {
                const error = parent.querySelector(".input-error");
                error.style.display = "none";
                error.classList.remove("input-error_active");
            }
        });
    }

    function validatePhone(phoneElement) {
        VanillaMasker(phoneElement).maskPattern("+999 999-999-999");

        phoneElement.addEventListener("input", (e) => {
            const parent = phoneElement.parentElement;

            phone.checked = phoneElement.value.length > 9;

            parent.querySelector(".input-error")
                .style.display = "none";
        });
    }
}

export default form;