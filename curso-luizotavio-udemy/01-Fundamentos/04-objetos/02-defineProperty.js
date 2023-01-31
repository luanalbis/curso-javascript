// defineProperty - defineProperties

function Produto(nome,preco,estoque){
    this.nome = nome
    this.preco = preco
    
//defineProperties faz a mesma coisa, mas colocamos o this, { aqui coloca todas as configurações das chaves }

    Object.defineProperty(this,'estoque',{  // define uma nova chave estoque para o this, que no caso é o p1

        enumerable:true, // faz com que o estoque apareça ou não dependendo da escolha
        value: estoque, // define o valor do estoque o mesmo do parametro
        writable: false, // define se o valor pode ser alterado ou não
        configurable: true // define se é configurável, se posso apaga-lo
    }) 
}

const p1 = new Produto('Camisa', 25, 5)
p1.estoque = 1000 // podemos analisar que o valor não foi mudado pois o writeble está false
console.log(p1)
