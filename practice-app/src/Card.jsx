import React, { useContext, useEffect, useReducer, useState } from "react";
import { ThemeContext } from './App';

const Card = (props) => {

  const reducer = ((state , action)=>{
    if(action.type === 'increase'){
      return state + 1;
    } else if (action.type === 'decrease'){
      return state -1 ;
    }
  })

  const theme = useContext(ThemeContext);
  const [post, setPost] = useState([]);
  const [count, setCount] = useReducer(reducer , 0);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPost(data));
  }, []);

  return (
    <div style={{ background: theme === "dark" ? "black" : "white", color: theme === "dark" ? "white" : "black" }}>
      {props.title ? (
        <>
          <h1>{props.title || "No Title"}</h1>
          <p>{props.description || "No Description"}</p>
        </>
      ) : (
        <p>No title available</p>
      )}
      <button onClick={handleCount}>Click Me</button>
      <p>Clicked: {count}</p>
      {post.map((posts) => (
        <p key={posts.id}>{posts.title}</p>
      ))}
    </div>
  );
};

export default Card;