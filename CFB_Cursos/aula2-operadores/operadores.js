// operadores bitwise

let n1 = 25
let n2 = 10

let soma = n1 >>  1// operador bit a bit
 
console.log (soma)

// operador     spread = ... - operador que faz uma copia do array

let lista1 = [1,2,3,4,5,6,7,8]

let lista2 = [9,10,11,12,13,14,15,16]

let lista3 = [...lista1, ...lista2]

console.log(lista3)

let lista4 = [1,2,3,4]
let lista5 = lista4 // se fizermos desta forma, faremos um vinculo nos dois arrays
lista5[0] = 100  // era para substituir apenas o item da lista5, mas como vinculamos com a lista4, o indice da lista4 tambem será mudado

console.log(lista4)
console.log(lista5)

const jogador1 = {nome:'Luan', idade:22,Profissão:'Gari', Magia: 100}
const jogador2 = {nome:'Luan', idade:23, Profissão:'programador' , Estado: 'CE'}
const jogador3 = {...jogador1, ...jogador2}

//se usarmos o operador spread(...), o que você acha que vai acontecer? fazer uma cópia certo? ERRADO

console.log (jogador3)

// O Operador respeita a ultima chamada e atualiza os valores atribuidos , se as as propriedades forem iguais, ele atualizará para o valor dda ultima chamada, e ADICIONARÁ  as propriedades incomuns

let colecao = document.getElementsByTagName('div') // NODE não reconhece documento pois ele é um HTML collection
console.log(colecao)

let colecao2 = [...document.getElementsByTagName('div')]
console.log(colecao2) // Transforma o document em um array

//  ATENÇÃO, se definirmos um  ARRAY1 = ARRAY2, criamos um vinculo entre o dois arrays, modificando 1, o outro será modificado também