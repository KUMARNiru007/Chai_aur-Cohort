import React from "https://esm.sh/react@19.1.0";
import ReactDOM from "https://esm.sh/react-dom@19.1.0/client";  // use client side not server side for browser

const App = () => {
  return React.createElement(
    "div", //type
    {}, // config or object 
    React.createElement("h1", {}, "Chai, chill and react - React - 18") // children
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));