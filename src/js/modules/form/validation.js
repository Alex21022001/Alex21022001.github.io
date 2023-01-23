import VanillaMasker from "./vanilla-masker.min"


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
        VanillaMasker(phoneElement).maskPattern("+999 999-999-999");

        phoneElement.addEventListener("input", (e) => {
            const parent = phoneElement.parentElement;

            this.phone.checked = phoneElement.value.length > 9;

            const errorBlock = parent.querySelector(".input-error");
            errorBlock.style.display = "none";
            errorBlock.classList.remove("input-error_active");
        });
    }

}

export default FormValidation;



