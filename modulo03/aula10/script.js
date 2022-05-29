// Criando a função
function alterar(titulo) {
   document.getElementById("titulo").innerHTML = titulo
   document.getElementById("campo").value = titulo
}

// Função que recebe dois parametros
function somar(x, y) {
   let total = x + y
   //document.getElementById("campo").value = total

   return total
}

var resultado = somar(10,15)

console.log(resultado)

// Passando um parametro para a função
// alterar("Titulo de exemplo")