import React from 'react'
import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monster : [
        {
          name : "SpiderMen",
          key : '1'
        },
        {
          name : "SuperMen",
          key : '2'

        },
        {
          name : "BikeMen",
          key : '3'
        }
      ]
    }
};
      render(){
        return(
            <div className= 'App'>
              {
                this.state.monster.map(monster => <h1 key= {monster.key}> {monster.name}  </h1>)
              }
            </div>
        );
      }
}

export default App;
