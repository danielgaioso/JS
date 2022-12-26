function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas!`
    if (hora >=0 && hora < 12){
    //bo dia
    img.src = `imgs/dia.png`
    } else if (hora >= 12 && hora < 18){
        //tarde
        img.src = `imgs/tarde.png`
    } else{
        //noite
        img.src = `imgs/noite.png`
    }
}