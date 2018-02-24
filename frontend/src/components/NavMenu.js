import React, { Component } from 'react'
import {Menu} from "semantic-ui-react";
import NearbyShopsSearchForm from "./NearbyShopsSearchForm";

class NavMenu extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activeItem: ''
    }

    this.handleItemClick = this.handleItemClick.bind(this)
  }

  handleItemClick(e, { name }) {
    this.setState({activeItem: name})
  }

  render() {
    const { activeItem } = this.state

    return (
      <Menu fixed='top' color='teal' pointing borderless>
        <Menu.Item>
          <NearbyShopsSearchForm size='small'
                                 action={{ color: 'teal', content: 'Search', size: 'small' }}
                                 style={{ width: '103%' }} />
        </Menu.Item>

        <Menu.Menu position='right'>
          <Menu.Item name='Log In' className='ui menu-item Change' active={activeItem === 'Log In'} onClick={this.handleItemClick} />
          <Menu.Item name='Sign Up' className='ui menu-item Change' active={activeItem === 'Sign Up'} onClick={this.handleItemClick} />
        </Menu.Menu>
      </Menu>
    )
  }
}

export default NavMenu