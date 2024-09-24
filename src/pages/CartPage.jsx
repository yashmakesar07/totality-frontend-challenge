// src/pages/CartPage.jsx
import React from 'react';
import { Layout, Card, Button, Row, Col, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/Property/cartSlice'; // Import the action to remove from cart

const { Content, Footer } = Layout;
const { Title } = Typography;

const CartPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Fetch booked properties from Redux state
  const bookedProperties = useSelector((state) => state.cart.cartItems); // Access cart items from Redux

  const handleRemove = (id) => {
    // Dispatch action to remove the property from the cart
    dispatch(removeFromCart(id));
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
