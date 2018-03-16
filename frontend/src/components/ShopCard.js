import React, { Component } from "react";
import { Card, Image, Button } from "semantic-ui-react";
import {getPage, isAuthenticated} from "../selectors";
import {openSignInModal} from "../actions";
import {connect} from "react-redux";
import {dislikeShop} from "../services/api/nearby-shops";
import {likeShop, removePreferredShop} from "../services/api/preferred-shops";

const mapStateToProps = state => ({
  page: getPage(state),
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
    this.handleRemove = this.handleRemove.bind(this)
  }

  lazyRegister() {
    const { authenticated, openSignInModal } = this.props
    if (!authenticated) {
      openSignInModal()
    }
  }

  handleDislike() {
    this.lazyRegister()

    const { authenticated, shopId } = this.props
    if (authenticated) {
      dislikeShop(shopId)
    }
  }

  handleLike() {
    this.lazyRegister()

    const { authenticated, shopId } = this.props
    if (authenticated) {
      likeShop(shopId)
    }
  }
  
  handleRemove() {
    const { shopId } = this.props
    removePreferredShop(shopId)
  }

  render() {
    const { name, picture, page } = this.props

    return (
      <Card raised color="grey">
        <Card.Content textAlign="left">
          <Card.Header>{name}</Card.Header>
        </Card.Content>
        <Card.Content textAlign="center">
          <Image src={picture} size='small'/>
        </Card.Content>
        <Card.Content extra>
          {page === 'NearbyShops' ?
            <Button.Group compact widths="2" size='small'>
              <Button onClick={this.handleDislike} negative>
                Dislike
              </Button>
              <Button onClick={this.handleLike} positive>
                Like
              </Button>
            </Button.Group>
            : page === 'PreferredShops' &&
            <Button onClick={this.handleRemove} negative compact fluid>
              Remove
            </Button>
          }
        </Card.Content>
      </Card>
    )
  }
}

const ShopCard = connect(mapStateToProps, mapDispatchToProps)(ConnectedShopCard)

export default ShopCard
