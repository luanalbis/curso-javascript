function numeroAleatorio(){
    let num = Math.round(Math.random() * (2000 - 1000) + 1000)
    return num
}

function f1(callback) {
    setTimeout(() => {
        console.log('função f1')
        if (callback) callback()
    },numeroAleatorio())
}

function f2(callback) {
    setTimeout(() => {
        console.log('função f2')
        if (callback) callback()
    },numeroAleatorio())
}

function f3(callback) {
    setTimeout(() => {
        console.log('função f3')
        if (callback) callback()
    },numeroAleatorio())
}

f1(function(){
    f2(function(){
        f3(function(){
            console.log('olá mundo') // desta forma criamos uma ordem , porem fica parecendo uma arvore de natal
            console.log('=================================================================')
            f1(f1callback)
        })
    })
})

function f1callback(){ //desta forma não fazemos uma arvore de natal como o exemplo acima 
    f2(f2callback)
}
function f2callback() {
    f3(f3callback)
}
function f3callback() {
    console.log('Deu certo')
}