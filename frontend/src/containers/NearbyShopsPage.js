import React, { Component } from 'react'
import {Menu, Container, Segment, Form, Button} from 'semantic-ui-react'
import ShopCardList from "../components/ShopCardList";
import RadiusOfSearchInput from "../components/RadiusOfSearchInput";
import axios from 'axios';

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

  /*
  componentDidMount() {
    axios.get("/api/shops/@33.846978,-6.775816,23")
      .then((response) => {
        this.setState({ shops: response.data })
      })
      .catch((error) => {
        console.log(error)
      })
  }*/

  handleChange = (e, { value } ) => {
    const radius = value
    console.log('In handleChange', radius)

    this.setState({ radius: radius })
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
            <Form>
              <RadiusOfSearchInput size='large'
                                   action={{ color: 'teal', content: 'Search', size: 'small', onClick: this.handleSubmit }}
                                   onChange={this.handleChange}
                                   value={radius}
                                   style={{ width: '17.5em' }} />
            </Form>
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