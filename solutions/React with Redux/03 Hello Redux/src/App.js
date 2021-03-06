import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.css';
import 'materialize-css';
import { Register } from './Register';
import user from './user.json';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Dinner And A Movie</h1>
        <nav>
          <a href="home">Home</a>
          <a href="about">About</a>
          <a href="login">login</a>
          <a href="checkout">Checkout</a>
        </nav>
        <Register person={user} />
      </div>
    );
  }
}

export default App;
