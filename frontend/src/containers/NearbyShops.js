import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import ShopCardList from "../components/ShopCardList";
import { connect } from "react-redux";

const mapStateToProps = state => ({ shops: state.nearbyShops })

class ConnectedNearbyShops extends Component {
  constructor(props) {
    super(props)
  }

  //TODO Add Statistic
  render() {
    const { shops } = this.props

    return (
      <Container textAlign='center' style={{ marginTop: '4.5em' }}>
        <ShopCardList shops={shops} />
      </Container>
    )
  }
}

const NearbyShops = connect(mapStateToProps)(ConnectedNearbyShops)

export default NearbyShops