function fatorial(n){
    let fat = 1
    let fatn = n
    let fatr = 1
    for (let c = 1; c < n; c++) {
        fatr*=fatn
        fatn= fatn-1        
        
    }
    return fatr
}
console.log(fatorial(5))