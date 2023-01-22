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

// ARROW FUNCTIONS ou FUNÇÕES LAMBAS, 

const arrow = (v1,v2) => {return v1+v2}//definimos o nome, parenteses, arrow e as chaves de retorno

console.log(arrow(10,50))

const arrow2 = n => n+10 // definimos um nome, definimos o parametro sem parentese, a seta e o retorno .. USE SOMENTE PARA SOLUÇÕES DE UMA LINHA NESSA VERSÃO

console.log(arrow2(5454)) 

// FUNÇCOES QUE CHAMA OUTRAS FUNÇÕES

const somando = (...valores)=>{
    const somei = val=> { // 3- criamos a função no fomato de arrow, recebendo um parâmetro
    let total = 0
        for(v of val) //4 como recebemos um array, usamos o for of para passar pelos itens dele
        
            total += v // 5 somamos cada item do array com o total

        return total // 6 retornamos  o valor total para quem o chamou
        
    }
    return somei(valores) // 2- A função chama outra função, passando o  array que ela recebeu
}


console.log(somando(1,4,5)) // 1 -Chamamos a função somando(), passando vários numeros