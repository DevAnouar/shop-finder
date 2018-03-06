import React, { Component } from 'react'
import {Menu, Transition} from "semantic-ui-react";
import NearbyShopsSearchForm from "./NearbyShopsSearchForm";
import {connect} from "react-redux";
import SignUpModal from "./SignUpModal";

const mapStateToProps = state => ({ page: state.page })

class ConnectedNavMenu extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activeItem: '',
    }

    this.handleItemClick = this.handleItemClick.bind(this)
  }

  handleItemClick(e, { name }) {
    this.setState({activeItem: name})
  }

  render() {
    const { activeItem } = this.state
    const { page } = this.props

    return (
      <Menu fixed='top' color='teal' size='large' borderless>
        <Menu.Item fitted='vertically' >
          <Transition duration={50} visible={page === 'NearbyShops'} unmountOnHide>
            <NearbyShopsSearchForm size='small'
                                   action={{ color: 'teal', content: 'Search', size: 'small' }}
                                   style={{ width: '103%' }} />
          </Transition>
        </Menu.Item>

        <Menu.Menu position='right'>
          <Menu.Item name='Log In' className='ui menu-item Change' active={activeItem === 'Log In'} onClick={this.handleItemClick} />
          <Menu.Item name='Sign Up'><SignUpModal /></Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}

const NavMenu = connect(mapStateToProps)(ConnectedNavMenu)

export default NavMenu