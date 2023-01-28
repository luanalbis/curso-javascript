// funções que retornam objetos

function criaPessoa(nome,sobrenome){
    return {
        nome,
        sobrenome,

        // getter não recebe parâmetros
        get nomeCompleto() {return `${nome} ${sobrenome}`}

        //setter recebe parâmetros
    }
}

let pessoa = criaPessoa('luan', 'albis') // { nome:'luan, sobrenome:'albis', fala: function }
console.log(pessoa.nomeCompleto) // get função faz a função se passar por um item sem precisar de ()