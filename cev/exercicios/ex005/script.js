var lista_numeros = []

//1 Primeiro capturei o valor do input para a variavel numero
//2 Verifiquei se o número estava presente na lista e se atendia as condições
//2 Se o número não estiver na lista, será adicionado na mesma
//3 Criei um elemento option com ID referente ao numero dele, para diferenciar os numeros
//4 Adicionei um texto ao option, o texto é o numero do input
//5 Adicionei os option com o appendChild ao elemento Select através do seu ID
//6 Condições caso o número já esteja na lista ou fora dos valores permitidos

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

//7 Primeiro capturei o valor do input para a variavel numero
//8 Verifiquei se o número estava presente na lista e se atendia as condições
//8 A condição valerá se o número estiver na lista
//9 criei uma variável pai, que recebe um elemento por id
//10 criei uma variável filho, que recebe um elemento option pelo ID
//10 No caso, o ID do elemento option será seu número, pois cada um é único
//11 usei pai.removChild(filho), para remover o elemento option
//12 Condições caso a condição seja negada

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

        document.getElementById('iditens').innerHTML = ''
        document.getElementById("iditens").innerHTML += ` <p class="texto">Número(s) cadastrado(s): ${lista_numeros.length}</p> `
        document.getElementById("iditens").innerHTML += `<p class="texto">Soma total dos numeros:${soma}</p>`
        document.getElementById("iditens").innerHTML += `<p class="texto">Média dos números : ${(soma/lista_numeros.length).toFixed(1)}</p>`
        document.getElementById("iditens").innerHTML += `<p class="texto">Menor e Maior número: ${menor} e ${maior}</p>`

    } else {
        window.alert('Sem números para analisar')
    }
}