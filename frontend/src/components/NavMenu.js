import React, { Component } from 'react'
import {Menu, Transition} from "semantic-ui-react";
import NearbyShopsSearchForm from "./NearbyShopsSearchForm";
import {connect} from "react-redux";
import SignUpModal from "./SignUpModal";
import SignInModal from "./SignInModal";
import {isAuthenticated} from "../selectors";
import UserAccountDropdown from "./UserAccountDropdown";

const mapStateToProps = state => ({
  page: state.page,
  authenticated: isAuthenticated(state)
})

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
    const { page, authenticated } = this.props

    return (
      <Menu fixed='top' color='teal' size='large' borderless>
        <Menu.Item fitted='vertically' >
          <Transition duration={20} visible={page === 'NearbyShops'} unmountOnHide>
            <NearbyShopsSearchForm size='medium'
                                   action={{ color: 'teal', content: 'Search', size: 'small' }} />
          </Transition>
        </Menu.Item>

        {!authenticated ?
          <Menu.Menu position='right'>
            <Menu.Item name='Sign Up' fitted="horizontally"><SignUpModal /></Menu.Item>
            <Menu.Item name='Sign In'><SignInModal /></Menu.Item>
          </Menu.Menu>
          :
          <Menu.Menu position='right'>
            <UserAccountDropdown />
          </Menu.Menu>
        }
      </Menu>
    )
  }
}

const NavMenu = connect(mapStateToProps)(ConnectedNavMenu)

export default NavMenu