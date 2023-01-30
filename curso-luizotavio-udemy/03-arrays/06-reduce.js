// some todos os números com reduce, é mais utilizada para pegar apenas um elemento
// recebe 4 parametros, acumulador, valor , indice,array
// coloque o valor do acumulador após a função, se não colocarmos, o acumulador será igual ao primeiro valor

const numeros = [1,26,77,88,9,8,634,90,8,7,23]
const total = numeros.reduce((acumulador,valor,indice,array) => acumulador+= valor,0)
//console.log(total)


const pessoas = [
    {nome:'Luan',idade:22},
    {nome:'Amanda',idade:21},
    {nome:'Paulo',idade:38},
    {nome:'cauan',idade:18},
    {nome:'Rejiana',idade:38}
]

const maisVelho = pessoas.reduce((acumulador,valor) => {
    if (acumulador.idade > valor.idade) return acumulador
    return valor
})

console.log(maisVelho)