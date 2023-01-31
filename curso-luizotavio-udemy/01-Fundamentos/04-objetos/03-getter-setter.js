// Uma maneira de proteger a propriedade
// Getter - obter valor
// Setter  - setar o valor

function Produto(nome,preco,estoque){
    this.nome = nome
    this.preco = preco
    

    Object.defineProperty(this,'estoque',{  
        enumerable:true, 
        configurable: true,
        
        //Getter
        get:() => estoque,

        //Setter
        set:() => estoque * 2
        
    }) 
}

const p1 = new Produto('Camisa', 25, 50) 
console.log(p1.estoque)