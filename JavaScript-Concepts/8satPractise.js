// Create an array containing different types of teas
const teas = [
    "green tea",
    "Herbal Tea",
    "oolang tea"
]

// ADD "chamomile tea" to the existing list of teas
teas.push("Chamomile tea")

// Remove "Oolang Teas" from the list of teas 
 const index=teas.indexOf("oolang tea") //if String does not exit it return -1
 if(index > -1){
    teas.splice(index , 1) //splice(start, deleteCount) is a method used to modify an array by removing or replacing elements.
    //index: The position in the array where we want to start removing elements.
    //1: The number of elements to remove from the array.
 }
 
// Filter the list to only include teas that are caffeinated 

const caffinated =teas.filter(tea => tea!= "Herbal Tea")

// Sort the list of teas in alphabetical order
const test =["🥚🐔"]
console.log(test.sort())

//Use a for loop to print each type of tea in the array.

for(let i =0;i< teas.length;i++){
    console.log(teas[i])
}

// Use a for loop to count how many teas are caffeinated(excluding "Herbal tea")

let c=0
for(let i=0;i<teas.length;i++){
    if(teas[i]==="Herbal Teas"){
        c=c+1
    }
}

// Use a for loop to create a new array with all tea names in uppercase
const u=[]
    for(let i=0;i<teas.length;i++){
        u.push(teas[i].toUpperCase())
    }

//Use a for loop to find the tea name with the most character

let longestTea=""
for(let i=0 ; i< teas.length ;i++){
    if(teas[i].length>longestTea.length){
        longestTea = tea[i]
    }
}

// Use a for loop to reverse the order of tes in the array
const reversedArray=[]
for(let i=teas.length-1;i>=0;i--){
    reverseArray.push(teas[i])
}