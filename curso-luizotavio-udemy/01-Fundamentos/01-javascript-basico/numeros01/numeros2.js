let num = 2.738787 , num2 = 8

console.log(Math.ceil(num))  // arredonda o número para cima

console.log(Math.floor(num)) // arredonda o número para baixo

console.log(Math.trunc(num)) // retira a parte quebrada do número e retorna a parte inteira

console.log(Math.round(num)) // arredonda para baixo e para cima, dependendo do valor quebrado

console.log(Math.max(2,3,4,3,2,4,5,6,5,5,777,6,7,8,9,6)) // mostra o maior número

console.log(Math.min(2,3,4,3,2,4,5,6,5,5,777,6,7,8,9,6)) // mostra o menor número

console.log(Math.round(Math.random() * (50 - 25) +(25))) // produz números aleatórios entre 0 e 1,,para definir o seu sorteio, multiplique o numero pelo maximo do seu sorteio - o minimo, depois subtraia pelo minimo. NESSE caso, eu queria um numero entre 10 e 50

console.log(100/0) // não dá erro e o numero conta como verdadeiro... CUIDADO !