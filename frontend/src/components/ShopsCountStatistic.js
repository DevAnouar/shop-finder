import React, { Component } from 'react'
import {Icon, Statistic, Transition} from "semantic-ui-react";
import {connect} from "react-redux";
import {getPage} from "../selectors";

const mapStateToProps = state => ({
  page: getPage(state)
})

class ConnectedShopsCountStatistic extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { shopsCount, radiusOfSearch, page } = this.props

    return (
      <Transition animation='scale' duration={500} transitionOnMount>
        <Statistic color='grey'>
          <Statistic.Value>
            <Icon name='shop' />
            {shopsCount}
          </Statistic.Value>
          <Statistic.Label>
            {page === 'NearbyShops' ?
              `Shop${shopsCount === 1 ? '' : 's'} found within ${radiusOfSearch} Km`
              : page === 'PreferredShops' &&
              `Preferred shop${shopsCount === 1 ? '' : 's'}`
            }
          </Statistic.Label>
        </Statistic>
      </Transition>
    )
  }
}

const ShopsCountStatistic = connect(mapStateToProps)(ConnectedShopsCountStatistic)

export default ShopsCountStatistic