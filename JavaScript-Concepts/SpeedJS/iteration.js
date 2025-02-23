let salesData = [
    {product: "Laptop", price: 1200},
    { product: "SmartPhone", price: 800},
    { product: "HeadPhone", price: 150},
    {product: "Keyboard", price: 80}
]


// Reduce-----imp

let totalSales =salesData.reduce((acc,sale) => acc + sale.price,0) 
// console.log(totalSales) //2230

"kumar".toUpperCase().slice(0,0).indexOf("h") // this is piping -- impo for interview

//Items less than 50
let inventory =[
    { name:"Widget A", stock:30 },
    { name:"Widget B", stock:120 },
    { name:"Widget C", stock:45 },    
    { name:"Widget D", stock:70 }
    ]

    let lowStock= inventory.filter((item) => item.stock < 50 )
    // ((item) => (item.stock < 50) )
    console.log(lowStock) 

let userActivity = [
    { user:"Alice", acitivitycount: 45} ,
    { user:"Bob", acitivitycount: 72} ,
    { user:"Charlie", acitivitycount: 33} ]

// find most user using reduce

let mostActiceUser = userActivity.reduce((maxUser,user/*i*/) => user.acitivitycount > maxUser.acitivitycount ? user : maxUser )

console.log(mostActiceUser)  // { user:"Bob", acitivitycount: 72 }


