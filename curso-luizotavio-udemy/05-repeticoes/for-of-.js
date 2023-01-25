let nome = 'asa'
const caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'


console.log(caracteres)

for (let c = 0; c < nome.length; c++) {
    if (caracteres.indexOf(nome[c]) < 0){
        nome = nome.toLowerCase().replaceAll(nome[c],'')
        
    }
}

if (nome.lastIndexOf(nome) === nome.indexOf(nome) ){
    console.log(nome + 'é um palindromo')
}


