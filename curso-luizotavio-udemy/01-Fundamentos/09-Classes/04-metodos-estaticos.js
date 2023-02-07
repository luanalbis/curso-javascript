
class ControleRemoto {
    constructor(nome){
        this.nome = nome
        this.volume = 0
    }

    // METODO DE INSTANCIA // Metodos que serão utilizados por quem estanciou
    aumentar () {
        if (this.volume == 100) return
        this.volume += 2
    }

    diminuir() {
        if (this.volume == 0) return
        this.volume -= 2
    }

    // METODO ESTÁTICO // Metodos utilizados pela classe, não terá acesso aos dados da instância
    static trocaPilha (){
        console.log('Precisa trocar a pilha')
    }
}

let controle = new ControleRemoto('Controle Samsung')
controle.aumentar()
console.log(controle)

ControleRemoto.trocaPilha() // método usado diretamente pela class