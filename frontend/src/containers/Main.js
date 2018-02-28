import React from 'react'
import {Route, Switch} from "react-router-dom";
import Home from "./Home";
import NearbyShops from "./NearbyShops";
import {connect} from "react-redux";
import {getLocation} from "react-router-redux";

const ConnectedSwitch = connect(state => ({
  location: getLocation(state)
}))(Switch)

const MainContainer = () => (
  <ConnectedSwitch>
    <Route exact path='/' component={Home} />
    <Route path='/nearby' component={NearbyShops} />
  </ConnectedSwitch>
)

const Main = connect(state => ({
  location: getLocation(state)
}))(MainContainer)

export default Main