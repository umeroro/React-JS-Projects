import React from "react";

const Card = (props) => {
  const handleClick = () => {
    alert(props.title || "No Title");
  };

  return (
    <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
      <h1>{props.title || "No Title"}</h1>
      <button onClick={handleClick}>Show Title</button>
      <p>{props.description || "No Description"}</p>
      <div></div>
    </div>
  );
};

export default Card;
