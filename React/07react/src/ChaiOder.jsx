import {useState} from "react";

export function ChaiCounter(){


const [count,setCount] = useState(0)

const serveChai = () => {
    setCount(prev => prev+1)
}
   return (
    <div>
        <h2>
            Chai Counter
        </h2>
        <p>You have served {count} cups of chai</p>
        <button onClick={serveChai} >  Serve chai</button>
    </div>
   )



}