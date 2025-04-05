let arr1=[1,4,3,8,2]
let arr2=[1,4,3,8,2]

let result=arr1.reverse()
console.log(result)
console.log(arr1)

result = arr2.toReversed();
console.log(result)
console.log(arr2)

// reverse() and toReversed() methods are different as reverse() func this changes the reference to the original array so original arrays values changes.

//toReversed() donot change the original array and make a new array it copy the elements of the array and return the new array