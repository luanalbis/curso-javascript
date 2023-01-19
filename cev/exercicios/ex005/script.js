var lista_numeros = []
function adicionar(){
    var numero = Number(document.getElementById('idnum').value)
    if (lista_numeros.indexOf(numero) < 0 && numero > 0 && numero <=100){
        lista_numeros.unshift(numero)
        var option = document.createElement('option')
        option.setAttribute("id",`numero${numero}`)
        option.innerHTML = numero
        document.getElementById('idlista_num').appendChild(option)
        document.getElementById('adicionado').innerHTML = `Número ${numero} ADICIONADO!`
    } else if (lista_numeros.indexOf(numero) >= 0){
        window.alert('Sem números repetidos, por favor')

    } else if (numero > 100 || numero < 1){
        window.alert('Número fora do valor permitido!')
    }
}

function remover() {
    var numero = Number(document.getElementById('idnum').value)
    if (lista_numeros.indexOf(numero) >= 0 && numero > 0 && numero <=100){
        lista_numeros.splice(lista_numeros.indexOf(numero),1)
        var pai = document.getElementById('idlista_num')
        var filho = document.getElementById(`numero${numero}`)
        pai.removeChild(filho)
        document.getElementById('adicionado').innerHTML = `Número ${numero} REMOVIDO!`
    } else if (lista_numeros.indexOf(numero) < 0){
        window.alert('Número não está na lista')

    } else if (numero > 100 || numero < 1){
        window.alert('Número fora do valor permitido!')
    }

}
