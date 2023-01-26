let minuto = 0, segundo = 0, milisegundo = 0, aceleracao = 0,c = 0

function tempo() {
    
    if (milisegundo == 100) {
        milisegundo = 0
        segundo++
    } else if (segundo == 60){
        segundo = 0
        minuto++ 
    }
    
    if (segundo < 10){
        document.getElementById('cronometro').innerHTML=`0${minuto}:0${segundo}:${milisegundo++}`
    } else {
        document.getElementById('cronometro').innerHTML=`0${minuto}:${segundo}:${milisegundo++}`
    }
}

function iniciar (){ 
    if (c == 0){
        timer = setInterval(() => {tempo()} ,10)
        document.getElementById('cronometro').style.color = "black" 
    }c++
} 

function parar () {
    setTimeout(() => {
        clearInterval(timer)
    },0)
    document.getElementById('cronometro').style.color = "rgb(238, 11, 11)"
    c = 0
}

function zerar () {
    document.getElementById('cronometro').innerHTML = '00:00:00'
    milisegundo = 0,  segundo = 0, minuto = 0
}







