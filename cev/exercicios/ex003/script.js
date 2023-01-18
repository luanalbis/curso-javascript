function calcPasso(){
     var inicio = Number(document.getElementById('idinicio').value)
     var fim = Number(document.getElementById('idfim').value)
     var passo = Number(document.getElementById('idpasso').value)
     
     if (inicio < fim && passo <= fim && fim > 0 && passo > 0){
          for (inicio;inicio <= fim;inicio += passo){
               document.getElementById("contagem").innerHTML += `${inicio} &#x1F449 `       
          }
          document.getElementById("contagem").innerHTML += ` FIM ` 
          
     } else {
          window.alert('Insira valores válidos')
     }  

}



