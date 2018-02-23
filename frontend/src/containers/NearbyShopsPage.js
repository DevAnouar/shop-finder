import React, { Component } from 'react'
import {Menu, Container, Segment, Statistic, Icon, Transition} from 'semantic-ui-react'
import ShopCardList from "../components/ShopCardList";
import axios from 'axios';
import NearbyShopsSearchForm from "../components/NearbyShopsSearchForm";
import {isValidRadius} from "../utils/validation";
import ShopsCountStatistic from "../components/ShopsCountStatistic";
import {connect} from "react-redux";

const mapStateToProps = state => ({ location: state.location })

class ConnectedNearbyShopsPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      radius: 0.,
      shops: [],
      inputValid: false,
      firstSearchSubmitted: false,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = (e, { value } ) => {
    this.setState({ radius: parseFloat(value), inputValid: isValidRadius(value) })
  }
  
  handleSubmit = (e, data) => {
    e.preventDefault()

    const { radius, inputValid } = this.state
    const { latitude, longitude } = this.props.location

    if ( inputValid & radius > 0 ) {
      const url = `/api/shops/@${latitude},${longitude},${radius}`

      axios.get(url)
        .then((response) => {
          this.setState({ shops: response.data, firstSearchSubmitted: true })
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if ( !isValidRadius(nextState.radius.toString()) || this.state.shops === nextState.shops ) {
      return false
    }

    return true
  }
  
  render() {
    const { shops, radius, firstSearchSubmitted } = this.state

    return (
      <Segment basic>
        <Menu fixed='top' size='mini' borderless>
          <Menu.Item>
            <NearbyShopsSearchForm onSubmit={this.handleSubmit}
                                   size='small'
                                   action={{ color: 'teal', content: 'Search', size: 'small' }}
                                   onChange={this.handleChange}
                                   style={{ width: '103%' }} />
          </Menu.Item>
        </Menu>

        <Container textAlign='center' style={{ marginTop: '3.75em' }}>
          { firstSearchSubmitted &&
            <ShopsCountStatistic shopsCount={shops.length} radiusOfSearch={radius} />
          }
          <ShopCardList shops={shops} />
        </Container>
      </Segment>
    )
  }
}

const NearbyShopsPage = connect(mapStateToProps)(ConnectedNearbyShopsPage)

export default NearbyShopsPage