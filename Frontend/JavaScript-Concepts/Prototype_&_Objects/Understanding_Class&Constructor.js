class Person {
  constructor (fname,lname) {
    this.fname = fname
    this.lname =lname
  }
  getFullName() {
    return `${this.fname} ${this.lname}`
  }
}
// Person.prototype = 
// constructor , getfullName and finally Object


const p1 = new Person ('Kumar', 'Nirupam')
// Here we are creating two different object of different values but have same structure .. 

// if we look in p1.__proto__ = we get
// the all the Structor of Person class --> constructor , getfullName and objects



// obj1.__proto__=Person
// obj2.__proto__=Person -- to make this not write .. The Js automaticalley do this internally -- //This is called Syntactical Sugar 


const p2 =new Person('Akash','Kadlag')

console.log(p1.getFullName())
console.log(p2.getFullName())


// in this above example a Parameterised Constructor is created ...
console.log(typeof(p1))
