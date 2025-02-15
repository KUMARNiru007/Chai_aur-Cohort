if(!Array.prototype.myForEach){
    Array.prototype.myForEach = function(userFn){
        const originalarr = this   // Point to current object

        for (let i=0; i< originalarr.length; i++){
          userFn(originalarr[i],i)
        }
    }
}


const arr1 = [1,2,3,4,5]

// Error: .forEach function does not exist on arr1 variable
// Real Signatyrre ko samjho

const ret=arr1.myForEach(function(value , index) {
    console.log(`Value ${value} and index ${index}`)
})

console.log(`Ret is`, ret)


//-------------------------------------------------

//Signamture .map
//return ? new array each ale Iterate , user fun

if(!Array.prototype.myMap){
    Array.prototype.myMap = function(userFn) {
        const result =[]

        for(let i =0 ;i<this.length ; i++){
            const value =userFn(this[i], i);
            result.push(value)
        }
        return result
    }
}
//---------------------------------------------------
// Myfilter Polyfill

if(!Array.prototype.myfilter){
    Array.prototype.myfilter = function(userFn){
        const result=[];

        for(let i=0 ;i<this.length;i++){
            if(userFn(this[i])){
                result.push(this[i]);
            }
        }
        return result
    }
}




const n =arr1.map((e) => e*2)
const n2 =arr1.myMap((e) => e*3)

console.log(n)
console.log(n2)

const n3 = arr1.myfilter((e) => e%2 ==0)
console.log(n3)
