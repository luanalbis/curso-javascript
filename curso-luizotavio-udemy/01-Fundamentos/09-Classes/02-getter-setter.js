const _velocidade = Symbol('velocidade')

class Carro {
    constructor(nome) {
        this.nome = nome
        this.velocidade = 0
    }

    acelerar() {
        if(this.velocidade >= 100) return
        this.velocidade++
    }

    freiar() {
        if(this.velocidade <= 100) return
        this.velocidade--
    }
}

const c1 = new Carro('Fusca')

for (let c = 0; c <=150; c++){
    c1.acelerar()
}

console.log(c1)