class Loading {
    constructor(form) {
        this.btn = form.querySelector("[type='submit']");
        this.btnCopy = this.btn.cloneNode(true);
    }

    showLoading() {
        this.btn.innerHTML = `<div class="loader"></div>`;
        this.btn.disabled = true;
    }

    hideLoading() {
        this.btn.innerHTML = this.btnCopy.innerHTML;
        this.btn.disabled = false;
    }

}
export default Loading;