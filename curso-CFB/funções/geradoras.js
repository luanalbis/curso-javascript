// funções GERADORAS, temos que usar a palavra function com um * após

function* cores(){
    yield 'vermelho'
    yield 'verde'
    yield 'Azul'

}

const itc = cores()
console.log(itc.next().value) // quando chamamos ela assim, retornará o primeiro valor
console.log(itc.next().value) // segunda execução
console.log(itc.next().value) // terceira execução
console.log(itc.next().value) // não tem mais valores, irá retornar undefined


