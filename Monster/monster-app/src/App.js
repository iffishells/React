import React, { Component } from 'react';
import './App.css';
import {CardList} from './components/card-ist/card-list.component.jsx'


class App  extends Component {
  constructor(){
    super();
    this.state= {
      monster: [],
      searchfiled : ""
      
    }
  }

  componentDidMount()
  {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response => Response.json())
    .then(users =>this.setState({monster :users}));
    
  }
  render()
  {
    const monster = this.state.monster;
    const searchfiled = this.state.searchfiled;
  
    const Monster_filter = monster.filter(
      monster => monster.name.toLowerCase().include(searchfiled.toLocaleLowerCase())
      ) 


    
    return(
      
       <div className = 'App'>
         <input type='search'
          placeholder='Search Monster'
          onChange={e=>this.setState({searchfiled:e.target.values})}>
          
          </input>
          
          {console.log(Monster_filter)}


        <CardList monster={Monster_filter}  >
          
        </CardList>
      </div>
    );
  }

}
export default App;
