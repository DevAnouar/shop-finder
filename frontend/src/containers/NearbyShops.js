import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import ShopCardList from "../components/ShopCardList";
import { connect } from "react-redux";
import ShopsCountStatistic from "../components/ShopsCountStatistic";

const mapStateToProps = state => ({ shops: state.nearbyShops.shops, radiusOfSearch: state.nearbyShops.radiusOfSearch })

class ConnectedNearbyShops extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { shops, radiusOfSearch } = this.props

    return (
      <Container textAlign='center' style={{ marginTop: '2.6em' }}>
        <ShopsCountStatistic shopsCount={shops.length} radiusOfSearch={radiusOfSearch} />
        <ShopCardList shops={shops} />
      </Container>
    )
  }
}

const NearbyShops = connect(mapStateToProps)(ConnectedNearbyShops)

export default NearbyShops