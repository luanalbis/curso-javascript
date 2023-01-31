// Construtora -> molde (classe)

function Pessoa (nome,sobrenome) {
    this.nome = nome,
    this.sobrenome = sobrenome
    this.nomeCompleto = this.nome + ' ' + this.sobrenome
}

const p1 = new Pessoa('Luan', 'da Silva ALbis')
console.log(p1.nomeCompleto)