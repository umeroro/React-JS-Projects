import styled from "styled-components";

const TotalScore = () => {
  return (
    <Scorecontainer>
      <h1>0</h1>
      <p>Total Score</p>
    </Scorecontainer>
  );
};

export default TotalScore;

const Scorecontainer = styled.div`
  max-width: 200px;
  text-align: center;
  h1 {
    font-size: 100px;
    line-height: 100px;
  }
  p {
    font-size: 24px;
    font-weight: 500;
  }
`;
