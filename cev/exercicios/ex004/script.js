 function gerador(){
    var numero = Number(document.getElementById('idnumero').value)
    var tab = document.getElementById('tabuada')
    var contador = 1
    tab.innerHTML = ''
    while (contador < 11){  
        tab.innerHTML += `<p>${numero} x ${contador} = ${numero*contador}</p>`
        contador++
    }
}
