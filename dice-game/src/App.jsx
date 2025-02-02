import { useState } from "react";
import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((pre) => !pre);
  };

  return (
    // <>{isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />}</>
    <GamePlay />
  );
}

export default App;
