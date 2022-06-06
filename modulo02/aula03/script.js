function colorBlue() {
    limpar()
    document.getElementById("title").classList.add('blue');
}

function colorRed() {
    limpar()
    document.getElementById("title").classList.add('red');
}

function colorGreen() {
    limpar()
    document.getElementById("title").classList.add('green');
}

function showCell(element) {
    element.style.display = 'none';
    document.getElementById("cell").style.display = "block";
    document.getElementById("hideCell").style.display = "block";
}

function hideCell(element) {
    element.style.display = 'none';
    document.getElementById("cell").style.display = "none";
    document.getElementById("showCell").style.display = "block";
}

function limpar() {
    document.getElementById("title").classList.remove('blue');
    document.getElementById("title").classList.remove('red');
    document.getElementById("title").classList.remove('green');
}