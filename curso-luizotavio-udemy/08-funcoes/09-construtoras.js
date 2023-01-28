// Função construtora retorna objeos
// precisa ser digitada com F maiúsculo Function
// Construtora -> new Pessoa

function Pessoa(nome, sobrenome){ // é como se tudo já estivesse dentro de um objeto
    //Atributos Públicos
    this.nome = nome //usamos o this para adcionar o nome no objeto com o nome da pessoa
    this.sobrenome = sobrenome

    // Atributos Privados
    const ID = 45451154 // esta variavel não faz parte do objeto
}

p1 = new Pessoa('Luan', 'Albis') // precisamos utilizar o new
p2 = new Pessoa('Amanda', 'Oliveira')
console.log(p1)