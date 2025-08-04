import {useState , useEffect} from "react";


export function App (){

  const [message , setMessage] = useState("Loading...")  // [var , func] comming ans return of function useState

  let anotherMessage ; // not good to use let 


  useEffect ( () => {
    // write the woke to need to be done -- 
    // will always run

    fetch(`/api`)
    .then((res) => res.json())
    .then((data) => setMessage(data.message))
    .catch(() => setMessage("Failed to load"))

   // return () // unMount --> function to next page or clean up to next 
  }, [] // dependency arry  --  bar bar call karna bar bar change -- wiil trigger when there will be some changes in the work 
  )
  return (
    <div>
        <h1>Welcome to chaicode</h1>
        <p>Serving hot chai with react</p>
        <h2>{message} </h2>
    </div>
  )
}