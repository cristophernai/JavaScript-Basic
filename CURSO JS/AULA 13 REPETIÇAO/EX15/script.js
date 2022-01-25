ini=0
fim=0
pas=0
c=0
v= new Array()
function contar(){
    res.innerHTML = (``)
    var ini = Number(document.getElementById(`ini`).value)
    var fim = Number(document.getElementById(`fim`).value)
    var pas = Number(document.getElementById(`pas`).value)
    
if (pas == 0){
        alert(`O Passo não pode ser 0, Vamos começar a contar do 1`)
        pas= 1
        while(ini<=fim){
            v[c] = ini
            res.innerHTML += (`${v[c]} &#128073;`)          
            ini= ini+pas
            c++
        }

    }else if(ini > fim){
        while(ini>=fim){
            v[c] = ini
            res.innerHTML += (`${v[c]} &#128073;`)
            ini= ini-pas
            c++
        }
    }else{
            while(ini<=fim){
                v[c] = ini
                res.innerHTML += (`&#128073; ${v[c]}`)
                ini= ini+pas
                c++
            }res.innerHTML+= (`&#10004;`)
        }
    }

