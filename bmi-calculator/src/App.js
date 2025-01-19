import "./App.css";
import React, { useState } from "react";

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState(``);
  const [message, setMessage] = useState(``);


  let calBmi = (e)=>{
    e.preventDefault();
    if(weight <= 0 || height <= 0 ){
      alert("Enter the Valid Weight and Height");
    }
    else {
      let bmi = (weight/(height*height)*703);
      setBmi(bmi.toFixed(1))

      if(bmi<25) {
        setMessage('You are under Weight');
      } else if(bmi>25 && bmi<30){
        setMessage('You are a Healty Weight Person');
      } else {
        setMessage('You are a Over Weight Person'); 
      }
    }
  }

  let reload = ()=>{
    window.location.reload();
  }


  return (
    <div className="App">
      <div className="container">
        <h2>BMI Calulator</h2>
        <form onSubmit={calBmi}>
          <div>
            <label>Weight (LBS)</label>
            <input
              type="text"
              placeholder="Enter Weight Value"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              />
          </div>
          <div>
            <label>Height (In)</label>
            <input type="text" placeholder="Enter Height" value={height} onChange={(e) => setHeight(e.target.value)} />
          </div>
          <div>
            <button className="submitBtn" type="submit">
              Submit
            </button>
            <button className="relaodBtn" onClick={reload} type="reload">
              Reload
            </button>
          </div>
          <div>
            <h3>Your BMI Value : {bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
