import styled from "styled-components";

const App = () => {
  return (
    <Maincontainer>
      <Topcontainer>
        <div className="logo">
          <img src="logo.svg" alt="site logo" />
        </div>
        <div className="search">
          <input type="text" placeholder="Search Food..." />
        </div>
      </Topcontainer>
      <Filtercontainer>
        <Button>All</Button>
        <Button>Breakfast</Button>
        <Button>Lunch</Button>
        <Button>Dinner</Button>
      </Filtercontainer>
      <Foodcardcontainer>
        <FoodCards>
          <div></div>
          <div></div>
          <div></div>
        </FoodCards>
      </Foodcardcontainer>
    </Maincontainer>
  );
};

export default App;

const Maincontainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
const Topcontainer = styled.div`
  display: flex;
  padding: 80px 20px 40px;
  justify-content: space-between;
  align-items: center;

  .search {
    input{
      background-color: transparent;
      border: 2px solid red;
      border-radius: 5px;
      color: white;
      font-size: 16px;
      font-weight: 400;
      padding: 10px;
    }
    input::placeholder{
      color: white;
    }
  }
`;
const Filtercontainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding-bottom: 40px;
`;
const Button = styled.button`
  background-color: #ff4343;
  border-radius: 5px;
  padding: 6px 12px;
  color: white;
  border: none;
  cursor: pointer;
`;
const Foodcardcontainer = styled.section`
  min-height: 69.5vh;
  background-image: url("bg.png");
  background-repeat: no-repeat;
  background-size: cover;
`;
const FoodCards = styled.div``;