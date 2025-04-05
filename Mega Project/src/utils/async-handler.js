// const asyncHandler =(requestHandler) { 
//     return (req,res,next) => {
//         Promise.resolve(requestHandler(req,res,next))
//         .catch((err) => next(err))
//     }
// }

// export {asyncHandler}

function asyncHandler(requestHandler) {
   return function(req ,res ,next ){
    Promise.resolve(requestHandler(req,res,next))
    .catch(function(err){
        next(err)
    })

   }
}

export {asyncHandler}



// this asyncHandler -- is used to replace the try catch block -- 
// it wraps a function in promise and resolve it . if erong the catch block executes



function test (req, res ,next) {
  Promise.resolve()
  .catch()
}