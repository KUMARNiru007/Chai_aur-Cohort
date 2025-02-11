

function Sum(numbers){
let sum=0
for(let i=0;i<numbers.length ; i++){
    sum=sum+numbers[i]
}
return sum
}
let myArray = [1,2,4,5,6]
let result=Sum(myArray)
console.log(`the sum of each element of array is = ${result}`)

// Ctrl D to select all duplicate values