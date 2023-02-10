function espera(msg, tempo){ // parâmetros
    return new Promise((resolve,reject) => { //retornamos uma nova promise
        if (typeof msg !== 'string') reject('Precisa ser uma frase válida') // erros irão pro reject

        setTimeout(() => { // aqui fazemos o set timeout que irá receber o resolve com o parametro
            resolve(msg)
        }, tempo) // apos a função, coloque o tempo do timeout
    })
}

espera('frase 1', 1000)
    .then(resposta => {console.log(resposta)
    return espera('Frase 2', 2000)})
    .then(resposta => {console.log(resposta)})
    return espera(8, 5000)
    .then(resposta => console.log(resposta))
    .catch(erro => console.log(erro))
