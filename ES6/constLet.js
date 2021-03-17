//---const non puo essere ne ridichiarata ne riassegnata
const saluto = "ciao"
//---const se e' un array, se creato vuoto, puo essere modificato dopo
const colori = []
//const colori = new Array()
colori.push('red','blue')
console.log(colori)
colori.push('green')
console.log(colori)

//---let si puo riassegnare ma non ridichiarare
let numeri = [1,2,3,4]
numeri = "uno due tre quattro"


const num = [1,2,3,4,5,6,7,8,9]