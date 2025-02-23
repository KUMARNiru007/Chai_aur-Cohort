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
//--------------------------------------------------------------------------------------------

//report based on category
let expenses = [
    {description: "Groceries", amount:50 , category:"Food"},
    {description: "Electricity Bill", amount:100 , category:"Utilities"},
    {description: "Dinner", amount:30 , category:"Food"},
    {description: "Internet Bill", amount:50 , category:"Utilities"},
]

// let expenseReport = expenses.reduce((report, expense) => {
//     report[expense.category] += expense.amount

//     return report
// }, {Food:0 , Utilities:0}) // not dynammic
// console.log("Expense Report", expenseReport)



let expenseReport = expenses.reduce((report, expense) => {
    report[expense.category] += expense.amount
    report[expense.category] =(report[expense.catogory] || 0) + expense.amount

    return report
}, {Food:0 , Utilities:0}) 
console.log("Expense Report", expenseReport)

// priority task
let task = [
    { description : "Write report", completed: false, priority: 2},
    { description : "Send email", completed: true, priority: 3},
    { description : "Prepare presentation", completed: false, priority: 1},
]

let pendingSortedTask = task.filter((task) => !task.completed).sort((a,b) => a.priority - b.priority)

console.log(pendingSortedTask)



//average movie rating
let movieRatings =[
    { title: "Movie A" , rating: [4,5,3]},
    { title: "Movie B" , rating: [5,5,4]},
    { title: "Movie C" , rating: [3,4,2]},
]

let averageRating =movieRatings.map((movie) => {
    let total = movie.rating.reduce((sum, rating) => sum+rating, 0)
    let average = total / movie.rating.length

    movie.rating = average
    return movie



    return { title: movie.title, averageRatings: average.toFixed(2)} //toFixed lell no of digits to come 
}) 
// console.log(averageRatings)
console.log(movieRatings)
