import React from 'react'
import {Route, Switch} from "react-router-dom";
import Home from "./Home";
import NearbyShops from "./NearbyShops";

const Main = () => (
  <Switch>
    <Route exact path='/' component={Home}></Route>
    <Route path='/nearby' component={NearbyShops}></Route>
  </Switch>
)

export default Main