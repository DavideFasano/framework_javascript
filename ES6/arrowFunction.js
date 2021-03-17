//--- array.map   map e' il metodo dell'oggetto array
/*num.map(function(numero,index){
    console.log(numero, "raddoppiato: ", numero*2, "con indice: ", index)
})*/

// function expression

const res = num.map(function(numero){
    return numero*2
})

//arrow function 

const res = num.map( (numero) => {
    return numero*2
})

//arrow function con un solo argomento (posso omettere le parentesi tonde)
const res = num.map( numero => {
    return numero*2
})

//arrow function con una sola riga di comando (posso omettere le graffe e il return)
const res = num.map( numero => numero*2)



console.log(perDueArray)




//quadrato di un numero

function square(n) {
    const res = n*n
    return res
}
//const res = square(5)  //console.log 25

//function expression
const square = function(n){
    return n*n
}

//function expression con arrow function
const square = n => n*n

//const res = square(5) //console.log 25

const numeri = [5,3,2]

const quadrati = numeri.map(square(n)).filter(n => n%2 === 0)