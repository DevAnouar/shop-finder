import React, { Component } from 'react'
import {Menu, Container, Segment, Form, Button} from 'semantic-ui-react'
import ShopCardList from "../components/ShopCardList";
import RadiusOfSearchInput from "../components/RadiusOfSearchInput";
import axios from 'axios';
import NearbyShopsSearchForm from "../components/NearbyShopsSearchForm";

class NearbyShopsPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      radius: '',
      shops: []
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = (e, { value } ) => {
    this.setState({ radius: value })
  }
  
  handleSubmit = (e, data) => {
    const { radius } = this.state
    const url = `/api/shops/@33.846978,-6.775816,${radius}`

    axios.get(url)
      .then((response) => {
        this.setState({ shops: response.data })
      })
      .catch((error) => {
        console.log(error)
      })

    e.preventDefault()
  }
  
  render() {
    const { radius } = this.state

    return (
      <Segment basic>
        <Menu fixed='top' size='huge' borderless>
          <Menu.Item>
            <NearbyShopsSearchForm onSubmit={this.handleSubmit}
                                   size='large'
                                   action={{ color: 'teal', content: 'Search', size: 'small' }}
                                   onChange={this.handleChange}
                                   value={radius}
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