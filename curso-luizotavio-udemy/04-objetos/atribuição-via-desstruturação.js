const pessoa = {
    nome: 'Luan',
    sobrenome:'Albis',
    idade: 25,
    endereco: {
        rua: 'minas gerais',
        numero: 1660
    }
}

const {nome: criarVariavel, sobrenome, idade,endereco: {rua,numero}} = pessoa 
// atribuí uma variável para cada chave, para modificar o nome da variável, temos que fazer como no exemplo do nome

// a variavel endereço nesse caso não existe mais, pegamos a rua e o número. ainda podemos colocar endereço ao lado

// tambem podemos mudar o nome das variáveis rua e número, fazendo igual fizemos com o nome

// podemos pegar tambem o resto com o ...resto

console.log(criarVariavel,sobrenome,idade,rua, numero)

for (keys in pessoa){
    console.log(pessoa[keys])
}