import React from "https://esm.sh/react@19.1.0";
import ReactDOM from "https://esm.sh/react-dom@19.1.0/client";  // use client side not server side for browser

const App = () => {
  return React.createElement(
    "div", //type
    {}, // config or object 
    React.createElement("h1", {}, "Chai, chill and react - React - 19") // children
  );
};

//creatElemt elementt made 

const container = document.getElementById("root"); 
const root = ReactDOM.createRoot(container);
 //vitrually dom  programatic dom controlling 
root.render(React.createElement(App)); //rent in the root file 


//React conpare the elemet then see if it want to change or not it is callind Diffing ALGO ..  

// reconsigation what to remove wht ato add engine