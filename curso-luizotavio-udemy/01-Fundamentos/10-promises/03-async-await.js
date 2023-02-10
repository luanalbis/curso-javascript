function espera(msg, tempo){ // parâmetros
    return new Promise((resolve,reject) => { //retornamos uma nova promise
        if (typeof msg !== 'string') {
            reject('Precisa ser uma frase válida') // erros irão pro reject
            retur
            n
        }
        setTimeout(() => { // aqui fazemos o set timeout que irá receber o resolve com o parametro
            resolve(msg)
        }, tempo) // apos a função, coloque o tempo do timeout
    })
}

espera('Oi 1',1000)
    .then(valor => {
        console.log(valor)})
    .catch()