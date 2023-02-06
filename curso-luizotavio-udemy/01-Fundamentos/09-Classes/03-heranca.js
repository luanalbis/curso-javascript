//

class DispositivoEletronico{
    constructor(nome) {
        this.nome = nome
        this.ligado = false
    }
    ligar() {
        if (this.ligado) return
        this.ligado = true
    }
    desligar() {
        if (!this.ligado) return
        this.ligado = false
    }
}

class Smartphone extends DispositivoEletronico{ // faz smartphone herdar tudo de outra class
    constructor(nome,cor,modelo){
        super(nome) // aqui estou dizzendo o parametros que minha class herdar
        this.cor = cor
        this.mmodelo = modelo
    }
}

const sam1 = new Smartphone('Samsung' ,'Prata', 'SM8778000')
sam1.ligado = true
console.log(sam1)

class Tablet extends DispositivoEletronico{
    constructor(nome,cor,modelo,sistema){
        super(nome)
        this.cor = cor 
        this.sistema = sistema
        this.modelo = modelo
    }
}

let t1 = new Tablet('Ipad', 'Preto', 'IOS8887','IOS')
t1.ligado = true
console.log(t1)

//Class taablet e Sam1 são irmãs, não herdam nada uma da outra
//podemos alterar os metodos nas classes filhas, sem alterar as do pai
