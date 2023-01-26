let minuto = 0, segundo = 0, milisegundo = 0

function iniciar (){
    
}

function parar () {
    return 0
}

function zerar () {
    document.getElementById('cronometro').innerHTML = '00:00:00'
}

timer = setInterval(() => {
},100)

setTimeout(() => {
    clearInterval(timer)
},0)
