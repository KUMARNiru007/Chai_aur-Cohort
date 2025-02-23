let chaiTypes = ["Masala chai", "Ginger chai",  "Green Tea" , "Lemon Tea"];

console.log(chaiTypes[0]); 
console.log(`Total chai types : ${chaiTypes.lenght}`)

chaiTypes.push("Herbal Types") // Insert at the last
let data = chaiTypes.pop() // Remove the last element 
console.log(data) // Herbal Types -- LiFo concept

let index = chaiTypes.indexOf("Green Tea") // 2 -- Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present

if (index !== -1) {
    chaiTypes.splice(index , 1)
}
// console.log(chaiTypes) // ["Masala chai", "Ginger chai", "Lemon Tea"]

chaiTypes.forEach( (chai, index) => {
    console.log(`${index =1 }: ${chai}`)
}) // it is used for looping through the array other Map and Filter or normal loop

let moreCahiTypes = ["Oolong", "White Tea"]

let allChaiTypes = chaiTypes.concat(moreCahiTypes) //        ["Masala chai", "Ginger chai", "Lemon Tea", "Oolong", "White Tea"]

let newCahiTypes = [...chaiTypes , "chamoline Tea"] // ["Masala chai", "Ginger chai", "Lemon Tea", "chamoline Tea"]  -- unpacks the chaiTypes arrays -- sprread operator
console.log(newCahiTypes)

