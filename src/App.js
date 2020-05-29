import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import First from "./components/first";
import Second from "./components/second";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Link to="/first">First</Link>
          <Link to="/second">Second</Link>
          <Route path="/first" component={First}/>
          <Route path="/second" component={Second}/>
        </header>
      </div>
    </Router>
  );
}

export default App;
