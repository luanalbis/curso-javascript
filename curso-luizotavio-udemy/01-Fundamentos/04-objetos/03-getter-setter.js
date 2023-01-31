// Uma maneira de proteger a propriedade
// Getter - obter valor
// Setter  - setar o valor

function Produto(nome,preco,estoque){
    this.nome = nome
    this.preco = preco
    
    let estoquePrivado = estoque
    Object.defineProperty(this,'estoque',{  
        enumerable:true, 
        configurable: true,
        //Getter
        get:() => estoque,

        //Setter
        set: (valor) => {
            if (typeof valor === 'number')estoque = valor //só vou conseguir setar se for numero
            else console.log('o valor precisa ser numérico')
        }
    }) 
}

const p1 = new Produto('Camisa', 25, 50) 
p1.estoque = 200  // aqui estou setando o valor
console.log(p1.estoque)