var lista_numeros = []
document.querySelectorAll('.texto').innerHTML = ''

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
        var maior = 0
        var menor = 0

        var p = document.createElement('p')
        p.setAttribute('class','texto')
        p.innerHTML = `Número(s) cadastrado(s): ${lista_numeros.length}`
        document.getElementById("iditens").appendChild(p)

        for (var c in lista_numeros){
            soma += lista_numeros[c]
            if (c == 0){
                maior = lista_numeros[c]
                menor = lista_numeros[c]
            } else {

                if (lista_numeros[c] > maior){
                    maior = lista_numeros[c]
                } else if (lista_numeros[c] < menor){
                    menor = lista_numeros[c]

                }
            }
        }

        var p = document.createElement('p')
        p.setAttribute('class','texto')
        p.innerHTML = `Soma total dos numeros:${soma} `
        document.getElementById("iditens").appendChild(p)

        var p = document.createElement('p')
        p.setAttribute('class','texto')
        p.innerHTML = `Média dos números : ${(soma/lista_numeros.length).toFixed(1)} `
        document.getElementById("iditens").appendChild(p)

        var p = document.createElement('p')
        p.setAttribute('class','texto')
        p.innerHTML = `Menor e Maior número: ${menor} e ${maior} `
        document.getElementById("iditens").appendChild(p)
    } else {
        window.alert('Sem números para analisar')
    }
}
