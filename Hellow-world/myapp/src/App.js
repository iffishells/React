import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      string: "Hi! iffishells"
    }
  }
  render() {
    return (<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <h1>
          {this.state.string}
        </h1>
          <button onClick  = { ()=>this.setState({
              string : "change to iffikhar"
            })}>change
          </button>
      </header>
    </div>)
  }

}
export default App;
