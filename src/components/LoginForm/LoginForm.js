import React, { Component } from 'react';
import './LoginForm.css';

export default class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    }
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name] : target.value });
  }

  render() {
    return (
      <form className="login-form">
        <label for="userName">Username.</label>
        <input 
          type="text"
          name="username"
          placeholder="Enter Username."
          required
          onChange={this.handleChange}
          value={this.state.username}
        />
        <label for="password">Password.</label>
        <input
          type="password"
          name="password"
          placeholder="Enter Password."
          required
          onChange={this.handleChange}
          value={this.state.password}
        />
        <button type="submit">Login.</button>
      </form>
    );
  }
}