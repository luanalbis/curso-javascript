// Produto
// Camiseta, Caneca, Lapis
// cada produto pode ter características específicas

function Produto(nome,preco,cor) {
    this.nome = nome
    this.preco = preco
    this.cor = cor
}

Produto.prototype.aumento = function(quantia) {
    this.preco += quantia
}
Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia
}

function Camiseta(nome,preco,cor) { 
    Produto.call(this,nome,preco,cor) // camiseta herda tudo do Produto, após o this.
}

Camiseta.prototype = Object.create(Produto.prototype) // defino o prototype o mesmo do Produto
Camiseta.prototype.constructor = Camiseta // define o construtor da Camiseta para ela mesma

function Caneca (nome,preco,cor,marca) {
    Produto.call(this,nome,preco,cor)
    this.marca = marca
}

Caneca.prototype = Object.create(Produto.prototype)//Caneca herda tudo do produto
Caneca.prototype.constructor = Caneca// deninimos o construtor da caneca como ela mesma

const produto = new Produto('Gen', 111 , 'preto')
const camiseta = new Camiseta('Blusa', 50)
const caneca = new Caneca('caneca', 50,'branca','naruto mania')

console.log(produto)
console.log(camiseta)
caneca.aumento(20)// aqui o preço da caneca irá auterar pois o prototype tem a função de aumentar
console.log(caneca)

