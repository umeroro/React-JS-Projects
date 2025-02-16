import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createGlobalStyle } from "styled-components";

const Globalstyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }
  body {
    background-color: #323334;
    color: #fff;
  }
`;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Globalstyle />
    <App />
  </React.StrictMode>
);
