import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

class HomePageMenu extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Menu fixed='top' size='massive' color='teal' secondary pointing borderless>
        <Menu.Menu position='right'>
          <Menu.Item link active name='Log In' />
          <Menu.Item link name='Sign Up' />
        </Menu.Menu>
      </Menu>
    )
  }
}

export  default HomePageMenu