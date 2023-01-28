// Funções que fogem do padrão, podendo mostrar valores diferentes a cada vez que chamarmos 

function* geradora() {
    //codigo
    yield 'valor 1'
    //codigo
    yield 'valor 2'
    //codigo
    yield 'valor 3'
}

const g1 = geradora()
console.log(g1.next().value) // mostra o primeiro valor
console.log(g1.next().value) // mostra o segumdo valor
console.log(g1.next().value) // mostra o terceiro valor

function* contador() { // contador infinito
    let i = 0
    while(true) {
        yield i 
        i++
    }
}

const c1 = contador()
console.log(c1.next().value)
console.log(c1.next().value)
console.log(c1.next().value)
console.log(c1.next().value)
console.log(c1.next().value)
console.log(c1.next().value)

