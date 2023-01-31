/*
&& -> false && true "O valor mesmo"

|| ->

*/

console.log('maria' && true && NaN) /* retorna o valor falso

VALORES FALSY
false
0 = número zero mesmo
'' "" ``
null / undefined
NaN
*/

console.log('Luiz' && true && 'amanda') // se não tiver valor falso, retorna o ultimo valor

function falaOi(){
    return 'oi luan'
}

let vaiExecutar = true

console.log(vaiExecutar && falaOi()) // assim podemos fazer uma validação de curto circuito, se for falso irá retornar o valor falso

console.log(null || 'Luan' || 8 || falaOi()) // quando utilizamos o ||(OR) // aqui irá retornar o primeiro valor verdadeiro

let escolhaUsuario = ''
console.log(escolhaUsuario || "preto") // aqui o valor retornado será preto, pois o usuário se enquadra nos valores FALSY

let hora = new Date().getMilliseconds()
console.log(hora)

console.log(hora % 2 === 0? 'par': 'impar') // primeiro colocamos a condição, depois o reterno de true , depois o retorno se for falso

