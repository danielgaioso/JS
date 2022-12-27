function count() {
    let i = document.getElementById('begin')
    let f = document.getElementById('end')
    let p = document.getElementById('gap')
    let result = document.getElementById('result')

    if(i.value.length == 0 || f.value.length == 0 || p.value.length == 0) {
        result.innerHTML = `Opa... Todos os campos devem ser preenchidos com um número diferente de zero`
    }else if (p.value <= 0) {
        result.innerHTML = `Opa... o gap não pode ser igual ou menor a 0. Tente novamente.`
    }else {
        result.innerHTML = `Counting: `
        if(Number(i.value) < Number(f.value)) {
            //Contagem crescente
            for (let c = Number(i.value); c <= Number(f.value); c += Number(p.value)) {
                result.innerHTML += `${c} \u{1F449} `
            }
        } else {
            //Contagem regressiva
            for (let c = Number(i.value); c >= Number(f.value); c -= Number(p.value)) {
                result.innerHTML += `${c} \u{1F449} `
            }
            result.innerHTML += `\u{1F3C1}`
        }
    }
}