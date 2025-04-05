function greet(name){
    console.log(`Hello ${name}`)
}

greet ('Hitesh')
greet("Piyush")
//------------------------------------------------------------------------------------------------
let globalVar  = "I am global"

function modifyGlobal() {
    globalVar = "I am modified"
    let blockScopeVar = "I am blocked-scope"
    console.log(blockScopeVar)

}
modifyGlobal()

//-----------------------------------------------------------------------------------------------// modifyGlobal();

let config = (function () {
    let settings = {
      theme: "dark",
    };
    return settings;
  })(); // function create and called here iffe 
// one time execute
(() => {}) ()



//------------------------------------------------------------------------------------------------
let person1 ={
    personsName : "ravi",
    greet: function() {
        console.log(`Hello, ${this.personName}`)

    }
}

let person2= {
    personName:'kumar'
}

person1.greet.call({personName: Mukul}) // bz we need to change
// call() use when we need to change contect
