class FormResult {
    static modal = document.querySelector(".modal-result");
    static close;

    static success() {
        if (localStorage.getItem("lang") === "ua") {
            FormResult.modal.innerHTML = `
<div class="modal-inner">
        <img class="modal-close" alt="cross" src="src/icons/close.png"/>
        <div class="modal-wrapper">
            <div class="modal-img">
                <svg width="47" height="48" viewBox="0 0 47 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M30.8184 7.56395C27.2766 5.98581 23.3195 5.59486 19.5374 6.44938C15.7552 7.30391 12.3506 9.35813 9.83136 12.3057C7.31208 15.2532 5.8131 18.9362 5.55798 22.8053C5.30285 26.6743 6.30525 30.5222 8.41568 33.7751C10.5261 37.0279 13.6315 39.5114 17.2687 40.8551C20.9059 42.1989 24.88 42.3309 28.5983 41.2315C32.3167 40.1321 35.58 37.8602 37.9017 34.7546C40.2234 31.649 41.4789 27.8761 41.4811 23.9986V20.5956H44.6857V23.9996C44.6831 28.5681 43.2037 33.0143 40.4683 36.6733C37.7329 40.3324 33.888 43.0092 29.5069 44.3045C25.1259 45.5999 20.4435 45.4443 16.1581 43.8611C11.8727 42.2779 8.21391 39.3518 5.72737 35.5192C3.24083 31.6867 2.05978 27.153 2.36038 22.5944C2.66097 18.0358 4.4271 13.6965 7.39535 10.2236C10.3636 6.75076 14.375 4.33044 18.8312 3.32362C23.2873 2.31681 27.9496 2.77744 32.1226 4.63682L33.5862 5.28895L32.2819 8.21607L30.8184 7.56395Z"
                          fill="#2CBF96"/>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M45.3491 8.33221L24.6334 29.0687L22.3669 29.0692L15.3589 22.0613L17.6248 19.7953L23.4993 25.6697L43.082 6.06738L45.3491 8.33221Z"
                          fill="#2CBF96"/>
                </svg>
            </div>
            <div class="modal-text">
                <div class="modal-title">Успіх!</div>
                <div class="modal-desc">Ваша заявка відправлена.<br> Ми скоро зв'яжемося з Вами</div>
            </div>
        </div>
    </div>`
        } else {
            FormResult.modal.innerHTML = `
<div class="modal-inner">
        <img class="modal-close" alt="cross" src="src/icons/close.png"/>
        <div class="modal-wrapper">
            <div class="modal-img">
                <svg width="47" height="48" viewBox="0 0 47 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M30.8184 7.56395C27.2766 5.98581 23.3195 5.59486 19.5374 6.44938C15.7552 7.30391 12.3506 9.35813 9.83136 12.3057C7.31208 15.2532 5.8131 18.9362 5.55798 22.8053C5.30285 26.6743 6.30525 30.5222 8.41568 33.7751C10.5261 37.0279 13.6315 39.5114 17.2687 40.8551C20.9059 42.1989 24.88 42.3309 28.5983 41.2315C32.3167 40.1321 35.58 37.8602 37.9017 34.7546C40.2234 31.649 41.4789 27.8761 41.4811 23.9986V20.5956H44.6857V23.9996C44.6831 28.5681 43.2037 33.0143 40.4683 36.6733C37.7329 40.3324 33.888 43.0092 29.5069 44.3045C25.1259 45.5999 20.4435 45.4443 16.1581 43.8611C11.8727 42.2779 8.21391 39.3518 5.72737 35.5192C3.24083 31.6867 2.05978 27.153 2.36038 22.5944C2.66097 18.0358 4.4271 13.6965 7.39535 10.2236C10.3636 6.75076 14.375 4.33044 18.8312 3.32362C23.2873 2.31681 27.9496 2.77744 32.1226 4.63682L33.5862 5.28895L32.2819 8.21607L30.8184 7.56395Z"
                          fill="#2CBF96"/>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M45.3491 8.33221L24.6334 29.0687L22.3669 29.0692L15.3589 22.0613L17.6248 19.7953L23.4993 25.6697L43.082 6.06738L45.3491 8.33221Z"
                          fill="#2CBF96"/>
                </svg>
            </div>
            <div class="modal-text">
                <div class="modal-title">Success!</div>
                <div class="modal-desc">Your application is accepted. <br>We will contact you soon</div>
            </div>
        </div>
    </div>`
        }

        FormResult.show();
    }

    static fail() {
        if (localStorage.getItem("lang") === "ua") {
            FormResult.modal.innerHTML = `
    <div class="modal-inner">
        <img class="modal-close" alt="cross" src="src/icons/close.png"/>
        <div class="modal-wrapper">
            <div class="modal-img">
                <svg width="47" height="48" viewBox="0 0 47 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.571777 42.7806L22.1134 5.57227H24.8867L46.4284 42.7806L45.0418 45.1857H1.95843L0.571777 42.7806ZM4.73748 41.9811H42.2627L23.5001 9.57298L4.73748 41.9811Z" fill="#FC323E"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M25.1025 20.4395V31.4773H21.8979V20.4395H25.1025Z" fill="#FC323E"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M21.8979 35.7502C21.8979 34.8653 22.6153 34.1479 23.5002 34.1479H23.5216C24.4065 34.1479 25.1239 34.8653 25.1239 35.7502C25.1239 36.6351 24.4065 37.3525 23.5216 37.3525H23.5002C22.6153 37.3525 21.8979 36.6351 21.8979 35.7502Z" fill="#FC323E"/>
                </svg>
            </div>
            <div class="modal-text">
                <div class="modal-title modal-title_error">Помилка!</div>
                <div class="modal-desc">Виникла помилка. <br>С пробуйте ще раз!</div>
            </div>
        </div>
    </div>`;
        } else {
            FormResult.modal.innerHTML = `
    <div class="modal-inner">
        <img class="modal-close" alt="cross" src="src/icons/close.png"/>
        <div class="modal-wrapper">
            <div class="modal-img">
                <svg width="47" height="48" viewBox="0 0 47 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.571777 42.7806L22.1134 5.57227H24.8867L46.4284 42.7806L45.0418 45.1857H1.95843L0.571777 42.7806ZM4.73748 41.9811H42.2627L23.5001 9.57298L4.73748 41.9811Z" fill="#FC323E"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M25.1025 20.4395V31.4773H21.8979V20.4395H25.1025Z" fill="#FC323E"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M21.8979 35.7502C21.8979 34.8653 22.6153 34.1479 23.5002 34.1479H23.5216C24.4065 34.1479 25.1239 34.8653 25.1239 35.7502C25.1239 36.6351 24.4065 37.3525 23.5216 37.3525H23.5002C22.6153 37.3525 21.8979 36.6351 21.8979 35.7502Z" fill="#FC323E"/>
                </svg>
            </div>
            <div class="modal-text">
                <div class="modal-title modal-title_error">Error!</div>
                <div class="modal-desc">An error has occurred. <br>Try again</div>
            </div>
        </div>
    </div>`;
        }

        FormResult.show();
    }

    static show() {
        FormResult.close = FormResult.modal.querySelector(".modal-close");

        FormResult.modal.classList.remove("modal-result_hide");
        FormResult.modal.classList.add("modal-result_active");

        FormResult.close.addEventListener("click", FormResult.hide);
        setTimeout(FormResult.hide, 3000);
    }

    static hide() {
        FormResult.modal.classList.add("modal-result_hide");
        FormResult.modal.classList.remove("modal-result_active");
    }

}

export default FormResult;