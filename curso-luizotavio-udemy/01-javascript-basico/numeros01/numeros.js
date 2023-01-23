//PADRÃO IEEE 754-2008

let num = 15 , num2 = 2.5

console.log(num.toString() + num2) // toString não muda o tipo do numero a não ser que mudemos o valor da variável para num = num.toString
console.log(typeof(num))

console.log (num.toString(2)) // toString(2) mostra o número binário

console.log (num.toFixed(2)) // mostra casas decimais ao lado do número

console.log (Number.isInteger(num)) // informa se o número é inteiro

let erro = num * 'luan'
console.log(erro)
console.log(Number.isNaN(erro)) // retorna TRUE se der NaN, ou seja, se não for algo calculável como numero * string

let num3 = 0.7, num4 = 0.1
num3 += num4 // o que esperamos que o resultado receba?? 0.8 certo
console.log(num3) // este é o resultado por conta da imprecisão

num3 += num4
num3 += num4
console.log(num3) // aqui era pra dar 1, mas repare que o valor foi 0.9999999999

// resolveremos nosso problema da seguinte forma

num3 = parseFloat(num3.toFixed(2))
console.log(num3)

// podemos resolver isto desta forma tambem

let resolvemos = ((0.7*100)+(0.1*100)) / 100
console.log(resolvemos)



