function mostraHora(){
    let data = new Date()

    return data.toLocaleDateString('pt-BR' , {hour12: false})
}

setInterval(() => {
    console.log(mostraHora())
}, 1000)