// promise.all | promise.race | promise.resolve | promise.reject

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

const promises = [
    'primeiro valor', 
    espera('promise 1', 2000),
    espera('promise 2',1000),
    espera('luan da silva albis',500),
]

Promise.all(promises)
    .then((valor) => console.log(valor))
    .catch(erro => console.log(erro))