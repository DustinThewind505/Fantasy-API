import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, NavLink } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import { Slayers, SlayersForm } from './components/Slayers';
import { Vampires, VampireForm } from './components/Vampires';

function App() {
  // ========== STATE ==========
  const [vampires, setVampires] = useState([])
  const [slayers, setSlayers] = useState([])


  // ========== FUNCTIONS ==========
  useEffect(() => {
    axios.get('http://localhost:8001/vampires')
      .then(res => {
        setVampires(res.data)
      })
      .catch(err => {
        console.log(err)
      })

    axios.get('http://localhost:8001/slayers')
      .then(res => {
        setSlayers(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])



  // ========== COMPONENT ==========
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
      <Route exact path='/vampires' >
        <Vampires vampires={vampires} setVampires={setVampires} />
      </Route>
      <Route path='/vampires/:id'>
        <VampireForm vampires={vampires} setVampires={setVampires} />
      </Route>
      <Route exact path='/slayers' >
        <Slayers vampires={vampires} slayers={slayers} setSlayers={setSlayers} />
      </Route>
      <Route exact path='/slayers/:id' >
        <SlayersForm vampires={vampires} slayers={slayers} setSlayers={setSlayers} />
      </Route>
    </div>
  );
}

export default App;
