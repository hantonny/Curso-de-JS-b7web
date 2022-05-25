function subirTela() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
}

window.addEventListener("scroll", function (event) {
    if (window.scrollY > 0) {
        document.querySelector('#botao').style.visibility = "visible";
    }
    if (window.scrollY == 0) {
        document.querySelector('#botao').style.visibility = "hidden";
    }
});