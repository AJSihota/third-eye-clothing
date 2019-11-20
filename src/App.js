import React from 'react';
import logo from './logo.svg';
import './App.css';
import './pages/homepage.styles.scss';

import {Switch, Route, BrowserRouter} from 'react-router-dom';

import HomePage from './pages/homepage.component';
import Shop from './components/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-signup/sign-in-and-signup.component';

function App() {
  return (
    <BrowserRouter>
    <div>
    <Header/>
      <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/shop" component={Shop} />
      <Route path="/sign-in" component={SignInAndSignUpPage} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
