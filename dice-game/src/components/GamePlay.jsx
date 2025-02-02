import styled from "styled-components";

const GamePlay = () => {
  return (
    <Container>
      <div>
        <div>
          <p>0</p>
          <p>Total Score</p>
        </div>
        <div>
          <div>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
          </div>
          <div>
            <h6>Select Number</h6>
          </div>
        </div>
      </div>
      <div></div>
    </Container>
  );
};

export default GamePlay;

const Container = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
