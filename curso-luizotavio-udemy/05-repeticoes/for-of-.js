function palindrome(str) {
    let nome = str.toString()
    let palidromo = ''
    const caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
  
    for (let c = 0; c < nome.length; c++) {
        if (caracteres.indexOf(nome[c]) < 0){
            nome = nome.toLowerCase().replaceAll(nome[c],'')
            

        }
    }
  
    for (let c = nome.length-1; c >= 0 ; c--){
        palidromo += nome[c]

    }
    console.log(palidromo,nome)
    return palidromo === nome
    
  }
  
  palindrome("0_0 (: /-\ :) 0-0");
