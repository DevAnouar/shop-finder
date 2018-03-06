import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import ShopCardList from "../components/ShopCardList";
import { connect } from "react-redux";
import ShopsCountStatistic from "../components/ShopsCountStatistic";
import {getNearbyShops} from "../selectors";

const mapStateToProps = state => ({ nearbyShops: getNearbyShops(state) })

class ConnectedNearbyShops extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { shops, radiusOfSearch } = this.props.nearbyShops

    return (
      <Container textAlign='center' style={{ marginTop: '3.3em' }}>
        <ShopsCountStatistic shopsCount={shops.length} radiusOfSearch={radiusOfSearch} />
        <ShopCardList shops={shops} />
      </Container>
    )
  }
}

const NearbyShops = connect(mapStateToProps)(ConnectedNearbyShops)

export default NearbyShops