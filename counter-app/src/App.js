import "./App.css";
import { useState } from "react";

function App() {
  const [totalValue, setTotalValue] = useState(0);

  let addValue = () => {
    setTotalValue(totalValue + 1);
  };
  let subValue = () => {
    if (totalValue > 0) {
      setTotalValue(totalValue - 1);
    }
  };
  let reload = ()=>{
    window.location.reload();
  }

  return (
    <div className="App">
      <h1 className="heading">Counter App</h1>
      <div className="container">
        <div>
          <button className="reload" onClick={reload}>Reload</button>
        </div>
        <div className="value">
          <p>{totalValue}</p>
        </div>
        <div className="btns">
          <button className="subBtn" onClick={subValue}>
            -
          </button>
          <button className="addBtn" onClick={addValue}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
