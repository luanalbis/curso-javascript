function funcao() { // podemos passar quantos argumentos quisermos em funções criadas com a palavra function

    console.log(arguments) //parametros são chamados de argumentos, podemos pegar pelo índice

    for(let c in arguments)//
    console.log(arguments[c])
    
}

funcao(1,2,3,2,5,4,85,2,1,2,5,5,4,'sjsjsh')


function objeto({nome , sobrenome, idade}){ // passamos um objeto comm parâmetro
    console.log(nome,sobrenome,idade)
}

let obj = {nome:'Luan', sobrenome:'albis', idade:22} // a função irá retornar cada KEY 
objeto(obj)