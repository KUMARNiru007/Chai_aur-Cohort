import React from "https://esm.sh/react@19.1.0";
import ReactDOM from "https://esm.sh/react-dom@19.1.0/client";  


const Chai = (props) => {
    console.log(props);

  return (
    React.createElement("div" ,{} ,[
      React.createElement("h1" , {} , props.name),
      React.createElement("p" , {} ,props.cost),

    ])
  )
}

const App = () => {
  return React.createElement(
    "div", //type
    {}, // config or object 
    [
    React.createElement("h1", {}, "Chai, Varations"),
    React.createElement(Chai , {
        name:"Masala Chai",
        cost :"1000"
    }),
    React.createElement(Chai , {
        name:"Ginger Chai",
        cost :"1000"
    }),
    React.createElement(Chai, {
        name:"Lemon Chai",
        cost :"1000"
    }),
    React.createElement(Chai, {
        name:"Ice Chai",
        cost :"1000"
    }),
    React.createElement(Chai, {
        name:"Orange Chai",
        cost :"1000"
    }),

   ]
  );
};



const container = document.getElementById("root"); 
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));


