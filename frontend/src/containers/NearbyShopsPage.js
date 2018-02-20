import React, { Component } from 'react'
import { Menu, Container } from 'semantic-ui-react'
import ShopCardList from "../components/ShopCardList";
import RadiusOfSearchInput from "../components/RadiusOfSearchInput";

class NearbyShopsPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hello: "Hello React!",
      shops: [
        { name: "Adornica", picture: "http://placehold.it/150x150" },
        { name: "Illumity", picture: "http://placehold.it/150x150" },
        { name: "Corporana", picture: "http://placehold.it/150x150" },
        { name: "Viasia", picture: "http://placehold.it/150x150" },
        { name: "Ultrasure", picture: "http://placehold.it/150x150" },
        { name: "Everest", picture: "http://placehold.it/150x150" },
        { name: "Sultrax", picture: "http://placehold.it/150x150" },
        { name: "Sultrax", picture: "http://placehold.it/150x150" }
      ]
    }
  }
  
  render() {
    return (
      <div>
        <Menu fixed='top' size='huge' borderless>
          <Menu.Item>
            <RadiusOfSearchInput />
          </Menu.Item>
        </Menu>

        <Container style={{ marginTop: '7em' }}>
          <ShopCardList shops={this.state.shops}/>
        </Container>
      </div>
    )
  }
}

export default NearbyShopsPage