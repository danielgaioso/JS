function count() {
    var begin = document.getElementById('begin')
    var end = document.getElementById('end')
    var gap = document.getElementById('gap')
    var result = document.getElementById('result')

    if(begin.value.length == 0 || end.value.length == 0 || gap.value.length == 0) {
        result.innerHTML = `Opa... Todos os campos devem ser preenchidos com um número diferente de zero`
    }else if (gap.value.length <= 0) {
        result.innerHTML = `Opa... o gap não pode ser igual ou menor a 0. Tente novamente.`
    }else {
        result.innerHTML = `Counting: `
        var i = Number(begin.value);
        var f = Number(end.value);
        var p = Number(gap.value);

        for(var c = i; c<=f; c+= p){
            result.innerHTML += `${c} -->`
        }
    }
    //result.innerHTML = `end`;
}