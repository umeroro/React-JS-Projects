import styled from "styled-components";

const NumberSelector = () => {
  const arrayNumber = [1, 2, 3, 4, 5, 6];

  return (
    <div>
      {arrayNumber.map((value, i) => (
        <Box key={i}>{value}</Box>
      ))}
    </div>
  );
};

export default NumberSelector;

const Box = styled.div`
  width: 40px;
  height: 40px;
  color: black;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
`;
