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
          <Link to="/">Main</Link>
          <Link to="/first">First</Link>
          <Link to="/second">Second</Link>
          <Route path="/" exact render={() => <h1>React router test</h1>}/>
          <Route path="/first" component={First}/>
          <Route path="/second" component={Second}/>
          {/*
          Route
          path - путь соответствия (содержит путь) "/" - содержится во всех роутах, поэтому нужен exact
          exact - тогда роут будет сравниваться полностью
          component - комопнент, который будет показан
          render - может принять сразу JSX для отображения
          */}
        </header>
      </div>
    </Router>
  );
}

export default App;
