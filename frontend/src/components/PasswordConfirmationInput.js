import React, {Component} from 'react'
import {Form} from "semantic-ui-react";
import {withFormsy} from "formsy-react";

class PasswordConfirmationInput extends Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.props.setValue(e.currentTarget.value)
  }

  render() {
    const { getValue } = this.props

    return (
      <Form.Input type="password"
                  placeholder="Confirm password"
                  onChange={this.handleChange}
                  value={getValue() || ''}
                  size="big"
                  icon="lock" />
    )
  }
}

export default withFormsy(PasswordConfirmationInput)