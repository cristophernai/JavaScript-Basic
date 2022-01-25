var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas`)
if(hora >= 6 && hora <= 11){
    console.log(`Está de manhã`)
}else if(hora >=12 && hora <= 18){
    console.log(`Está de tarde`)
}else if (hora >= 19 && hora >= 0){
    console.log(`Esta de noite`)
}else(
    console.log(`Esta de madrugada`)
)