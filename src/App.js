import "./App.css";
import Dropdown from "./components/Dropdown.js";

function App() {
  return (
    <div className="App">
      <Dropdown
        options={["Київ", "Житомир", "Біла Церква", "Бориспіль", "Коростень"]}
      />
    </div>
  );
}

export default App;
