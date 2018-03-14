import React, {Component} from "react";
import {PASSWORD_REGEX} from "../utils";
import {Button, Divider, Form, List, Message, Modal} from "semantic-ui-react";
import Formsy from 'formsy-react';
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import {connect} from "react-redux";
import {getAuthenticationRequestError, isSendingRequest} from "../selectors";
import {signInRequest} from "../actions";

const mapStateToProps = state => ({
  sendingSignInRequest: isSendingRequest(state),
  signInRequestError: getAuthenticationRequestError(state)
})

const mapDispatchToProps = dispatch => ({
  signInRequest: ({ email, password }) => dispatch(signInRequest(email, password))
})

class ConnectedSignInModal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      modalOpen: false,
      invalidSubmit: false,
      formModel: {
        email: '',
        password: ''
      }
    }

    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.notifyFormError = this.notifyFormError.bind(this)
    this.sendToBackend = this.sendToBackend.bind(this)
  }

  handleOpen() {
    this.setState({ modalOpen: true })
  }

  handleClose() {
    this.setState({ modalOpen: false, invalidSubmit: false })
  }

  sendToBackend(model) {
    const { signInRequest } = this.props

    signInRequest(model)
    this.setState({ invalidSubmit: false, formModel: model })
  }

  notifyFormError(model) {
    this.setState({ invalidSubmit: true, formModel: model })
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.modalOpen && nextProps.signInRequestError !== '') {
      this.setState({ invalidSubmit: true })
    } else {
      this.setState({ invalidSubmit: false })
    }
  }

  render() {
    const { modalOpen, invalidSubmit, formModel } = this.state
    const { email, password } = formModel
    const { sendingSignInRequest, signInRequestError } = this.props

    return (
      <Modal trigger={<Button onClick={this.handleOpen} color="teal" size="mini" style={{ width: "6.75em" }}>Sign In</Button>}
             open={modalOpen}
             onClose={this.handleClose}
             size="tiny"
             closeIcon>
        <Modal.Header>Sign In</Modal.Header>
        <Modal.Content>
          <Form as={ (props) => <Formsy {...props} /> }
                onValidSubmit={this.sendToBackend}
                onInvalidSubmit={this.notifyFormError}
                ref="sign-in-form"
                error={invalidSubmit}>
            <EmailInput name="email"
                        value={email}
                        validations="isEmail"
                        validationError="Email is not valid."
                        innerRef={ c => this.emailInput = c }
                        required />
            <PasswordInput name="password"
                           placeholder="Enter password"
                           value={password}
                           validations={{ matchRegexp: PASSWORD_REGEX, minLength: 8 }}
                           validationErrors={{ matchRegexp: 'Password must contain at least one upper case letter, one lower case letter, and one number.', minLength: 'Password must contain at least 8 characters.' }}
                           innerRef={ c => this.passwordInput = c }
                           required />

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
                        : signInRequestError !== '' &&
                        <Message.Item as={(props) => <List.Item {...props} />}>
                          <List.Icon name="x" />
                          <List.Content>{signInRequestError}</List.Content>
                        </Message.Item>
                }
              </Message.List>
            </Message>
            }

            <Divider style={{ marginTop: '1.5em', marginBottom: '1.5em' }} />

            <Form.Button type="submit"
                         loading={sendingSignInRequest}
                         content="Sign in"
                         size="big"
                         color="teal"
                         fluid />
          </Form>
        </Modal.Content>
      </Modal>
    )
  }
}

const SignInModal = connect(mapStateToProps, mapDispatchToProps)(ConnectedSignInModal)

export default SignInModal