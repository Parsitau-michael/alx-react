import logo from './logo.jpg';
import { getFullYear, getFooterCopy } from './utils';
import './App.css';

function App() {
  return (    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>        
      </header>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <form>
          <div>
            <label htmlFor="email">Email: </label>
            <input type="email" id="email" name="email"></input>
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input type="password" id="password" name="password"></input>
          </div>          
          <button type="submit">OK</button>
        </form>                      
      </div>
      <footer className="App-footer">        
        <p>Copyright {getFullYear()} - {getFooterCopy()}</p>        
      </footer>
    </div>    
  );
}

export default App;
