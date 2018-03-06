import React, {Component} from 'react'
import {Form} from "semantic-ui-react";

class PasswordInput extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Form.Input type="password"
                  placeholder="Create password"
                  size="big"
                  icon="lock" />
    )
  }
}

export default PasswordInput