// Construtora -> molde (classe)

// prototype - tem em todas as funções construtoras, é ideal para armazenar métodos que serão utilizados varias vezes como o método de pegar o nome completo

function Pessoa (nome,sobrenome) {
    this.nome = nome,
    this.sobrenome = sobrenome
    Pessoa.prototype.nomeCompleto = () => this.nome + ' ' + this.sobrenome
}



const p1 = new Pessoa('Luan', 'da Silva ALbis')
console.log(p1.nomeCompleto())