const person ={
    x:10,
    firstName:'Kumar',
    lastName : 'Nirupam',
    nobbies:['Coding','Gym'],
    getfullNmae: function(){
        return 'Kumar'
    },
    address:{
        hno:1,
        street:2,

    }
}
console.log(person.address.hno)
console.log(person)

const remote={
    color:'blue',
    brand:'xyz',
    turnOff:function(){
        
    },
    volumeUp: function(){

    }
}

let p1={
    fn:'hitesh',

}
let p2=p1

console.log(p2)
p2.fn='piyush'
console.log(p2) 
// value of p2 will change in p2
console.log(p1) // value of fn will also be changed in p1 also . 
  
// stack memory cannot grow
// heap memory can grow

//Objects are stored in Heap memory

// In the above example we are only coping the address of the variable ... not the actual value

// let pp1={
//    fn:'hitesh',
//    ln:'ch'
// }

// let pp2={
//     fn: pp1.fn,
//     ln: pp1.ln
// }

// pp2.fn='Kumar'
// pp2.ln ='Niru'
// console.log(pp1)
// console.log(pp2)

// let pp1={
//     fn:'hitesh',
//     ln:'ch'
//  }
 
//  let pp2={
//     ...pp1 //Spread Operator 
//  }
 
//  pp2.fn='Kumar'
//  pp2.ln ='Niru'
//  console.log(pp1)
//  console.log(pp2)

// let pp1={
//     fn:'hitesh',
//     ln:'ch',
//     address :{
//         h:1

//     }
//  }
 
//  let pp2={
//      fn: pp1.fn,
//      ln: pp1.ln,
//      address: pp1.address  // value not copy address, copy by refernce , There no inner copy 
//  }
 
//  pp2.fn='Kumar'
//  pp2.ln ='Niru'
//  console.log(pp1)
//  console.log(pp2)

// ---------- spread Operator : shallow copy

let pp1={
    fn:'hitesh',
    ln:'ch',
    address :{
                h:1
        
        }
 }
 
 let pp2={
    ... pp1 // shallow copy no inner copy .. to correct it we use 
 }
 
 pp2.fn='Kumar'
 pp2.ln ='Niru'
 console.log(pp1)
 console.log(pp2)


 // ----- deep copy 
//  let ppp1={
//     fn:'hitesh',
//     ln:'ch',
//     address :{
//                 h:1
        
//         }
//  }
 
//  let ppp2={
//     ... ppp1 ,
//     address :{
//         ...ppp1.address
//     }
//  }
 
//  ppp2.fn='Kumar'
//  ppp2.ln ='Niru'
//  console.log(ppp1)
//  console.log(ppp2)




 // ----------  other technique for Deep Copy ------


 let ppp1={
    fn:'hitesh',
    ln:'ch',
    address :{
                h:1
        
        }
 }
 const p1KaString =JSON.stringify(ppp1)
 console.log(p1KaString)
 let ppp2 = JSON.parse(p1KaString)

 ppp2.fn='Kumar'
 ppp2.ln ='Niru'
 console.log(ppp1)
 console.log(ppp2)