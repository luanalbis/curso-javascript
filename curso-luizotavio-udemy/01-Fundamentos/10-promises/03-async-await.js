function espera(msg, tempo =1000){ // parâmetros
    return new Promise((resolve,reject) => { //retornamos uma nova promise
        if (typeof msg !== 'string') {
            reject('Precisa ser uma frase válida') // erros irão pro reject
            retur
            n
        }
        setTimeout(() => { // aqui fazemos o set timeout que irá receber o resolve com o parametro
            resolve(msg)
        },tempo ) // apos a função, coloque o tempo do timeout
    })
}

espera('Oi 1')
    .then(valor => {
        console.log(valor)
        return espera('oi 2')})
    .then(valor => {
        console.log(valor)
        return espera('oi 3')})

    .then(valor => console.log(valor))
    .catch()

async function executa() {
    try {
    console.log(await espera('oi 1'))
    console.log(await espera('oi 2',))
    console.log(await espera('oi 3'))

    } catch (e) {console.log(e)}
}

executa()
//pendind - pendente

// fullfield - resolvida

// rejected - rejeitada