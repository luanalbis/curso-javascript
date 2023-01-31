function mostraHora(){
    let data = new Date()
    return data.toLocaleTimeString('pt-BR' , {hour12: false}) // função que irá retornar a hora com os segundos
}

const timer = setInterval(() => {
    console.log(mostraHora())
}, 1000) // setInterval deffinimos em milisegundos, vai mostrar a hora a cada segundo

setTimeout(() => {
    clearInterval(timer)
}, 5000) // setTimeOut , deminimos um limite para a CONST TIMER. em milisegundos