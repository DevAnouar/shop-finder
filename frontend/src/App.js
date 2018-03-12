import React, { Component } from 'react';
import { geolocated } from 'react-geolocated';
import {Dimmer, Loader, Segment} from "semantic-ui-react";
import GeolocationNotSupportedHeader from "./components/GeolocationNotSupportedHeader";
import GeolocationNotEnabledHeader from "./components/GeoLocationNotEnabledHeader";
import './App.css';
import {setUserLocation} from "./actions";
import {connect} from "react-redux";
import {precisionRound} from "./utils/index";
import NavMenu from "./components/NavMenu";
import Main from "./containers/Main";

const mapDispatchToProps = dispatch => ({ setUserLocation: (latitude, longitude) => dispatch(setUserLocation(latitude, longitude)) })

class ConnectedApp extends Component {

  constructor(props) {
    super(props)

    this.state = {
      dimmerActive: true
    }

    this.handleCloseDimmer = this.handleCloseDimmer.bind(this)
  }

  handleCloseDimmer = () => this.setState({ dimmerActive: false })

  componentWillReceiveProps(nextProps) {
    const { isGeolocationAvailable, isGeolocationEnabled, coords, setUserLocation } = nextProps
    const { dimmerActive } = this.state
    if (isGeolocationAvailable && isGeolocationEnabled && coords && dimmerActive) {
      setUserLocation(precisionRound(coords.latitude, 7), precisionRound(coords.longitude, 7)) &&
      this.handleCloseDimmer()
    }
  }

  render() {
    const { dimmerActive } = this.state
    const { isGeolocationAvailable, isGeolocationEnabled, coords } = this.props;

    const locationInfo = !isGeolocationAvailable ?
      <GeolocationNotSupportedHeader />
      : !isGeolocationEnabled ?
        <GeolocationNotEnabledHeader />
        : !coords &&
        <Loader>Getting the location data</Loader>

    return (
      <div>
        <Segment basic>
          <Dimmer.Dimmable blurring dimmed={dimmerActive}>
            <Dimmer active={dimmerActive} page>
              {locationInfo}
            </Dimmer>

            <NavMenu />
            <Main />
          </Dimmer.Dimmable>
        </Segment>
      </div>
    )
  }
}

const App = connect(null, mapDispatchToProps)(ConnectedApp)

export default geolocated({
  positionOptions: {
    enableHighAccuracy: true,
    maximumAge: 0
  },
  userDecisionTimeout: null,
  geolocationProvider: navigator.geolocation
})(App)