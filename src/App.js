import React from 'react';
import './App.css';
import Loginform from './components/login';
import Home from './components/home';

import { Routes, Route } from 'react-router-dom'

import Signin from './components/signin';

function App() {
  return(
    <div className='page'>
    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/login" element={<Loginform/>}/>
      <Route path="/" element={<Signin/>}/>
    </Routes>
      {/* <Loginform/> */}
    </div>
  )
  }

export default App;

