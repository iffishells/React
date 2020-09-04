import React from 'react';
import './App.css';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            monstars: []
        };
    };

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ monstars: users }))
    }

    render() {
        return ( <
            div className = 'APP' > {
                this.state.monstars.map(monstars => ( <
                    h1 key = { monstars.id } > { monstars.name } < /h1>
                ))
            } <
            /div>
        )
    }
};
export default App;