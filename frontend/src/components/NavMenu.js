import React, { Component } from 'react'
import {Button, Menu, Transition} from "semantic-ui-react";
import NearbyShopsSearchForm from "./NearbyShopsSearchForm";
import {connect} from "react-redux";
import SignUpModal from "./SignUpModal";
import SignInModal from "./SignInModal";
import {getPage, isAuthenticated} from "../selectors";
import UserAccountDropdown from "./UserAccountDropdown";
import WelcomeModal from "./WelcomeModal";
import Link from "redux-first-router-link";
import {goToPreferredShops} from "../actions";

const mapStateToProps = state => ({
  page: getPage(state),
  authenticated: isAuthenticated(state)
})

const mapDispatchToProps = dispatch => ({
  goToPreferredShops: () => dispatch(goToPreferredShops())
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
    const { page, authenticated, goToPreferredShops } = this.props

    return (
      <Menu fixed='top' color='teal' size='large' borderless>
        <Menu.Item fitted='vertically' >
          <Transition duration={20} visible={page !== 'Home'} unmountOnHide>
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
            <WelcomeModal />
            <Menu.Item name='My Preferred Shops' fitted="horizontally"><Button onClick={goToPreferredShops} content="My Preferred Shops" color="teal" /></Menu.Item>
            <UserAccountDropdown />
          </Menu.Menu>
        }
      </Menu>
    )
  }
}

const NavMenu = connect(mapStateToProps, mapDispatchToProps)(ConnectedNavMenu)

export default NavMenu