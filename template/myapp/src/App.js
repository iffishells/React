import './App.css';
import React from 'react';
import About from './components/about';
class App extends React.Component{

 
  render(){


    return(
      <div className="App">
        <img id="cover-images" src = "/images/cover-pic.jpg" alt="cvoer"/>
        <h1> from app.js components</h1>
        <About/>
      </div>
      

      
    )
  }

}

export default App;
