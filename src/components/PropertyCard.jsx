// src/components/PropertyCard.jsx
import React from 'react';
import { Card, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/Property/cartSlice'; // Import the action to add to cart
import { useNavigate } from 'react-router-dom';

const PropertyCard = ({ property }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleBookNow = () => {
    // Dispatch action to add the property to the cart
    dispatch(addToCart(property));
    // Redirect to the Cart Page
    // navigate('/cart');
  };

  return (
    <Card
      hoverable
      cover={<img alt={property.title} src={property.image} />}
      actions={[
        <Button type="primary" onClick={handleBookNow}>Book Now</Button>,
      ]}
    >
      <Card.Meta title={property.title} description={`Location: ${property.location}`} />
      <p>Price: ${property.price}/night</p>
      <p>Bedrooms: {property.bedrooms}</p>
    </Card>
  );
};

export default PropertyCard;
