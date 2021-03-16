import { Route, NavLink } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import { Slayers } from './components/Slayers';
import { Vampires } from './components/Vampires';

function App() {
  return (
    <div className="app-container">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <h1>Fantasy API</h1>
          <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/slayers'>Slayers</NavLink></li>
            <li><NavLink to='/vampires'>Vampires</NavLink></li>
          </ul>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Route path='/vampires' component={Vampires} />
      <Route path='/slayers' component={Slayers} />
    </div>
  );
}

export default App;
