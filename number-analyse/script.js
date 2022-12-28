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
        v.push(Number(n.value))
        let item = document.createElement('option')
        item.text = `Número ${n.value} adicionado`
        s.appendChild(item)
        r.innerHTML = ``
    } else{
        window.alert('Valor invalido ou já encontrado na lista')
    }
    n.value = ``
    n.focus()
}

function analyze() {
    if (s.lenght == 0) {
    window.alert('nenhum valor encontrado')}
    else {
        let total = v.length
        let menor = v[0]
        let maior = v[0]
        let soma = 0
        let media = 0
        for(let pos in v){
            soma += v[pos]
            media = soma / total
            if (v[pos] > maior)
                maior = v[pos]
            if (v[pos] < menor){
                menor = v[pos]
        }

        r.innerHTML = ``
        r.innerHTML += `<p>${total} números foram informados.</p>`
        r.innerHTML += `<p> O maior valor é ${maior} e o menor é o ${menor} </p>`
        r.innerHTML += `<p>A soma de todos os números é ${soma}.</p>`
        r.innerHTML += `<p>A média dos números cadastrados é de ${media. toFixed(3)}.</p>`
    }
}}