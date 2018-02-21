import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

class HomePageMenu extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activeItem: ''
    }

    this.handleItemClick = this.handleItemClick.bind(this)
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    let { activeItem } = this.state

    return (
      <Menu fixed='top' size='massive' color='teal' secondary pointing borderless>
        <Menu.Menu position='right'>
          <Menu.Item name='Log In' className='ui menu-item Change' active={activeItem === 'Log In'} onClick={this.handleItemClick} />
          <Menu.Item name='Sign Up' className='ui menu-item Change' active={activeItem === 'Sign Up'} onClick={this.handleItemClick} />
        </Menu.Menu>
      </Menu>
    )
  }
}

export  default HomePageMenu