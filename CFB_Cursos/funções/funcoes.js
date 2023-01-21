//funções REST - funções sem numero definido de parãmetros

function soma(...valores) {
    for (c of valores){
        if (c % 2 === 0){
            console.log(valores.indexOf(c))
        }
    }
    
    return valores
}

console.log(soma(1,2,3,4,5,6,7,1,4,6,45,46))

//funções que não precisam de um nome, precisam ser associadas a algo

const funcao = function(a,b){return a*b}

console.log(funcao(34,343))

//funções construtoras - new Function com F maiúsculo e com aspas em cada item

const construtoras = new Function("v1","v2","return v1*v2")

console.log(construtoras(10,10))