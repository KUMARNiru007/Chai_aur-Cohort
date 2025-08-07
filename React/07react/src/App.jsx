import {useState , useEffect} from "react";
import { ChaiMenu } from "./AllChai";
import { useSpecialChai } from "./hooks/useSpecialChai.js";


export function App (){
  const { chai,loading, error } = useSpecialChai()
  const [message , setMessage] = useState(1)  // [var , func] comming ans return of function useState

  let anotherMessage ; // not good to use let 


  useEffect ( () => {
    // write the woke to need to be done -- 
    // will always run

    fetch(`/api`)
    .then((res) => res.json())
    .then((data) => setMessage(data.message))
    .catch(() => setMessage("Failed to load"))

   // return () // unMount --> function to next page or clean up to next 
  }, [] )// dependency arry  --  bar bar call karna bar bar change -- wiil trigger when there will be some changes in the work 

 if(loading) return <h2>Loading...</h2>
 if(Error)  return <h2>Error  </h2>

  return (
    <div>
        <h1>Welcome to chaicode</h1>
        <p>Serving hot chai with react</p>
        <h2>{message} </h2>
        <ChaiMenu />
        <h3>{chai.name}</h3>
    </div>
  )
}