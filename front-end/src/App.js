import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, NavLink } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import { RegisterForm, LoginForm } from './components/Auth';
import { Slayers, SlayersForm } from './components/Slayers';
import { Vampires, VampireForm } from './components/Vampires';

function App() {
  // ========== STATE ==========
  const [vampires, setVampires] = useState([])
  const [slayers, setSlayers] = useState([])
  const [cantFind, setCantFind] = useState([])


  // ========== FUNCTIONS ==========
  useEffect(() => {
    axios.get('http://localhost:8001/vampires', {
      headers: {
        authorization: localStorage.getItem('token')
      }
    })
      .then(res => {
        setVampires(res.data)
      })
      .catch(err => {
        console.error("Cant find vampires", err)
        axios.get('http://localhost:8000')
          .then(res => {
            console.log(res)
            setCantFind(res.data)
          })
          .catch(err => {
            console.error("Cant find data", err)
          })
      })

    axios.get('http://localhost:8001/slayers')
      .then(res => {
        setSlayers(res.data)
      })
      .catch(err => {
        console.error("Cant find slayers", err)
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
      <Route exact path='/' >
        <LoginForm />
      </Route>
      <Route path='/register' >
        <RegisterForm />
      </Route>
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
      {cantFind ? cantFind.map(element => {
        return <div key={element.id}>
          <strong>{element.name}</strong>
          <i>{element.description}</i>
          <ul>{element.price}</ul>
        </div>
      }) : null}
    </div>
  );
}

export default App;
