let resultado = document.getElementById('resultado')
function escolhaNumero(a) {
    if (resultado.innerHTML == 0) resultado.innerHTML = a 
    else resultado.innerHTML += a 
}

function limparNumeros(){
    resultado.innerHTML = 0
}

let soma = '8 + 2'
console.log(soma)