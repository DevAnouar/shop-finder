import React, { Component } from 'react'
import {Dropdown, Icon} from "semantic-ui-react";

class UserAccountDropdown extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Dropdown item icon={<Icon name="user circle" size="big" color="grey" style={{ marginRight: "0em" }}/>}>
        <Dropdown.Menu>
          <Dropdown.Item icon={<Icon name="sign out" color="grey"/>}
                         text="Log Out" color="grey" />
        </Dropdown.Menu>
      </Dropdown>
    )
  }
}

export default UserAccountDropdown