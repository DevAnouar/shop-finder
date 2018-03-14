import React, { Component } from "react";
import { Card, Image, Button } from "semantic-ui-react";
import {isAuthenticated} from "../selectors";
import {openSignInModal} from "../actions";
import {connect} from "react-redux";

const mapStateToProps = state => ({
  authenticated: isAuthenticated(state)
})

const mapDispatchToProps = dispatch => ({
  openSignInModal: () => dispatch(openSignInModal())
})

class ConnectedShopCard extends Component {
  constructor(props) {
    super(props)

    this.lazyRegister = this.lazyRegister.bind(this)
    this.handleDislike = this.handleDislike.bind(this)
    this.handleLike = this.handleLike.bind(this)
  }

  lazyRegister() {
    const { authenticated, openSignInModal } = this.props
    if (!authenticated) {
      openSignInModal()
    }
  }

  handleDislike() {
    this.lazyRegister()
  }

  handleLike() {
    this.lazyRegister()
  }

  render() {
    const { name, picture } = this.props

    return (
      <Card raised color="grey">
        <Card.Content textAlign="left">
          <Card.Header>{name}</Card.Header>
        </Card.Content>
        <Card.Content textAlign="center">
          <Image src={picture} size='small'/>
        </Card.Content>
        <Card.Content extra>
          <Button.Group compact widths="2" size='small'>
            <Button onClick={this.handleDislike} negative>
              Dislike
            </Button>
            <Button onClick={this.handleLike} positive>
              Like
            </Button>
          </Button.Group>
        </Card.Content>
      </Card>
    )
  }
}

const ShopCard = connect(mapStateToProps, mapDispatchToProps)(ConnectedShopCard)

export default ShopCard;
