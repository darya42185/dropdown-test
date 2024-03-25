import React from "react";
import "./App.css";
import Dropdown from "./components/Dropdown.js";

const CustomOptionComponent = ({ option }) => {
  return (
    <div>
      <span>{option}</span>
    </div>
  );
};

function App() {
  const customSearchFunction = async (searchTerm) => {
    // Simulating async operation with setTimeout
    return new Promise((resolve) => {
      setTimeout(() => {
        const filteredOptions = ["Custom Result 1", "Custom Result 2"];
        resolve(filteredOptions);
      }, 1000);
    });
  };

  return (
    <div className="App">
      <Dropdown
        options={["Київ", "Житомир", "Біла Церква", "Бориспіль", "Коростень"]}
        customComponent={(option) => <CustomOptionComponent option={option} />}
        customSearch={customSearchFunction}
      />
    </div>
  );
}

export default App;
