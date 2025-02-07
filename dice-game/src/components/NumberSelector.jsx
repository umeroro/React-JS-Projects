import { useState } from "react";
import styled from "styled-components";

const NumberSelector = () => {
  const arrayNumber = [1, 2, 3, 4, 5, 6];
  const [selectedNumber, setselectedNumber] = useState();
  console.log(selectedNumber);

  return (
    <NumberSelecterContainer>
      <div className="flex">
        {arrayNumber.map((value, i) => (
          <Box
            isSelected={value === selectedNumber}
            key={i}
            onClick={() => setselectedNumber(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>
        Select Number
      </p>
    </NumberSelecterContainer>
  );
};

export default NumberSelector;

const NumberSelecterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  .flex{
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 24px;
    font-weight: 700;
  }
`;

const Box = styled.div`
  width: 40px;
  height: 40px;
  color: black;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
`;
