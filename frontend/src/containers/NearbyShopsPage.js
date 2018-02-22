import React, { Component } from 'react'
import {Menu, Container, Segment, Statistic, Icon, Transition} from 'semantic-ui-react'
import ShopCardList from "../components/ShopCardList";
import axios from 'axios';
import NearbyShopsSearchForm from "../components/NearbyShopsSearchForm";
import {isValidRadius} from "../utils";
import ShopsCountStatistic from "../components/ShopsCountStatistic";

class NearbyShopsPage extends Component {
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
    console.log(data)
    const { radius, inputValid } = this.state

    if ( inputValid & radius > 0 ) {
      const url = `/api/shops/@33.846978,-6.775816,${radius}`

      axios.get(url)
        .then((response) => {
          this.setState({ shops: response.data, firstSearchSubmitted: true })
        })
        .catch((error) => {
          console.log(error)
        })
    }

    e.preventDefault()
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
        <Menu fixed='top' size='huge' borderless>
          <Menu.Item>
            <NearbyShopsSearchForm onSubmit={this.handleSubmit}
                                   size='large'
                                   action={{ color: 'teal', content: 'Search', size: 'small' }}
                                   onChange={this.handleChange}
                                   style={{ width: '17.5em' }} />
          </Menu.Item>
        </Menu>

        <Container textAlign='center' style={{ marginTop: '5.5em' }}>
          { firstSearchSubmitted &&
            <ShopsCountStatistic shopsCount={shops.length} radiusOfSearch={radius} />
          }
          <ShopCardList shops={shops} />
        </Container>
      </Segment>
    )
  }
}

export default NearbyShopsPage