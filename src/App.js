import React from 'react';
import './App.css';
import LoginPage from './pages/login';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import IndexPage from './pages';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={IndexPage}></Route>
          <Route exact path="/login" component={LoginPage}></Route>
        </Switch>
      </BrowserRouter>      
    </div>
  );
}

export default App;
