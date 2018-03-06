import React, {Component} from 'react'
import {Form} from "semantic-ui-react";

class EmailInput extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Form.Input placeholder="Email address"
                  size="big"
                  icon="mail" />
    )
  }
}

export default EmailInput