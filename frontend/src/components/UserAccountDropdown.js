import React, { Component } from 'react'
import {Dropdown, Icon} from "semantic-ui-react";
import {signOutRequest} from "../actions";
import {connect} from "react-redux";

const mapDispatchToProps = dispatch => ({
  signOutRequest: () => dispatch(signOutRequest())
})

class ConnectedUserAccountDropdown extends Component {
  constructor(props) {
    super(props)

    this.handleSignOut = this.handleSignOut.bind(this)
  }

  handleSignOut() {
    this.props.signOutRequest()
  }

  render() {
    return (
      <Dropdown item icon={<Icon name="user circle" size="big" color="grey" style={{ marginRight: "0em" }}/>}>
        <Dropdown.Menu>
          <Dropdown.Item onClick={this.handleSignOut}
                         icon={<Icon name="sign out" color="grey"/>}
                         text="Log Out" />
        </Dropdown.Menu>
      </Dropdown>
    )
  }
}

const UserAccountDropdown = connect(null, mapDispatchToProps)(ConnectedUserAccountDropdown)

export default UserAccountDropdown