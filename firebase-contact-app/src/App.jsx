import React from "react";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="mx-auto max-w-[370px] p-4">
      <Navbar />
      <div className="flex">
        <input
          type="text"
          placeholder="Search Contact"
          className="h-10 flex-grow rounded-md border border-white bg-transparent text-white"
        />
      </div>
    </div>
  );
};

export default App;
