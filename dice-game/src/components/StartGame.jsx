import styled from "styled-components";

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div className="image">
        <img src="/images/dices.png" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  height: 560px;
  column-gap: 30px;

  .content h1 {
    font-size: 96px;
    white-space: nowrap;
  }
  .image img {
    width: 400px;
  }
`;
const Button = styled.button`
  background-color: black;
  color: white;
  padding: 10px 50px;
  border-radius: 5px;
  border: none;
  font-size: 16px;
  transition: 0.3s background ease-in;
  cursor: pointer;

  &:hover {
    background-color: #383838;
    transition: 0.3s background ease-in;
  }
`;
