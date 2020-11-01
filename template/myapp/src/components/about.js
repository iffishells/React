import React from 'react'

class About extends React.Component{

    constructor(){
  
        super();
        this.state= {
          name : "Muhammad iftikhar",
          age : "My age is 22",
          city : "jhelum"
        }
      };
      
      componentDidMount()
      {
        console.log("Component did mount has been call now");
      }
      componentDidUpdate()
      {
        console.log("compoent did update");
      };
    


    render(){

        return(

        <div>

            
            <h1>{this.state.name}</h1>
            
            
            <button onClick= { ()=> this.setState({
                name : "Muhammad zain"
            }) }>
                click 
            </button>

        </div>
        )
    }

}

export default About;