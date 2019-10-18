import React from 'react';
import logo from './logo.svg';
import './App.css';
import './pages/homepage.styles.scss';

import {Switch, Route, BrowserRouter} from 'react-router-dom';

import HomePage from './pages/homepage.component';
import Shop from './components/shop/shop.component';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/shop" component={Shop} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
