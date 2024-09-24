import React from 'react';
import { Layout, Card, Button, Row, Col } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Content, Footer } = Layout;

const CartPage = () => {
  // Sample booked properties data (In a real app, this would come from state or context)
  const bookedProperties = [
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
  ];

  const navigate = useNavigate();

  const handleRemove = (id) => {
    // Logic to remove the property from the cart
    console.log(`Remove property with ID: ${id}`);
  };

  const handleCheckout = () => {
    // Navigate to the checkout process
    navigate('/checkout');
  };

  const totalCost = bookedProperties.reduce((total, property) => total + property.price * property.quantity, 0);

  return (
    <Layout>
      <Content style={{ padding: '50px' }}>
        <h2>Your Cart</h2>
        <Row gutter={16}>
          {bookedProperties.map((property) => (
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
          ))}
        </Row>
        <h3>Total Cost: ${totalCost}</h3>
        <Button type="primary" onClick={handleCheckout}>Proceed to Checkout</Button>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Property Rental Platform ©2024</Footer>
    </Layout>
  );
};

export default CartPage;
