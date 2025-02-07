import styled from "styled-components";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";

const GamePlay = () => {
  return (
    <Maincontainer>
      <div className="top-section">
        <TotalScore />
        <NumberSelector />
      </div>
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
