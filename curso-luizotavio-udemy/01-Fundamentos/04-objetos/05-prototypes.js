// Construtora -> molde (classe)

// prototype - tem em todas as funções construtoras, é ideal para armazenar métodos que serão utilizados varias vezes como o método de pegar o nome completo

function Pessoa (nome,sobrenome) {
    this.nome = nome,
    this.sobrenome = sobrenome
}

Pessoa.prototype.nomeCompleto = function (){ return this.nome + ' ' + this.sobrenome} // se usar arrow function, irá ficar como undefined

const p1 = new Pessoa('Luan', 'da Silva ALbis')
console.log(p1.nomeCompleto())


// new Object -> Object.prototype

const objetoA = {objetoA: 'A'} // __proto__ :object.prototype

const objetoB = {objetoB: 'B'} // definimos o proto do objeto b como o objeto A
Object.setPrototypeOf(objetoB,objetoA)

const objetoC = {objetoC: 'C'}
Object.setPrototypeOf(objetoC,objetoB)// definimos o proto do objeto c como o objeto b

console.log(Object.getPrototypeOf(objetoC))

/*const p3 = createObject (prototype, {
    preco: {
        propriedades
    },
    tamanho: {
        propriedades
    }
    
}) */

