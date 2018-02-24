import React, { Component } from 'react'
import {Form} from "semantic-ui-react";
import RadiusOfSearchInput from "./RadiusOfSearchInput";
import {isValidRadius} from "../utils/validation";
import axios from "axios/index";
import {connect} from "react-redux";
import {setNearbyShops} from "../actions";

const mapStateToProps = state => ({ location: state.location })
const mapDispatchToProps = dispatch => ({ setNearbyShops: nearbyShops => dispatch(setNearbyShops(nearbyShops)) })

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
    const { latitude, longitude } = this.props.location
    const { setNearbyShops } = this.props

    if ( isValidRadius(radiusInput) ) {
      const radius = parseFloat(radiusInput)

      if ( radius > 0 ) {
        const url = `/api/shops/@${latitude},${longitude},${radiusInput}`

        axios.get(url)
          .then((response) => {
            setNearbyShops(response.data)
          }).catch((error) => {
          console.log(error)
        })
      }
    }
  }

  render() {
    const {size, action, style, fluid} = this.props

    return (
      <Form onSubmit={this.handleSubmit}>
        <RadiusOfSearchInput size={size}
                             action={action}
                             onChange={this.handleChange}
                             style={style}
                             fluid={fluid} />
      </Form>
    )
  }
}

const NearbyShopsSearchForm = connect(mapStateToProps, mapDispatchToProps)(ConnectedNearbyShopsSearchForm)

export default NearbyShopsSearchForm