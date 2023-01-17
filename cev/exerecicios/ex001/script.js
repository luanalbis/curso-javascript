var hora = new Date().getHours()
document.getElementById('horario').innerHTML = `Agora são ${hora} horas.`
if (hora > 4 && hora < 13){
    document.getElementById('body').style.background = 'rgb(14, 226, 180)'
    document.getElementById('imagem').innerHTML = '<img src="imagens/foto-dia..jpg">'
} else if ( hora < 19 && hora > 12){
    document.getElementById('body').style.background = 'orange'
    document.getElementById('imagem').innerHTML = '<img src="imagens/foto-tarde.jpg">'
} else {
    document.getElementById('body').style.background = 'rgb(68, 64, 64)'
    document.getElementById('imagem').innerHTML = '<img src="imagens/foto-noite.jpg">'
}