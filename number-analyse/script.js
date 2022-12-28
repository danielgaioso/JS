var n = document.getElementById('inumber')
var s = document.getElementById('iselect')
var r = document.getElementById('result')
var v = []

function isNumber(num){
    if(Number(num) >= 1 && Number(num)  <= 100){
        return true
    }else{
        return false
    }
}

function inList(num, list){
    if(list.indexOf(Number(num)) != -1){
        return true
    } else {
        return false
    }

}

function add() {
    if(isNumber(n.value) && !inList(n.value, v)){

    } else{
        window.alert('Valor invalido ou já encontrado na lista')
    }

}
