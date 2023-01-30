// some todos os números com reduce, é mais utilizada para pegar apenas um elemento
// recebe 4 parametros, acumulador, valor , indice,array

const numeros = [1,26,77,88,9,8,634,90,8,7,23]
const total = numeros.reduce((acumulador,valor,indice,array) => acumulador+= valor)
console.log(total)
