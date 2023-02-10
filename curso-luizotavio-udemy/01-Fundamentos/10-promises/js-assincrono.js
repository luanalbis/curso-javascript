function espera(msg, tempo){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log(msg)
            resolve(msg)
        }, 1000)
    })
}

espera('frase 1', 1000).then.
