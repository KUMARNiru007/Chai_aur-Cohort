const obj1 ={
    fname : 'Kumar',
    lname : 'Nirupam',
    getFullname : function () {
    if(this.lname !== undefined) return `${this.fname} ${this.lname}`
    },

    // __proto__:Object // initial

}

const obj2 ={
    fname : 'A',
    lname:'J',
}

//__proto__:Object // initial

obj2.__proto__ =obj1 // we put obj1 inside obj2 __proto__

// obj2.__proto__.__proto__=null
// obj1.__proto__=null --- // Prototypal Inheritance 

//Ptototype Chaining -- will continue till it will not became null

console.log(obj1.getFullname())
console.log(obj2.getFullname())
console.log(obj2.toString())


// only for understanding proto chaining donot change the original. -- it is like changing the internals 