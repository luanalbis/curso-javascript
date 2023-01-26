function soma(a,b) {
    if (typeof a != 'number' || typeof b != 'number') {
        return`a e b precisam ser números` }

    return a + b
}





try { // condição principal vem aqui
    console.log(soma(1,"kjsks"))

} catch (e) { // se a de cima tiver erro, irá ativar este bloco
    console.log(e + "\nerro ao realizar tal tarefa")

} finally { // este sempre será feito
    console.log("voce é o cara mais lindo do mundo")
}