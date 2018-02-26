import React, { Component } from 'react';
import { geolocated } from 'react-geolocated';
import {Dimmer, Loader, Segment} from "semantic-ui-react";
import GeolocationNotSupportedHeader from "./components/GeolocationNotSupportedHeader";
import GeolocationNotEnabledHeader from "./components/GeoLocationNotEnabledHeader";
import './App.css';
import {setUserLocation} from "./actions";
import {connect} from "react-redux";
import {precisionRound} from "./utils/validation";
import NavMenu from "./components/NavMenu";
import Main from "./containers/Main";

const mapDispatchToProps = dispatch => ({ setUserLocation: userLocation => dispatch(setUserLocation(userLocation)) })

class ConnectedApp extends Component {

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
    const { dimmerActive } = this.state
    const { isGeolocationAvailable, isGeolocationEnabled, coords, setUserLocation } = this.props;

    const locationInfo = !isGeolocationAvailable
      ? <GeolocationNotSupportedHeader />
      : !isGeolocationEnabled
        ? <GeolocationNotEnabledHeader />
        : coords
          ? dimmerActive &&
            setUserLocation({ latitude: precisionRound(coords.latitude, 7), longitude: precisionRound(coords.longitude, 7) }) &&
            this.handleCloseDimmer()
          : <Loader>Getting the location data</Loader>

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