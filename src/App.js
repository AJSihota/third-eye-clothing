import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import './pages/homepage.styles.scss';

import {Switch, Route, BrowserRouter} from 'react-router-dom';

import HomePage from './pages/homepage.component';
import Shop from './components/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-signup/sign-in-and-signup.component';

import auth from './firebase/firebase.utils';
import firebase from './firebase/firebase.utils';


class App extends Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  componentDidMount() {
      // auth.onAuthStateChanged(user => {
      //   this.setState({currentUser: user});
      //   console.log(user);
      // })

      firebase.auth().onAuthStateChanged(user => {
        this.setState({currentUser: user});
        console.log(user);
      })
  }

  render() { 
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
}

export default App;
