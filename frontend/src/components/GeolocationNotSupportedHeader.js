import React from 'react'
import {Header, Icon} from "semantic-ui-react";

const GeolocationNotSupportedHeader = () => (
  <Header as='h2' icon inverted>
    <Icon name='warning sign' />
    Your browser does not support Geolocation!
  </Header>
)

export default GeolocationNotSupportedHeader