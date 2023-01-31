const nome = ['Luan', 'Amanda', 'Paulos']
const novo = nome // cria uma ligação nos dois arrays, tudo que é modificado em um modifica o outr

nome[2]= 'Cauan'
console.log(nome)

nome.pop() // remove o ultimo item do array, podemos atribuir o ultimo valor em uma variável  // shift() faz a mesma coias, porem removendo o primeiro item

delete nome[2]
console.log(nome, nome)

// push() adiciona um item no final do array

// unshift() adiciona um item no comço do array

// slice(), precisa de dois parametros para ir de um ponto até determinado ponto do array, por exemplo, nome.slice(1,10) vai do indice 1 até o 9

// split (' ') divide uma string w array, separados pela string indicada, no meu caso foi um espaço Amanda Olibe

//join(' ') junta o array em uma string, separando-as pela string indicada


