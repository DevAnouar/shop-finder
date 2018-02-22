import React, { Component } from 'react'
import {Icon, Statistic, Transition} from "semantic-ui-react";

// TODO Implement animation on radius change
class ShopsCountStatistic extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { shopsCount, radiusOfSearch } = this.props

    return (
      <Transition animation='scale' duration={1200} transitionOnMount>
        <Statistic color='grey'>
          <Statistic.Value>
            <Icon name='shop' />
            {shopsCount}
          </Statistic.Value>
          <Statistic.Label>Shops found within {radiusOfSearch} Km</Statistic.Label>
        </Statistic>
      </Transition>
    )
  }
}

export default ShopsCountStatistic