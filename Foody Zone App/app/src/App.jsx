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
    </Maincontainer>
  );
};

export default App;

const Maincontainer = styled.div`
  background-color: #323334;
  max-width: 1260px;
  margin: 0 auto;
`;
const Topcontainer = styled.div`
  display: flex;
  padding: 80px 20px 40px;
  justify-content: space-between;
  align-items: center;

  .search input[type="text"] {
    border: 2px solid red;
    background-color: transparent;
    padding: 10px;
    border-radius: 5px;
  }
  .search input[type="text"]::placeholder {
    color: white;
    font-size: 16px;
    font-weight: 400;
  }
  .search input[type="text"]:focus {
    color: white;
    font-size: 16px;
    font-weight: 400;
    outline: none;
  }
`;
