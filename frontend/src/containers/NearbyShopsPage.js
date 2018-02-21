import React, { Component } from 'react'
import {Menu, Container, Segment} from 'semantic-ui-react'
import ShopCardList from "../components/ShopCardList";
import axios from 'axios';
import NearbyShopsSearchForm from "../components/NearbyShopsSearchForm";
import {radiusOfSearchRegex} from "../utils";

class NearbyShopsPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      radius: '',
      radiusValid: false,
      shops: []
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = (e, { value } ) => {
    if ( radiusOfSearchRegex.test(value) ) {
      this.setState({
        radius: value,
        radiusValid: true
      })
    } else {
      this.setState({
        radiusValid: false
      })
    }
  }
  
  handleSubmit = (e, data) => {
    e.preventDefault()

    const { radiusValid } = this.state

    if ( radiusValid ) {
      const {radius} = this.state
      const url = `/api/shops/@33.846978,-6.775816,${radius}`

      axios.get(url)
        .then((response) => {
          this.setState({shops: response.data})
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
  
  render() {
    const { radius, radiusValid } = this.state

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

        <Container style={{ marginTop: '5.5em' }}>
          <ShopCardList shops={this.state.shops}/>
        </Container>
      </Segment>
    )
  }
}

export default NearbyShopsPage