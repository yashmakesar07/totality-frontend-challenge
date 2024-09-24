import React from 'react';
import { Card, Button } from 'antd';

const PropertyCard = ({ property }) => {
  return (
    <Card
      hoverable
      cover={<img alt={property.title} src={property.image} />}
      actions={[<Button type="primary">Book Now</Button>]}
    >
      <Card.Meta title={property.title} description={property.description} />
      <p>Price: ${property.price}/night</p>
      <p>Location: {property.location}</p>
      <p>Bedrooms: {property.bedrooms}</p>
    </Card>
  );
};

export default PropertyCard;
