//return termina a função
//

function multiplicador(multiplicador) { // função recebe um parâmetro
    return (n) => { return n * multiplicador} // irá retornar o retorno de outra função
}

let duplica = multiplicador(2)//recebe return desta função, que no caso é outra função(arrow) com parrametro n
console.log(duplica(5)) // chamamos a função duplica, que irá retornar a multiplicação do parâmetro n * multiplicador