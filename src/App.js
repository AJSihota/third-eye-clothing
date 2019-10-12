import React from 'react';
import logo from './logo.svg';
import './App.css';
import './pages/homepage.styles.scss';

import {Switch, Route, BrowserRouter} from 'react-router-dom';

import HomePage from './pages/homepage.component';

const HatsPage = () => {
  return(
<div>
  <h1>HATS PAGE</h1>
</div>
)}

function App() {
  return (
    <BrowserRouter>
    <div>
      <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/hats" component={HatsPage} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
