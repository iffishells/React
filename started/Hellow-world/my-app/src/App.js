import React from 'react'
import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state = {
      fname : "Muhammad",
      lname : "iftikhar",
      dob : "1998/9/3"
    }
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button onClick= {() => this.setState({lname : "ifti"})}> Show your self </button>
          <p><h1>{ this.state.fname } </h1>
          <h1>{this.state.lname} </h1>
          <h1> {this.state.dob} </h1>
          <h1>now updated </h1> </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
export default App;
