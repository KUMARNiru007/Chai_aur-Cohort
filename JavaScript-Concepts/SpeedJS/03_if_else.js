function prepareChai(type){
    type=type.toLowerCase()

    if(type==="Masala Chai"){
        console.log("Adding spices to the chai")
     }
     else {
        console.log("Preapare regular chai")
     }
}
prepareChai("masala Chai")
prepareChai("Ginger Chai")

/* Ek online store mein,agar customer ka total bill amount 100 se zada hai.
toh 10% discount milta hai .Nahi toh full maount pay karna parta hai.
*/
function calculationTotal(amount){
    let convertedAmount=String(amount)
    if(amount > 1000){
        return convertedAmount*0.9
    }
    return convertedAmount
   
}

let finalBill=calculationTotal(1200)

console.log(finalBill)
console.log(calculationTotal(1300))

/*Ek traffic light system mein agar light red hai toh stop karna hai.
agar light yellow hai toh "slow down" karna hai.
agar light green hai toh "go" hai.
*/

function trafficLight(color){
    color=color.toLowerCase()
    switch(color){
        case "red":
            return "Stop"
        case "yellow":
            return "Slow Down"
        case "green":
            return "Go"  
        default:
            return "Invalid Color"      
    }
    /*switch(color){
    case 'red':
        console.log('Stop')
        break or return
    case 'yellow':
        console.log('Slow Down')
            break or return
    case 'green':
        console.log('Go')
            break or return
    default:
        console.log('Invalid Color')}
     }*/
}

let signal = trafficLight("Red")
console.log(signal)

function checkTtruthyValue(value){
    if(value){
       return "Truthy"
    } else {
      return "Falsy"
    }
}

console.log(checkTtruthyValue(1)) //Truthy
console.log(checkTtruthyValue(0))//Falsy --important
console.log(checkTtruthyValue("Hitesh"))        //Truthy
console.log(checkTtruthyValue(""))             //Falsy
console.log(checkTtruthyValue([1]))            //Truthy
console.log(checkTtruthyValue([1,2,3]))       //Truthy
console.log(checkTtruthyValue([]))           //Truthy
console.log(checkTtruthyValue("")) //Falsy
console.log(checkTtruthyValue(null)) // Falsy
console.log(checkTtruthyValue(undefined)) // Falsy
console.log(checkTtruthyValue({})) // Truthy

//---------------------------------------------------------------------------------------------
function calculationTotal(amount){
   return ammount > 100 ? amount*0.9 : amount  //ternary operator  
}

// let isLoding = false
// return isLoding ? () : () //ternary operator


function login(username, password,loginIp){
    if(username === 'adim' && (password==='123' || loginIp ==='127')){
        console.log( "Login Successful")
    } else {
        console.log("Invalid Credentials")
    }

} //parentenses are important for production based code
