//Filter vai sempre retornar um array com a mesma quantidade de elementos ou menos

// retorne os números maiores que 10

const numeros = [1,2,3,34,54,32,555,6,7,6,5,78,9,0,8,8,8,88]

const numerosFiltrados = numeros.filter(valor => valor > 10) // só entende valores boleanos, ou seja, se a condição for true ele adicionará o número nos numerosFiltrados, ele pode retornar o numero, indice pu o array completo

console.log(numerosFiltrados)

const pessoas = [
    {nome:'Luan',idade:22},
    {nome:'Amanda',idade:21},
    {nome:'Paulo',idade:20},
    {nome:'cauan',idade:18},
    {nome:'Rejiana',idade:38}
]

const pessoasFiltradasPorNome = pessoas.filter(obj => obj.nome.length < 6)
console.log(pessoasFiltradasPorNome) // aqui irei retornar apenas os nomes com menor de 6 letras 

const pessoasFiltradasPorIdade = pessoas.filter(obj => obj.idade > 20)
console.log(pessoasFiltradasPorIdade)// aqui irei retornar apenas as idades maiores de 20 

const ultimaLetra = pessoas.filter(obj => obj.nome.endsWith('n'))
console.log(ultimaLetra) //aqui irei retornar apenas as se a ultima letra do nome for 'n'
// Poderia ter usado tambem a função endsWith('n')