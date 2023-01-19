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

function analisar() {
    
    if (lista_numeros.length > 0) {
        var soma = 0
        var maior = lista_numeros[0]
        var menor = lista_numeros[0]

        for (var c in lista_numeros){
            soma += lista_numeros[c]
            if (lista_numeros[c] > maior){
                maior = lista_numeros[c]
            } else if (lista_numeros[c] < menor){
                menor = lista_numeros[c]
            }
        }

        document.getElementById('iditens').innerHTML = ' '
        document.getElementById("iditens").innerHTML += ` <p class="texto">Número(s) cadastrado(s): ${lista_numeros.length}</p> `
        document.getElementById("iditens").innerHTML += `<p class="texto">Soma total dos numeros:${soma}</p>`
        document.getElementById("iditens").innerHTML += `<p class="texto">Média dos números : ${(soma/lista_numeros.length).toFixed(1)}</p>`
        document.getElementById("iditens").innerHTML += `<p class="texto">Menor e Maior número: ${menor} e ${maior}</p>`

    } else {
        window.alert('Sem números para analisar')
    }
}