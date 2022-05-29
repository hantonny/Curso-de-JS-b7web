function digitou(event) {

    if (event.keyCode == 13 && event.ctrlKey == true) { // Enter
        let texto = document.getElementById("campo").value
        console.log(texto)
    }
}