import React, { Component } from 'react'
import {Form} from "semantic-ui-react";
import RadiusOfSearchInput from "./RadiusOfSearchInput";
import {isValidRadius} from "../utils";
import {connect} from "react-redux";
import {getUserLocation} from "../selectors";
import {NEARBY_SHOPS} from "../constants/action-types";

const mapStateToProps = state => ({ userLocation: getUserLocation(state) })
const mapDispatchToProps = dispatch => ({
  goToNearbyShops: (centerLatitude, centerLongitude, radius) =>
    dispatch({
      type: NEARBY_SHOPS,
      payload: {
        perimeter: `@${centerLatitude},${centerLongitude},${radius}`
      }
    })
})

class ConnectedNearbyShopsSearchForm extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      radiusInput: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e, { value }) {
    this.setState({ radiusInput: value })
  }

  handleSubmit(e, data) {
    e.preventDefault()

    const { radiusInput } = this.state
    const { latitude, longitude } = this.props.userLocation
    const { goToNearbyShops } = this.props

    if ( isValidRadius(radiusInput) ) {
      const radius = parseFloat(radiusInput)
      if ( radius > 0 ) {
        goToNearbyShops(latitude, longitude, radiusInput)
      }
    }
  }

  render() {
    const {size, action, value, style, fluid} = this.props

    return (
      <Form onSubmit={this.handleSubmit}>
        <RadiusOfSearchInput size={size}
                             action={action}
                             value={value}
                             onChange={this.handleChange}
                             style={style}
                             fluid={fluid} />
      </Form>
    )
  }
}

const NearbyShopsSearchForm = connect(mapStateToProps, mapDispatchToProps)(ConnectedNearbyShopsSearchForm)

export default NearbyShopsSearchForm