const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"];


//d
const ordemAlfabetica = frutas.sort((a, b) => {
    return a.localeCompare(b)
})
console.log(frutas)

//e
const ordemDecrescente = frutas.sort((a, b) => {
    return b.localeCompare(a)
})
console.log(frutas)

//f
const ordemCrescente = frutas.sort((a, b) => {
    return a.length - b.length
});
console.log(frutas);



