import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      hello: "Hello React!"
    }
  }

  componentDidMount() {
    fetch("/hello")
      .then(function (response) {
        return response.text();
      })
      .then((text) => {
        this.setState({hello: text})
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>{this.state.hello}</p>
      </div>
    );
  }
}

export default App;
