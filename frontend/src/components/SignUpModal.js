import React, { Component } from 'react'
import {Button, Divider, Form, Message, Modal, List} from "semantic-ui-react";
import Formsy from 'formsy-react';
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import PasswordConfirmationInput from "./PasswordConfirmationInput";
import {PASSWORD_REGEX} from "../utils";

class SignUpModal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      modalOpen: false,
      invalidSubmit: false,
      formModel: {
        email: '',
        password: '',
        repeated_password: ''
      }
    }

    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.notifyFormError = this.notifyFormError.bind(this)
  }

  handleOpen() {
    this.setState({ modalOpen: true }) 
  }

  handleClose() {
    this.setState({ modalOpen: false, invalidSubmit: false })
  }

  notifyFormError(model) {
    this.setState({ invalidSubmit: true, formModel: model })
  }

  render() {
    const { modalOpen, invalidSubmit, formModel } = this.state
    const { email, password, repeated_password } = formModel

    return (
      <Modal trigger={<Button onClick={this.handleOpen} color="teal" size="mini">Sign Up</Button>}
             open={modalOpen}
             onClose={this.handleClose}
             size="tiny"
             closeIcon>
        <Modal.Header>Sign Up</Modal.Header>
        <Modal.Content>
          <Form as={ (props) => <Formsy {...props} /> } onInvalidSubmit={this.notifyFormError}
                error={invalidSubmit}>
            <EmailInput name="email"
                        value={email}
                        validations="isEmail"
                        validationError="Email is not valid."
                        innerRef={ c => this.emailInput = c }
                        required />
            <PasswordInput name="password"
                           value={password}
                           validations={{ matchRegexp: PASSWORD_REGEX, minLength: 8 }}
                           validationErrors={{ matchRegexp: 'Password must contain at least one upper case letter, one lower case letter, and one number.', minLength: 'Password must contain at least 8 characters.' }}
                           innerRef={ c => this.passwordInput = c }
                           required />
            <PasswordConfirmationInput name="repeated_password"
                                       value={repeated_password}
                                       validations="equalsField:password"
                                       validationError="Password and confirmation password do not match."
                                       innerRef={ c => this.passwordConfirmationInput = c } />
            {invalidSubmit &&
              <Message error>
                <Message.Header content="There was some errors with your submission" />
                <Message.List as={(props) => <List {...props} />}>
                  {this.emailInput.props.getValue() === '' ?
                    <Message.Item as={(props) => <List.Item {...props} />}>
                      <List.Icon name="x" />
                      <List.Content>You didn't enter an email address.</List.Content>
                    </Message.Item>
                    : this.emailInput.props.getErrorMessage() !== null ?
                      <Message.Item as={(props) => <List.Item {...props} />}>
                        <List.Icon name="x" />
                        <List.Content>{this.emailInput.props.getErrorMessage()}</List.Content>
                      </Message.Item>
                      : this.passwordInput.props.getValue() === '' ?
                        <Message.Item as={(props) => <List.Item {...props} />}>
                          <List.Icon name="x" />
                          <List.Content>You didn't enter a password.</List.Content>
                        </Message.Item>
                        : this.passwordInput.props.getErrorMessages().length !== 0 ?
                          this.passwordInput.props.getErrorMessages().map((errorMsg,key) =>
                            <Message.Item key={key} as={(props) => <List.Item {...props} />}>
                              <List.Icon name="x" />
                              <List.Content>{errorMsg}</List.Content>
                            </Message.Item>
                          )
                          : this.passwordConfirmationInput.props.getValue() === '' ?
                            <Message.Item as={(props) => <List.Item {...props} />}>
                              <List.Icon name="x" />
                              <List.Content>You didn't confirm your password.</List.Content>
                            </Message.Item>
                            : this.passwordConfirmationInput.props.getErrorMessage() !== null &&
                            <Message.Item as={(props) => <List.Item {...props} />}>
                              <List.Icon name="x" />
                              <List.Content>{this.passwordConfirmationInput.props.getErrorMessage()}</List.Content>
                            </Message.Item>
                  }
                </Message.List>
              </Message>
            }

            <Divider style={{ marginTop: '1.5em', marginBottom: '1.5em' }} />

            <Form.Button type="submit"
                         content="Sign up"
                         size="big"
                         color="teal"
                         fluid />
          </Form>
        </Modal.Content>
      </Modal>
    )
  }
}

export default SignUpModal