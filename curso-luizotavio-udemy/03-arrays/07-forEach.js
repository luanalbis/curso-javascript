// forEach recebe 3 parametros, valor indice e array
// faz iteração sobre o ARRAY

const numeros = [1,2,7]

let total = 0
numeros.forEach(valor => total+= valor )

console.log(total)


const pessoas = [
    {nome:'Luan',idade:22},
    {nome:'Amanda',idade:21},
    {nome:'Paulo',idade:20},
    {nome:'cauan',idade:18},
    {nome:'Rejiana',idade:38}
]

pessoas.forEach((valor,indice) => console.log(indice , valor.nome, valor.idade))
