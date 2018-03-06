import React, {Component} from 'react'
import {Form} from "semantic-ui-react";

class PasswordConfirmationInput extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Form.Input type="password"
                  placeholder="Confirm password"
                  size="big"
                  icon="lock" />
    )
  }
}

export default PasswordConfirmationInput