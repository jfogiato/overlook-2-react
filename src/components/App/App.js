import './App.css';
import React, { Component } from 'react';
import LoginPage from '../LoginPage/LoginPage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: "",
    }
  }

  render() {
    return (
      <main className='App'>
        <LoginPage />
      </main>
    );
  }
}

export default App;
