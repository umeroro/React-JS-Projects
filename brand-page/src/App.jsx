import "./App.css";

const App = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="logo-div">
          <a href="#">
            <img src="brand_logo.png" alt="logo" />
          </a>
        </div>
        <div className="menu-div">
          <ul className="menu-nav">
            <li>
              <a href="#">Menu</a>
            </li>
            <li>
              <a href="#">Location</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="button-div">
          <a href="#">
            <button>Login</button>
          </a>
        </div>
      </div>
      <div className="container-1">
        <div className="section-1">
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
          <div className="section-1-btn">
            <a href="#">
              <button className="shop-button">Shop Now</button>
            </a>
            <a href="#">
              <button className="cat-button">Category</button>
            </a>
          </div>
          <p>Also Available On</p>
          <div>
            <a href="#" className="flip-img">
              <img src="flipkart.png" />
            </a>
            <a href="#" className="ama-img">
              <img src="amazon.png" />
            </a>
          </div>
        </div>
        <div className="section-2">
          <img src="shoe_image.png" alt="shoe image" />
        </div>
      </div>
    </div>
  );
};

export default App;
