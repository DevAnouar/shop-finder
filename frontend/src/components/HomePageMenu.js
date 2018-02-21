import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

class HomePageMenu extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activeItem: ''
    }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    let { activeItem } = this.state

    return (
      <Menu fixed='top' size='massive' color='teal' secondary pointing borderless>
        <Menu.Menu position='right'>
          <Menu.Item name='Log In' active={activeItem === 'Log In'} onClick={this.handleItemClick} />
          <Menu.Item name='Sign Up' active={activeItem === 'Sign Up'} onClick={this.handleItemClick} />
        </Menu.Menu>
      </Menu>
    )
  }
}

export  default HomePageMenu