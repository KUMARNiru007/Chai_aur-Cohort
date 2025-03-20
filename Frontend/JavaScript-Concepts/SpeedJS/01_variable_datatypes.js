// Datatypes

//Primitive datatypes

let name ="hitesh"
const pi =3.14

let number = 42 // Number
let txt="hello" // String
let isTrue = true // Boolean
let nothing=null // Object 
let undefinedVar = undefined // undefined
let symbol =Symbol() // Symbol

// Object

let person = {
    name:"Kumar",
    age: 19,
    isStudent: true
}
let num ="a42a"
// let convertedNum = Number(num) -- standarised recommended way
// let convertedNum = +num;
let convertedNum = parseInt(num)

let str =123
let convertedStr = String(str)  // standardised recommended way to convert to string

// JSON.stringify(person) // convert object to string ---but high computing -- that moks in diff requiremnt in diffrent position

//--------------------------------------------------------------------------------------------
// Operations

// ((4+(4*2))/2) // NOT RECOMMENDED NOT READABLE

let a= 10
let b= 3

let sum = a + b
let difference = a - b
let product = a * b
let quiotient = a / b // Division
let remainder = a % b // Modulus
let power = a ** b // Exponentiation

let x= 5
let y= 10

console.log(x==y) // Equal to -- Comparrision operstor'==' --  '===' it also check the datatype. 'chotti bacchi ++'
console.log(x !=y) // Not equal to
console.log(x > y) // Greater than
console.log(x < y) // Less than
console.log(x >= y) // Greater than or equal to
console.log(x <= y) // Less than or equal to


//--------------------------------------------------------------------------------------------

console.log(Math.max(5,10)) // take array of no.
console.log(Math.min(5,10)) 
console.log(Math.random()) // Random number between 0 and 1

// for a dice---
console.log(Math.floor(Math.random()*10))
console.log(Math.ceil(Math.random()*10))


//--------------------------------------------------------------------------------------------
// String

let firstName ="Kumar"
let lastName ="Nirupam"

let fullName = firstName + " " + lastName // Concatenation - Kumar Nirupam

let message = "Hello World"

console.log(message.length)
console.log(message.toUpperCase())
console.log(message.toLowerCase())
console.log(message.indexOf("World")) // 6 -- index of the first letter of the start of the string
console.log(message.slice(0,5)) // Hello --- (start,end) -- work to end-1

let myName = "Kumar"

let greeting =`Hello ${myName}, from chaicode` // Template literals -- we could inject anything in the string
