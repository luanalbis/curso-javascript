function Conta (agencia,conta,saldo){
    this.agencia = agencia
    this.conta = conta
    this.saldo = saldo
}

Conta.prototype.sacar = function(valor) {
    if (this.saldo < valor) {
        console.log('saldo insuficiente')
        return
    }
    this.saldo -=valor
    console.log(`Saque de R$${valor.toFixed(2)} efetuado com sucesso`)
    this.verSaldo()
}

Conta.prototype.depositar = function(valor) {
    this.saldo += valor
    console.log(`Depósito de R$${valor} efetuado com sucesso`)
    this.verSaldo()
}
Conta.prototype.verSaldo = function(valor) {
    console.log( `Saldo atual R$${this.saldo.toFixed(2)}`)
}

const conta = new Conta(11,22,10)

function ContaCorrente (agencia,conta,saldo,limite) {
    Conta.call(this, agencia, conta, saldo)
    this.limite = limite
}

ContaCorrente.prototype = Object.create(Conta.prototype)
ContaCorrente.prototype.constructor = ContaCorrente
const contaCorrente = new ContaCorrente(11,22,10, 100)

ContaCorrente.prototype.sacar = function(valor) {
    if (valor > this.saldo +this.limite) {
        console.log('Saldo insuficiente para saque')
        this.verSaldo()
        return
    }

    this.saldo -= valor
    console.log(`Saque de R$${valor} efetuado com sucesso`)
    this.verSaldo()
}

function ContaPoupanca(agencia,conta,saldo){
    Conta.call(this, agencia,conta,saldo)
}

ContaPoupanca.prototype = Object.create(Conta.prototype)
ContaPoupanca.prototype.constructor = ContaPoupanca
const contaPoupanca = new ContaPoupanca(11,22,10)


contaCorrente.depositar(1000)
contaCorrente.sacar(100)

console.log(contaPoupanca)

