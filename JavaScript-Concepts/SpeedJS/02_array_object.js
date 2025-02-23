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

let chaiRecipe = {
    name:"Masala chai",
    ingredients: {
        teaLeaves: "Assam Tea",
        milk: "full Creak Milk",
        sugar: "Brown sugar",
        spices:["Daalchine", "Ginger"]
    },
    instructions: "Boil water, add tea leaves, milk, sugar and spices. Boil for 5 minutes and serve hot"
}

// console.log(chaiRecipe.ingredients.spices[1]) // Ginger

let updatedChaiRecipe = {
    ...chaiRecipe,
    instruction: "Boil water, add Tea Leaves, Milk , Sugar and Spices with some love"
};// Spread operator 
console.log(updatedChaiRecipe) // in Object format-- {name: "Masala chai", ingredients: {…}, instructions: "Boil water, add Tea Leaves, Milk , Sugar and Spices with some love", instruction: "Boil water, add Tea Leaves, Milk , Sugar and Spices with some love"}

// let name = ""  a bit same  
let {name, myingredients} = chaiRecipe // Object destructiong  -- it is used to extract the values from the object-- like mapping -- all are the variable.
let [firstChai, secondChai] = chaiTypes // Array destruction

// let [value, setValue] = usestate() // Array destructiong  --- data kya hai([value, setValue]) operation(useState()) kya karna hai  -- 

// console.log({ ingredients}) // {name: "Masala chai", ingredients: {…}} -- Object destructiong
 console.log({myingredients}) // undefined -- Object destructiong
console.log(secondChai) // Masala chai -- Array destructiong