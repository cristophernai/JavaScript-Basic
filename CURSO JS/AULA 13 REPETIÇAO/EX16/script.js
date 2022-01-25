

function ger(){
    res.innerHTML=(``)
    var soma = 0
    
    var num = document.getElementById('num').value
    if(num == ''){    
        alert(`Para gerar tabuada é preciso um numero`)
    }else{
        var num = Number(document.getElementById('num').value)
        for (var c = 1; c <=10; c++) {        
            res.innerHTML+=(`${c} x ${num} = ${c*num} <br>`)
        }
    }
}
