import React from "react";
import { Card, Image, Button } from "semantic-ui-react";

const ShopCard = ({ name, picture }) => (
  <Card raised color="orange">
    <Card.Content textAlign="left">
      <Card.Header>{name}</Card.Header>
    </Card.Content>
    <Card.Content textAlign="center">
      <Image src={picture} fluid />
    </Card.Content>
    <Card.Content extra>
      <Button.Group widths="2">
        <Button basic color="red">
          Dislike
        </Button>
        <Button basic color="green">
          Like
        </Button>
      </Button.Group>
    </Card.Content>
  </Card>
);

export default ShopCard;
