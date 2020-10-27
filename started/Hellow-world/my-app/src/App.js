import React from 'react'
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monster : []
    }

};
  componetDidMount()
  {

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => console.log(response))
  }
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
