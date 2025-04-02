import React, { useContext, useEffect, useReducer, useState } from "react";
import { ThemeContext } from './App';

const Card = (props) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'increase':
        return state + 1;
      case 'decrease':
        return state - 1;
      default:
        return state;
    }
  };

  const theme = useContext(ThemeContext);
  const [post, setPost] = useState([]);
  const [count, dispatch] = useReducer(reducer, 0);

  const handleCount = () => {
    dispatch({ type: 'increase' });
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPost(data));
  }, []);

  return (
    <div style={{ 
      background: theme === "dark" ? "black" : "white", 
      color: theme === "dark" ? "white" : "black",
      padding: "20px",
      margin: "10px",
      borderRadius: "8px"
    }}>
      <h1>{props.title || "No Title"}</h1>
      <p>{props.description || "No Description"}</p>
      <button onClick={handleCount}>Click Me</button>
      <p>Clicked: {count}</p>
      <div>
        <h3>Posts from API:</h3>
        {post.slice(0, 3).map((posts) => (
          <p key={posts.id}>{posts.title}</p>
        ))}
      </div>
    </div>
  );
};

export default Card;