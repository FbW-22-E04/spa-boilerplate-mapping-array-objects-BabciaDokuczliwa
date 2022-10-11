import React from "react";
import ReactDOM from "react-dom/client";

const animals = [
  { label: "Horse" },
  { label: "Turtle" },
  { label: "Elephant" },
  { label: "Monkey" },
];

const animalsInHtml = animals.map((animal) => {
  return <li>{animal.label}</li>;
});

console.log(animalsInHtml);

const container = document.getElementById("root");

// create a root
const root = ReactDOM.createRoot(container);

//render app to root
root.render(animalsInHtml);
