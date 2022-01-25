

function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    var hora = 9
    if(hora >= 17 || hora <= 5){
       foto.innerHTML= `<img id="imagem" src="noite.jpg" alt="Foto da manha">`
       document.body.style.background = `#484848`
    }
    else if(hora >=6 && hora<=11) {
        foto.innerHTML= `<img id="imagem" src="manha.jpg" alt="Foto da manha">`
        document.body.style.background = `#FDE522`
    }else{
        foto.innerHTML= `<img id="imagem" src="tarde.jpg" alt="Foto da manha">`
        document.body.style.background = `#E5B110`
    }
}
