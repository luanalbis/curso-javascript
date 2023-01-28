let resultado = document.getElementById('resultado')
function escolhaNumero(a) {
    if (resultado.innerHTML == 0) resultado.innerHTML = a 
    else resultado.innerHTML += a 
}

function limparNumeros(){
    resultado.innerHTML = 0
}

function apagarNumero() {
    resultado.innerHTML = resultado.innerHTML.slice(0,-1)
}

function realizaConta(){
    try {
        resultado.innerHTML = eval(resultado.innerHTML) 
    } catch(e) {
        alert('Formato inválido')
    }
}
