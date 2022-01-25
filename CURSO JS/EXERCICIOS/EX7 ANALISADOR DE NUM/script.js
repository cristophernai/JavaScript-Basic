          var numadd = []
function add(){  
            var num = document.getElementById(`num`)         
            if(num.value==0){
                alert(`Digite um numero para adicionar`)
            }else if(num.value>=1 && num.value<=100){
                if (numadd.includes(Number(num.value))==true) {
                    alert(`Numero ja adicionado`)
                }else{
                numadd.push(Number(num.value)) 
                let item = document.createElement(`option`)    
                item.text = `val ${num.value}`
                addc.appendChild(item)
                }
            }else{
                alert(`Numero não esta entre 1 e 100 por favor digite outro`)
            } 
            num.value = ``
            num.focus()
        }
function final(){
    if (numadd.length==0) {
        alert(`Não tem nenhum numero adicionado a lista ainda`)        
    }else{
        var soma = 0
        var media = 0
        var maior = numadd[0]
        var menor = numadd[0]
        for (let c = 0; c < numadd.length; c++) {                    
        soma += numadd[c]
        media = soma/numadd.length
        if(numadd[c]>=maior){
            maior = numadd[c]
        }
        if (numadd[c]<menor) {
            menor = numadd[c]
        }
    }
    res.innerHTML = 
    `<br> Ao todo temos ${numadd.length} informados
    <br> O maior numero adicionado é: ${maior}
    <br> O menor numero adicionado é: ${menor}
    <br>Resultado da soma dos numeros adicionados é: ${soma} 
    <br>A media dos numeros é: ${media}    `
    }
}
