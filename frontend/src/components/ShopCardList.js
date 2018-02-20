import React from "react";
import ShopCard from "./ShopCard";
import { Card } from "semantic-ui-react";

const ShopCardList = ({ shops }) => {
  const shopItems = shops.map(shop => {
    return <ShopCard name={shop.name} picture={shop.picture} />;
  });

  return (
      <Card.Group centered itemsPerRow="4">
        {shopItems}
      </Card.Group>
  );
};

export default ShopCardList;