import { useState } from "react";
import styled from "styled-components";

const RollDice = () => {
  const [currentDice, setcurrentDice] = useState();
  const generaterandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const rolldice = () => {
    const RandomNumber = generaterandomNumber(1,7);
    setcurrentDice((prev)=>{RandomNumber});
  }

  return (
    <RollContainer>
      <div className="dice" onClick={rolldice}>
        <img src="./images/dice_1.png" alt="Dice 1" />
      </div>
      <p>Click on Dice to roll</p>
      <Button>Reset Score</Button>
    </RollContainer>
  );
};

export default RollDice;

const RollContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 20px;

  .dice {
    cursor: pointer;
  }

  p {
    font-size: 24px;
    font-weight: 400;
  }
`;

const Button = styled.button``;
