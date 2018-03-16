import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import ShopCardList from "../components/ShopCardList";
import { connect } from "react-redux";
import {getPreferredShops} from "../selectors";
import ShopsCountStatistic from "../components/ShopsCountStatistic";

const mapStateToProps = state => ({ preferredShops: getPreferredShops(state) })

class ConnectedPreferredShops extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const preferredShops = this.props.preferredShops

    return (
      <Container textAlign='center' style={{ marginTop: '3.8em' }}>
        <ShopsCountStatistic shopsCount={preferredShops.length} />
        <ShopCardList shops={preferredShops} />
      </Container>
    )
  }
}

const PreferredShops = connect(mapStateToProps)(ConnectedPreferredShops)

export default PreferredShops