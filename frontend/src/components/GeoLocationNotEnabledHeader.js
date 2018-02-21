import React from 'react'
import {Header, Icon} from "semantic-ui-react";

const GeolocationNotEnabledHeader = () => (
  <Header as='h2' icon inverted>
    <Icon name='marker' />
    Geolocation is not enabled!
  </Header>
)

export default GeolocationNotEnabledHeader