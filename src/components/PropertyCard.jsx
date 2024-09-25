// src/components/PropertyCard.jsx
import React, { useState } from 'react';
import { Card, Button } from 'antd';
import { HeartOutlined, HeartFilled } from '@ant-design/icons'; // Import Heart icons
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/Property/cartSlice'; // Import the action to add to cart
import { useNavigate } from 'react-router-dom';

const PropertyCard = ({ property }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false); // State to track favorite

  const handleBookNow = () => {
    // Dispatch action to add the property to the cart
    dispatch(addToCart(property));
    
    // Redirect to the Cart Page
    // navigate('/cart');
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite); // Toggle favorite state
  };

  return (
    <Card
      hoverable
      cover={<img alt={property.title} src={property.image} />}
      actions={[
        <Button
          type="primary"
          onClick={handleBookNow}
          style={{ width: '100%', height: '50px' }}
        >
          Book Now
        </Button>,
      ]}
    >
      <Card.Meta
        title={
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>{property.title}</span>
            {/* Heart icon for marking as favorite */}
            <span onClick={toggleFavorite} style={{ cursor: 'pointer', fontSize: '1.5rem' }}>
              {isFavorite ? <HeartFilled style={{ color: 'red' }} /> : <HeartOutlined />}
            </span>
          </div>
        }
        description={`Location: ${property.location}`}
      />
      <p>Price: ${property.price}/night</p>
      <p>Bedrooms: {property.bedrooms}</p>
    </Card>
  );
};

export default PropertyCard;
