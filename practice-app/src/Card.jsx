import React, { useState } from "react";

const Card = (props) => {

  const [count, setCount] = useState(0);

  const handleClick = () => {
    alert(props.title || "No Title");
  };

  const handleCount = () => {
    setCount(count + 1);
  }

  return (
    <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
      {props.title ? (
        <>
          <h1>{props.title || "No Title"}</h1>
          <button onClick={handleClick}>Show Title</button>
          <p>{props.description || "No Description"}</p>
        </>
      ) : (
        <>
          <p>No title available</p>
        </>
      )}
      <button onClick={handleCount}>Clicked Me</button>
      <p>Clicked : {count}</p>  
    </div>
  );
};

export default Card;
