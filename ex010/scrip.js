
function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.querySelector('#foto img')
var data = new Date()
var hora = data.getHours()
msg.innerHTML =` Agora são ${hora} horas `

if (hora >= 0 && hora < 12){
    //bom dia, muda nada
    img.src ='imagem/manha.jpg'
    document.body.style.background = 'rgb(235, 227, 117)'
} else if (hora >= 12 && hora < 18){
    //boa tarde
    img.src = 'imagem/tarde.jpg'
    document.body.style.background = 'rgb(247, 173, 63)'
} else {
    //boa noite
    img.src = 'imagem/noite.jpg'
    document.body.style.background = 'rgb(0, 12, 175)'
    
}
} 

