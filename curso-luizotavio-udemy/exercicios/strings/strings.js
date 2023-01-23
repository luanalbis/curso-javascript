let nome = 'Luan da Silva Albis'

console.log(nome.indexOf("Luan")) // mostra o indice onde foi encontrado

console.log(nome.charAt(0)) // mostra a string pelo indice

console.log(nome.substring(1,3)) // tambem mostra peo incdice informado

console.log(nome.slice(0, nome.length)) // mostra parte de string pelo indice


//  OCULTADOR DE NÚMERO DE CARTÃO

function Ocultador(a) {
    let NomeNovo = ''
    a = String(a)
    if (a.length > 5) {
        for (let c = 0;c < a.length; c++){
            if (c < a.length-5)
            NomeNovo += '*'
        }
        NomeNovo += a.slice(-5,a.length)
        return NomeNovo
    }return a
}

console.log(Ocultador())