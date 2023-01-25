function palindrome(str) {
    let nome = str
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

let M=1000,CM=900,D=500,CD=400,C=100,XC=90,L=50,XL=40,X=10,IX=9,V=5,IV=4,I=1
function convertToRoman(num) {
 return num;
}

convertToRoman(36);
