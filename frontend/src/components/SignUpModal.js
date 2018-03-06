import React, { Component } from 'react'
import {Button, Divider, Form, Modal} from "semantic-ui-react";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import PasswordConfirmationInput from "./PasswordConfirmationInput";


class SignUpModal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      modalOpen: false
    }

    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  handleOpen() {
    this.setState({ modalOpen: true }) 
  }

  handleClose() {
    this.setState({ modalOpen: false })
  }

  render() {
    const { modalOpen } = this.state

    return (
      <Modal trigger={<Button onClick={this.handleOpen} color="teal" size="mini">Sign Up</Button>}
             open={modalOpen}
             onClose={this.handleClose}
             size="tiny"
             closeIcon>
        <Modal.Header>Sign Up</Modal.Header>
        <Modal.Content>
          <Form>
            <EmailInput />
            <PasswordInput />
            <PasswordConfirmationInput/>
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