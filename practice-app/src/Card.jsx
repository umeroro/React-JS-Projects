import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from './App';

const Card = (props) => {
  const theme = useContext(ThemeContext);
  const [post, setPost] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPost(data));
  }, []);

  const handleCount = () => {
    setCount(count + 1);
  };

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