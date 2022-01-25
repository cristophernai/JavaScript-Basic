let num = [1,2,3,4,5,4]
num.sort()
/*
for(let pos=0;pos<num.length;pos++){
    console.log(num[pos])
}

for(let pos in num){
    console.log(num[pos])
}
*/
let pos = num.indexOf(4)
console.log(`O valor 4 está na posiçao ${pos}`)