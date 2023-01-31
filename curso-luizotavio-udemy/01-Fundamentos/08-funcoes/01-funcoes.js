// declaração de função hosting,

function falaOi(){
    console.log("oi Luan da Silva Albis")
    //falaTchau()
}

function falaTchau(){
    console.log("tchau")
    //falaOi()
}
falaOi()

//first - class objects ( objetos de primeira classe)
// podemos passar funções como parametros


// arrow functions
const funcaoArrow = () => {
    console.log('sou uma arrow function')
}
funcaoArrow()

// podemos ter objetos dentro de funções
const objeto = {falaLuan: () => {'Luan Albis'}}
console.log(objeto.falaLuan)