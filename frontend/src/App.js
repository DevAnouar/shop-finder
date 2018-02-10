import React, { Component } from 'react';
import { geolocated } from 'react-geolocated';
import axios from 'axios';
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
    axios.get("/hello")
      .then((response) => {
        this.setState({hello: response.data})
      })
      .catch((error) => {
        console.log(error)
      });
  }

  render() {
    var locationParagraph = !this.props.isGeolocationAvailable
      ? <p>Your browser does not support Geolocation</p>
      : !this.props.isGeolocationEnabled
        ? <p>Geolocation is not enabled</p>
        : this.props.coords
          ? <p>{this.props.coords.latitude}, {this.props.coords.longitude}</p>
          : <p>Getting the location data&hellip;</p>;

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
        {locationParagraph}
      </div>
    );
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: true,
  },
  userDecisionTimeout: 5000,
})(App);