import styled from "styled-components";

const RollDice = ({ currentDice, rollDice }) => {
  const resetScore = () => {
    setCurrentDice(1);
  };

  return (
    <RollContainer>
      <div className="dice" onClick={rollDice}>
        <img
          src={`./images/dice_${currentDice}.png`}
          alt={`Dice ${currentDice}`}
        />
      </div>
      <p>Click on Dice to roll</p>
      <Button onClick={resetScore}>Reset Score</Button>
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

const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;

  &:hover {
    background-color: #0056b3;
  }
`;
