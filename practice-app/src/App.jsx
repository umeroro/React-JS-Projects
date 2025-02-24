import React from "react";
import Card from "./Card";

function App() {
  // const cardData = [
  //   { title: "Card 1", description: "This is 1st Description" },
  //   { title: "Card 2", description: "This is 2nd Description" },
  //   { title: "Card 3", description: "This is 3rd Description" },
  // ];

  const title = true;

  return (
    <>
      <div>
        {/* {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
          />
        ))} */}
        <Card {title ?}/>
      </div>
    </>
  );
}

export default App;
