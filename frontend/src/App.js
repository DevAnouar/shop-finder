import React, { Component } from 'react';
import { geolocated } from 'react-geolocated';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import ShopCardList from "./components/ShopCardList";
import HomePageHeading from "./components/HomePageHeading"
import HomePageMenu from "./components/HomePageMenu";
import {Dimmer, Loader, Segment} from "semantic-ui-react";
import GeolocationNotSupportedHeader from "./components/GeolocationNotSupportedHeader";
import GeolocationNotEnabledHeader from "./components/GeoLocationNotEnabledHeader";

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      dimmerActive: true,
      hello: "Hello React!",
      shops: [
        { name: "Adornica", picture: "http://placehold.it/150x150" },
        { name: "Illumity", picture: "http://placehold.it/150x150" },
        { name: "Corporana", picture: "http://placehold.it/150x150" },
        { name: "Viasia", picture: "http://placehold.it/150x150" },
        { name: "Ultrasure", picture: "http://placehold.it/150x150" },
        { name: "Everest", picture: "http://placehold.it/150x150" },
        { name: "Sultrax", picture: "http://placehold.it/150x150" },
        { name: "Sultrax", picture: "http://placehold.it/150x150" }
      ]
    }
  }

  componentDidMount() {
    axios.get("/hello")
      .then((response) => {
        this.setState({hello: response.data})
      })
      .catch((error) => {
        console.log(error)
      })
  }

  /*
  render() {
    var locationParagraph = !this.props.isGeolocationAvailable
      ? <p>Your browser does not support Geolocation</p>
      : !this.props.isGeolocationEnabled
        ? <p>Geolocation is not enabled</p>
        : this.props.coords
          ? <p>{this.props.coords.latitude}, {this.props.coords.longitude}</p>
          : <p>Getting the location data&hellip;</p>

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
        <ShopCardList shops={this.state.shops}/>
      </div>
    )
  }*/

  handleCloseDimmer = () => this.setState({ dimmerActive: false })

  render() {
    let { dimmerActive } = this.state
    let { isGeolocationAvailable, isGeolocationEnabled, coords } = this.props;

    let locationInfo = !isGeolocationAvailable
      ? <GeolocationNotSupportedHeader />
      : !isGeolocationEnabled
        ? <GeolocationNotEnabledHeader />
        : coords
          ? dimmerActive ? this.handleCloseDimmer() : null
          : <Loader>Getting the location data</Loader>

    return (
      <Dimmer.Dimmable as='div' blurring dimmed={dimmerActive}>
        <Dimmer active={dimmerActive} page>
          {locationInfo}
        </Dimmer>

        <HomePageMenu />
        <HomePageHeading />
      </Dimmer.Dimmable>
    )
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: true,
    maximumAge: 0
  },
  userDecisionTimeout: null,
  geolocationProvider: navigator.geolocation
})(App)