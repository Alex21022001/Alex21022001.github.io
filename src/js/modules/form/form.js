import Loading from "./Loading";
import {post} from "./service";
import FormValidation from "./validation";

const form = () => {
    const forms = document.querySelectorAll("form");

    forms.forEach(item => {
        const name = {name: "name", checked: false},
            email = {name: "email", checked: false},
            phone = {name: "phone", checked: false},
            checked = {name: "agreement", checked: false};
        const validation = new FormValidation(item, name, email, phone, checked);

        validation.validate();
        item.addEventListener("submit", (e) => finalValidation({item, e, name, email, phone, checked}));
    });


    function finalValidation({item, e, name, email, phone, checked}) {
        e.preventDefault();
        const state = [name, email, phone, checked];
        let success = true;

        state.forEach(({name, checked}) => {
            if (checked === false) {
                success = false;
                const errorBlock = item.querySelector(`label > [name='${name}'] ~ .input-error`);

                if (errorBlock) {
                    errorBlock.classList.add("input-error_active");
                    errorBlock.style.display = "block";
                }
            }
        });

        if (success) {
            const data = new FormData(item);
            const loading = new Loading(item);

            loading.showLoading();

            post("src/sendMail.php", data)
                .then(() => {
                    alert("Success");
                    item.reset();
                })
                .catch(() => {
                    alert("Error");
                    throw new Error("We can't send your data");
                }).finally(() => {
                loading.hideLoading();
            });
        }
    }
}

export default form;