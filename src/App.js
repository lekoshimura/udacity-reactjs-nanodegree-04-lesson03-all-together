import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatWindow from "./ChatWindow";

/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/

class App extends Component {
  state = {
    users: [{ username: 'Amy' }, { username: 'John' }],
    messages: []
  };

  onSubmitCallback = (user, text) => {
    this.setState((currentState) => ({
      messages: [...currentState.messages, {
        username: user.username,
        text: text
      }]
    }));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          <ChatWindow
            user={this.state.users[0]}
            messages={this.state.messages}
            onSubmitCallback={this.onSubmitCallback}
          />
          <ChatWindow
            user={this.state.users[1]}
            messages={this.state.messages}
            onSubmitCallback={this.onSubmitCallback}
          />
        </div>
      </div>
    );
  }
}

export default App;
