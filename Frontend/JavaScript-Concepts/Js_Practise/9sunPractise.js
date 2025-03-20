// create an object representing a type of tea with properties for name, type  and caffine content

const teas = {
    name : "Lemon tea",
    "tea type" : "Green",
    caffine : "Low"
}

// Access and print the name and type prperties of the tea object 

console.log(teas.name);
console.log(teas["type"])

// add a new property origin to the tea object 

teas.origin = "Assam"


// change the caffeine level of the tea object to "Medium".

teas.caffine = "Medium"

// remove the type property from the tea object 

delete teas.type

// check if the tea object has a property origin

console.log("origin" in teas)

// use a for...in loop to print all properties of the tea object. 

for(let key in teas){
    console.log(key+" !"+teas[key])
}

// create a nested object representing different types of teas and their properties

const myTeas = {
    greentea :{
        name: "Green Tea"
    },
    blackTea : {
        name: "Black tea"
    }
}

// create a copy of the tea object .

const teaCopy ={ ...teas} // shallow copy
const anotherCopy = teas // reference

// add a custom method describe to the tea object that returns a descriptin string.

const p1KaString =JSON.stringify(teas) // Object to String formaat 
 console.log(p1KaString)

// merge two objects representing different teas into one.

const tea2 ={
    brand :"Xyz"
}

const str1 =JSON.stringify(teas)
const str2 =JSON.stringify(tea2)

const result = str1.concat(" ",str2)