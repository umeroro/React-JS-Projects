import './App.css';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className='twitterSignup-Box'>
          <img src='./twitter-icon.svg' alt='twitter-logo' />
          <h2>Sign in to Twitter</h2>
          <div>
            <button className='SignBtn'><img src='./google-icon.svg' alt='google-logo'/>Sign in with Google</button>
          </div>
          <div>
            <button className='SignBtn'><img src='./apple-icon.svg' alt='google-logo'/>Sign in with Apple</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
