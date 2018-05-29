import React, { Component } from 'react';
import './App.css';
import UserInput from './Input.js';
import UserOutput from './Output.js';

class App extends Component {
  state = {
    user : {
      username : 'Maria'
    }
  }

  changeState = (event)=> {
    this.setState({
        user: {
          username : event.target.value
        }
      })
  }

  render() {

    return (
      <div className="App">
        <UserInput
          inputChanged = {this.changeState} 
          username = {this.state.user.username}/>
        <UserOutput
          username="Jesus"/>
        <UserOutput username={this.state.user.username}/>
        
      </div>
    );
  }
}

export default App;
