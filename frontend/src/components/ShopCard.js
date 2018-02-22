import React from "react";
import { Card, Image, Button } from "semantic-ui-react";

const ShopCard = ({ name, picture }) => (
  <Card raised color="grey">
    <Card.Content textAlign="left">
      <Card.Header>{name}</Card.Header>
    </Card.Content>
    <Card.Content textAlign="center">
      <Image src={picture} size='small' />
    </Card.Content>
    <Card.Content extra>
      <Button.Group compact widths="2" size='small'>
        <Button negative>
          Dislike
        </Button>
        <Button positive>
          Like
        </Button>
      </Button.Group>
    </Card.Content>
  </Card>
);

export default ShopCard;
