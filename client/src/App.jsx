import './App.css';
import React from 'react';
import { Router, Redirect } from "@reach/router";
import Main from './components/Main';
import Other from './components/Other';

function App() {
  return (
  
    <Router>  
      <Main path="/"/>
      <Other path="/doit"/>
    </Router>
  )
}

export default App;
