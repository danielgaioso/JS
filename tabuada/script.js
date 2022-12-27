function count() {
    let num = document.getElementById('inumber')
    let tab = document.getElementById('iselect')
    let c = 1

    if (num.value.length == 0) {
        window.alert('Coloque um valor')
    }
    else {
        let n = Number(num.value)
        tab.innerHTML = ``
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`

            tab.appendChild(item)
            c++
        
        }
    }
}