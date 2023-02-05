//criamos a classe, adcionamos a construção da classe e adicionamos os parâmetros
// abaixo do constructor, adicionamos os métodos, que já serão adicionadas no prototype

class Pessoa {
    constructor(nome,sobrenome){
        this.nome = nome
        this.sobrenome = sobrenome
    }

    falar() {
        console.log (this.nome +'Está falando')
    }
}

const p1 = new Pessoa('Luan', 'Da Silva Albis')
console.log()