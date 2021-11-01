import "./App.css";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1);

  const changeNum = () => {
    setNumber(Math.floor(Math.random() * 100) + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p className="random-num">{number}</p>
        <button className="random-num__btn" onClick={changeNum}>
          New number
        </button>
      </header>
    </div>
  );
}

export default App;
