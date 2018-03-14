import React, { Component } from 'react'
import {Button, Header, Icon, Modal} from "semantic-ui-react";
import {isWelcomeModalOpen} from "../selectors";
import {closeWelcomeModal} from "../actions";
import {connect} from "react-redux";

const mapStateToProps = state => ({
  welcomeModalOpen: isWelcomeModalOpen(state)
})

const mapDispatchToProps = dispatch => ({
  closeWelcomeModal: () => dispatch(closeWelcomeModal())
})

class ConnectedWelcomeModal extends Component {
  constructor(props) {
    super(props)

    this.handleClose = this.handleClose.bind(this)
  }

  handleClose() {
    const { closeWelcomeModal } = this.props
    closeWelcomeModal()
  }

  render() {
    const { welcomeModalOpen } = this.props

    return (
      <Modal open={welcomeModalOpen}
             onClose={this.handleClose}
             trigger={<span style={{ height: "0em" }}/>}
             className="welcome-modal"
             size="mini">
        <Modal.Content style={{ background: "none", marginTop: "9em"}}>
          <Header as="h3" icon textAlign="center" inverted>
            <Icon name="shopping bag" size="huge" circular />
            <Header.Content style={{ paddingTop: "0.2em", paddingBottom: "0.5em" }}>
              Welcome to Shop Finder
            </Header.Content>
          </Header>
          <Modal.Description style={{ paddingLeft: "0em" }}>
            <Header as="h4" textAlign="center" inverted>
              You can now bookmark shops that you are interested in. You can also blacklist undesirable shops,
              this way they won't be fetched for a duration of 2 hours.
            </Header>
          </Modal.Description>
          <Modal.Actions style={{ marginTop: "1.1em", marginBottom: "0.2em" }}>
            <Button color="teal" content="Start Exploring" onClick={this.handleClose} size="large" style={{ marginLeft: "0em" }} fluid />
          </Modal.Actions>
        </Modal.Content>
      </Modal>
    )
  }
}

const WelcomeModal = connect(mapStateToProps, mapDispatchToProps)(ConnectedWelcomeModal)

export default WelcomeModal

