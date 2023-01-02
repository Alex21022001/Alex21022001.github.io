const downloadPDF = () => {
    const pdfBtns = document.querySelectorAll("[data-pdf-btn]"),
        lang = localStorage.getItem("lang");

    pdfBtns.forEach(changePDFAccordingLang)

    function changePDFAccordingLang(btn) {
        const href = lang === "ua" ?
            btn.getAttribute("href")
                .replaceAll(/(EN)/gi, "UA") : btn.getAttribute("href");
        btn.setAttribute("href",href);
    }
}

export default downloadPDF;