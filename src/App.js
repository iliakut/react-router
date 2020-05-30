import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import First from "./components/first";
import Second from "./components/second";
import Third from "./components/third";
import ThirdItem from "./components/thirdItem";
import Fourth from "./components/fourth";
import SecretPage from "./components/secretPage";

function App() {
  const [isLoggedIn, toggleLoggedIn] = useState(false);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Link to="/">Main</Link>
          <Link to="/first">First</Link>
          <Link to="/second">Second</Link>
          <Link to="/third/">Third</Link> {/* "/" - в конце, чтобы работали относительные пути */}
          <Link to="/fourth/">Fourth</Link>
          <Link to="/secret">Secret</Link>

          <Switch>
            {/*
              Route
              path - путь соответствия (содержит путь) "/" - содержится во всех роутах, поэтому нужен exact
              exact - тогда роут будет сравниваться полностью
              component - комопнент, который будет показан
              render - может принять сразу JSX для отображения

              Switch - будет последовательно перебирать роуты пока не найдет соответствующий
              при этом из двух комопнентов с одинаковым роутом (в случае со Switch)
              будет отрисован только первый по списку
              Switch позволяет создать роут, который будет срабатывать, если нет ни одного совпадения
              404 например или редирект на главную
            */}
            <Route path="/" exact render={() => <h1>React router test</h1>}/>
            <Route path="/first" component={First}/>
            <Route path="/first" render={() => <p>one more first</p>}/>
            <Route path="/second" component={Second}/>
            <Route path="/third/" component={Third}/>
            <Route path="/third/:id" render={({match, location, history}) => {
              /*
              * match - содержит переданные параметры (id)
              * location - текущее состояние роутера (положение, страница)
              * history - для программного перехода между роутами
              */
              console.log(match);
              console.log(location);
              console.log(history);
              const { id }  = match.params;
              return <ThirdItem id={id}/>
            }}/>
            <Route path="/fourth/:id?" component={Fourth}/> {/* ":id?" - опциональный путь, работает как с id так и без */}
            {/*<Redirect to="/"/> - сработает, если ни один из роутов не сработал - отправит нас на главную */}
            <Route render={() => <h1>404</h1>}/>
          </Switch>

          {/* secret page */}
          <div style={{marginTop: '50px'}}>
            <button onClick={() => toggleLoggedIn(!isLoggedIn)}>
              {
                isLoggedIn ? "Logout" : "Login"
              }
            </button>
          </div>
          <Route path="/secret" render={() => <SecretPage isLoggedIn={isLoggedIn}/>}/>
        </header>
      </div>
    </Router>
  );
}

export default App;
