//exception = interrupção na execução/ normamalmente erro na sintaxe

//Error = comportamento que não estávamos esperando

//Throwing an Exception = Um erro esperado 
//      throw 'mensagem que será enviada para o usuário, caso aopresente determinado erro'

//Para a aplicação nçao parar quando tiver um erro

//Try
//  bloco que seguirá caso não tiver erro

//Catch
//  bloco que será executado caso o erro informado seja igual o do catch

//Finally
//  bloco cque sempre será executado

/*
try{
    critical()
}

catch(exemplo) {
    console.log('tive um  erro')
    logError(exemplo)
}

finally{
    console.log('o código sempre funcionará aqui')
} 
*/ 

// Demonstração

//throw 'meu erro' // código para de funcionar após o erro, para resolver usamos o try catch
//throw 45

erroencontrado = false
try {
    let obj = undefined
    console.log(obj)
    console.log(obj.propriedade) //o código dará erro pois propriedade não existe
    console.log('olá mundo')
    erroencontrado = false

} catch (erro) { // iremos capturar este erro
    console.log('[erro]')
    console.log (5)
    erroencontrado = true

} finally {
    erroencontrado = null
    console.log('finalizar software')
}

console.log('finalizando programa')

console.log('\nTratamento de erro\n')

let i = 0
while (i < 3){
    try {
        console.log('iniciando')
        let input = 0
        if (input === 0){
            throw 'Valor errado' // mensagem caso o valor seja 0
        }
    } catch(e){
        i++ // fazemos o incremento para dar 3 chances ao usuário
    } finally {
        console.log('Finalizando \n') //usando isso nosso software não será interrompido
    }
}
