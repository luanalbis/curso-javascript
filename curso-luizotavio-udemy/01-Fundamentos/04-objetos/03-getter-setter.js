// Uma maneira de proteger a propriedade
// Getter - obter valor
// Setter  - setar o valor

function Produto(nome,preco,estoque){
    this.nome = nome
    this.preco = preco
    

    Object.defineProperty(this,'estoque',{  
        enumerable:true, 
        configurable: true 
        get: () =
    }) 
}

const p1 = new Produto('Camisa', 25, 5)
p1.estoque = 1000 // 
console.log(p1)