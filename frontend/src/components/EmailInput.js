import React, {Component} from 'react'
import {Form} from "semantic-ui-react";
import {withFormsy} from "formsy-react";

class EmailInput extends Component {
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
      <Form.Input placeholder="Email address"
                  onChange={this.handleChange}
                  value={getValue() || ''}
                  size="big"
                  icon="mail" />
    )
  }
}

export default withFormsy(EmailInput)