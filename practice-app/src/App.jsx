import React from "react";
import Card from "./Card";

export const ThemeContext = React.createContext(); // Export kiya taaki Card.js use kar sake

function App() {
  const cardData = [
    { title: "Card 1", description: "This is 1st Description" },
    { title: "Card 2", description: "This is 2nd Description" },
    { title: "Card 3", description: "This is 3rd Description" },
    { title: "Card 3", description: "This is 3rd Description" },
  ];

  const theme = "dark";

  return (
    <ThemeContext.Provider value={theme}>
      <div>
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;