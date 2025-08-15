import React from "react";

export default function App({ teas }) {

    //used like this without .jsx
  return React.createElement("div", { style: { padding: "2rem" } }, [
    React.createElement("h1", {}, "Chaicode Teas"),
    React.createElement(
      "ul",
      {},
      teas.map((teas) =>
        React.createElement("li", { key: teas.id },
             [
          React.createElement("h3", {}, teas.name)
        ])
      )
    ),
  ]);
}
