Function.prototype.describe = function () {
  console.log(`Function name is ${this.name}`); // this-- here always point  o the function name and return the Fuction name in which this prototype is being called .
};

function masalaChai(){}
function gingerChai(){}

function greet(name)  {// here name is a parameter i.e a placeholder
  return `Hello ${name}`;
}

greet("name").describe // bug 
// greet("name").describe() 
// greet.describe(); // output :- Function name is greet  
// no use of (name) parameter


greet.describe('hitesh'); // here hitesh is  "argument" 


masalaChai.describe() // output =>Function name is MasalaChai



function add(a, b){
    return a+b
} // normal function declaration 

const substract = function(a, b){
    return a-b
}  // function Expression

const multiply = (a, b) => a*b  //arrow function

//--------------------------------------------------------------------------
function applyOperation(a, b, operation){
    return operation(a, b)
}

const result = applyOperation(5, 4, (x, y) => x/y) // first class function 

console.log(result)

//---------------------------------------------------------------------------
function createCounter(){
    let count = 0;
    return function () {
        count++;
        return count
    } // return will be a function
}  // Tiffin concept will take all the variaqble and func inside the scope to the outside variable which was being called . 

//console.log(count); 

const counter = createCounter()  // a function will be retureds so the counter will be a function

console.log(counter()); //output => 1 




//---------------------------------------------------------------------------



function onef(){
    let myName = "hitesh"
}

console.log(myName);// myname out of scope

//---------------------------------------------------------------------------

(function(){
    console.log("hitesh");
    
})() // iffe - automatically call the function using the wrapper

()() // function () and its call ()

(function(){

})() // wraping a function  immediatly call the function automatically