import React, { useState } from 'react'
import './App.css'
import Login from './pages/Login'
import Principal from './pages/Principal'
import auth from './services/auth'

function App() {

  return (auth.isAuthenticated() ? <Principal/> : <Login/>);
}

export default App
