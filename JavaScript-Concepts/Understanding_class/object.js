const obj1 ={
    fname : 'Kumar',
    lname : 'Nirupam',
    getFullname : function () {
    if(this.lname !== undefined) return `${this.fname} ${this.lname}`
    },

    __proto__:Object

}

const obj2 ={
    fname : 'A',
    lname:'J',
}


obj2.__proto__ =obj1

// obj2.__proto__.__proto__=null
// obj.__proto__null

// Prototypal Inheritance
//Ptototype Chaining

console.log(obj1.getFullname())
console.log(obj2.getFullname())
console.log(obj2.toString())


// only for understanding proto chaining donot change