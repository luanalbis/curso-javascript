const listaNumeros = [1,2,3,4,5,6,7,8,9] // array
let numeros = [listaNumeros[0] , listaNumeros[1]]  //var numeros recebeu, valores do array
console.log(numeros)

let [um,dois,tres,...resto] = listaNumeros // atrubuimos variavel atraves do array ... = resto
console.log(um,dois,tres,resto)

const listaNumerosNova = [[1,2,3],[4,5,6],[7,8,9]] // atribuição mais complexas
let [,,[,,nove]] = listaNumerosNova // usamos virgula para pular numeros, no caso queriamos um array então colocamos os colchetes, usamos virgula novamente e acessamos o numero

console.log(nove)// variavel atribuida!
