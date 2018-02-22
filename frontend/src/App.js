import React, { Component } from 'react';
import { geolocated } from 'react-geolocated';
import HomePageHeading from "./components/HomePageHeading"
import HomePageMenu from "./components/HomePageMenu";
import {Dimmer, Loader, Segment} from "semantic-ui-react";
import GeolocationNotSupportedHeader from "./components/GeolocationNotSupportedHeader";
import GeolocationNotEnabledHeader from "./components/GeoLocationNotEnabledHeader";
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      dimmerActive: true
    }

    this.handleCloseDimmer = this.handleCloseDimmer.bind(this)
  }

  handleCloseDimmer = () => this.setState({ dimmerActive: false })

  // TODO Fix constructor side-effects anti-pattern warning
  render() {
    let { dimmerActive } = this.state
    let { isGeolocationAvailable, isGeolocationEnabled, coords } = this.props;

    let locationInfo = !isGeolocationAvailable
      ? <GeolocationNotSupportedHeader />
      : !isGeolocationEnabled
        ? <GeolocationNotEnabledHeader />
        : coords
          ? dimmerActive && this.handleCloseDimmer()
          : <Loader>Getting the location data</Loader>

    return (
      <div>
        <Segment basic>
          <Dimmer.Dimmable blurring dimmed={dimmerActive}>
            <Dimmer active={dimmerActive} page>
              {locationInfo}
            </Dimmer>

            <HomePageMenu />
            <HomePageHeading />
          </Dimmer.Dimmable>
        </Segment>
      </div>
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