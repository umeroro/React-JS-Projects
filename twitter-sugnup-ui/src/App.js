import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="twitterSignup-Box">
          <img src="./twitter-icon.svg" alt="twitter-logo" className="logo" />
          <h2>Sign in to Twitter</h2>
          <div className="buttonsDiv">
            <button className="SignBtn">
              <img src="./google-icon.svg" alt="google-logo" />
              Sign in with Google
            </button>
          </div>
          <div className="buttonsDiv">
            <button className="SignBtn">
              <img src="./apple-icon.svg" alt="google-logo" />
              Sign in with Apple
            </button>
          </div>
          <div className="and">
            <div>
              <div className="divider"></div>
            </div>
            <div className="or">or</div>
            <div>
              <div className="divider"></div>
            </div>
          </div>
          <input
            type="text"
            placeholder="Phone, email address, or username"
            className="inputtext"
          />
          <div className="buttonsDiv">
            <button className="SignBtn nextBtn">Next</button>
          </div>
          <div className="buttonsDiv">
            <button className="SignBtn forgetBtn">Forget password?</button>
          </div>
          <p className="acountConf">
            Don’t have an account? <a href="localhost:3000">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
