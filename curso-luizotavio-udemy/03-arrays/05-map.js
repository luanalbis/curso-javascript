// map - sempre retorna o array do mesmo tamanho, podemos alterar valores
// map altera o array original, faça cópia antes para não ter problemas

function numeroAleatorio (){return Math.round(Math.random()*(80000000-10000000)+10000000)}

const numeros = [1,26,77,88,9,8,634,90,8,7,23]

const numerosDobrados = numeros.map(valor => `Dobrei o ${valor} para ${valor * 2}`)
console.log(numerosDobrados)

const pessoas = [
    {nome:'Luan',idade:22},
    {nome:'Amanda',idade:21},
    {nome:'Paulo',idade:20},
    {nome:'cauan',idade:18},
    {nome:'Rejiana',idade:38}
]

const nomeDasPessoas = pessoas.map((valor,indice) => `${indice}: nome ${valor.nome} e idade ${valor.idade}`) 
console.log(nomeDasPessoas)


// para adicionar algo ao objeto é só colocar obj.nome do indice = algo
const pessoasComId = [pessoas.map(valor => {
    valor.id = numeroAleatorio()
    return valor})]

console.log(pessoasComId)
console.log('original\n',pessoas) // observe que o array original foi modificado

