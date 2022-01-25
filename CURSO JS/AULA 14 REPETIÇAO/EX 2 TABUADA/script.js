

function gerartb(){
    var num = Number(document.getElementById(`num`).value)
    var mult = 0
    res.innerHTML= ``
    for(var c=1;c<=10;c++){
        mult = c*num           
        res.innerHTML += (`${num} x ${c} = ${c*num}<br>`)
    }
}