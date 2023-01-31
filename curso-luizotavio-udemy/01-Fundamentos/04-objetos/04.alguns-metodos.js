// object.freeze (congela o objeto)
// defineProperty (define configurações de uma propriedade)

const produto = {
    nome: 'Caneca',
    preco:30,
    material:'Porcelana',
    marca:'Canequice'
}

const produtoLinkado = produto // objeto linkado com o primeiro
produtoLinkado.nome = 'Xicara'
console.log(produto) // podemos ver que a propriedade dos dois foi alterada

// para não linkar um objeto no outro, usamos o ...spread operator

// const produtoCopiado = {...produto}

// const produtoCopiado = object.assign({}, produto, {cor: 'rosa'}) tambm copia o objeto

// object.getOwnPropertyDescriptor(produto, 'nome') - mostra a descrição da propriedade, as mesmas do defineProperty

//object.entries

for (let [chave,valor] of Object.entries(produto)) // mostra chave e objeto em forma de array
    console.log(chave,valor) //assim consigo ver a chave e o valor 
