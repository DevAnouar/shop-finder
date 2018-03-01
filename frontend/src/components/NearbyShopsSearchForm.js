import React, { Component } from 'react'
import {Form} from "semantic-ui-react";
import RadiusOfSearchInput from "./RadiusOfSearchInput";
import {isValidRadius} from "../utils";
import axios from "axios/index";
import {connect} from "react-redux";
import {setNearbyShops} from "../actions";
import {bindActionCreators} from "redux";
import {getUserLocation} from "../selectors";

const mapStateToProps = state => ({ userLocation: getUserLocation(state) })
const mapDispatchToProps = dispatch => bindActionCreators({
  setNearbyShops: nearbyShops => setNearbyShops(nearbyShops)/*,
  goToNearbyShops: (latitude, longitude, radius) => push(`/nearby/@${latitude},${longitude},${radius}`)*/
}, dispatch)

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
    const { setNearbyShops, goToNearbyShops } = this.props

    if ( isValidRadius(radiusInput) ) {
      const radius = parseFloat(radiusInput)

      if ( radius > 0 ) {
        const url = `/api/shops/@${latitude},${longitude},${radiusInput}`

        axios.get(url)
          .then((response) => {
            setNearbyShops({ shops: response.data, radiusOfSearch: radius })
            //goToNearbyShops(latitude, longitude, radiusInput)
          }).catch((error) => {
          console.log(error)
        })
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