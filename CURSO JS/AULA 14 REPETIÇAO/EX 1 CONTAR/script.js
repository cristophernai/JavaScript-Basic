
function contar(){
    var inicio = Number(window.document.getElementById(`inicio`).value)
    var fim = Number(window.document.getElementById(`fim`).value)
    var passo = Number(window.document.getElementById(`passo`).value)
    conta.innerHTML = (``)
    if(inicio == 0 || fim == 0){
        alert(`[ERRO] INICIO, FIM e PASSO PRECISA DE VALORES INFORMADOS.`)
        conta.innerHTML += (`IMPOSSIVEL CONTAR`)
    }else if (passo==0){ 
        alert(`PASSO nao pode ser 0 iniciando o passo com 1`)
        passo = 1
        if(inicio>fim){
        while(inicio>=fim){
            conta.innerHTML += (`${inicio}&#128073;`)
            inicio = inicio-passo
            }
        }else{
            while(inicio<=fim){
                conta.innerHTML += (`${inicio}&#128073;`)
                inicio = inicio+passo
            }
            conta.innerHTML += (`&#127937;`) 
        }
    }else{
        if(inicio>fim){
            while(inicio>=fim){
                conta.innerHTML += (`${inicio}&#128073;`)
                inicio = inicio-passo
                }
            }else{
                while(inicio<=fim){
                    conta.innerHTML += (`${inicio}&#128073;`)
                    inicio = inicio+passo
                }
            }
       conta.innerHTML += (`&#127937;`)
    } 
}