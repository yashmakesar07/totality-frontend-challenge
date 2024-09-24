// src/pages/CartPage.jsx
import React, { useState } from 'react';
import { Layout, Card, Button, Row, Col, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Content, Footer } = Layout;
const { Title } = Typography;

const CartPage = () => {
  // Sample booked properties data (In a real app, this would come from state or context)
  const [bookedProperties, setBookedProperties] = useState([
    {
      id: 1,
      title: 'Luxury Villa',
      price: 250,
      location: 'Goa',
      image: 'https://via.placeholder.com/150',
      quantity: 1, // Quantity of the booked property
    },
    {
      id: 2,
      title: 'Cozy Apartment',
      price: 120,
      location: 'Mumbai',
      image: 'https://via.placeholder.com/150',
      quantity: 1,
    },
  ]);

  const navigate = useNavigate();

  const handleRemove = (id) => {
    // Logic to remove the property from the cart
    setBookedProperties(bookedProperties.filter(property => property.id !== id));
  };

  const handleCheckout = () => {
    // Navigate to the checkout process
    navigate('/checkout');
  };

  const totalCost = bookedProperties.reduce((total, property) => total + property.price * property.quantity, 0);

  return (
    <Layout>
      <Content style={{ padding: '50px' }}>
        <Title level={2}>Your Cart</Title>
        <Row gutter={16}>
          {bookedProperties.length === 0 ? (
            <p>Your cart is empty!</p>
          ) : (
            bookedProperties.map((property) => (
              <Col span={8} key={property.id}>
                <Card
                  hoverable
                  cover={<img alt={property.title} src={property.image} />}
                  actions={[
                    <Button type="link" onClick={() => handleRemove(property.id)}>Remove</Button>,
                  ]}
                >
                  <Card.Meta title={property.title} description={`Location: ${property.location}`} />
                  <p>Price: ${property.price}/night</p>
                  <p>Quantity: {property.quantity}</p>
                </Card>
              </Col>
            ))
          )}
        </Row>
        <Title level={3}>Total Cost: ${totalCost}</Title>
        <Button type="primary" onClick={handleCheckout} disabled={bookedProperties.length === 0}>
          Proceed to Checkout
        </Button>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Property Rental Platform ©2024</Footer>
    </Layout>
  );
};

export default CartPage;
