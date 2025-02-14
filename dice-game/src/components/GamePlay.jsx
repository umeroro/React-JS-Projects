import styled from "styled-components";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import { useState } from "react";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setselectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const rollDice = () => {
    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice(randomNumber);

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }

    setselectedNumber(undefined);
  };

  return (
    <Maincontainer>
      <div className="top-section">
        <TotalScore score={score} />
        <NumberSelector
          selectedNumber={selectedNumber}
          setselectedNumber={setselectedNumber}
        />
      </div>
      <RollDice currentDice={currentDice} rollDice={rollDice} />
    </Maincontainer>
  );
};

export default GamePlay;

const Maincontainer = styled.div`
  padding: 50px 20px;

  .top-section {
    display: flex;
    justify-content: space-between;
    align-items: end;
  }
`;
