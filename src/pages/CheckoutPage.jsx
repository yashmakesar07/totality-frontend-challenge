import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input, Button, Card, List, Divider, Row, Col } from 'antd';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../redux/Property/cartSlice'; // Action to clear the cart after payment

const CheckoutPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.cartItems); // Get items from cart
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0); // Calculate total price

  const onFinish = (values) => {
    console.log('Booking Details:', values);
    // Implement payment process here
    dispatch(clearCart()); // Clear cart after successful payment
    navigate('/confirmation'); // Navigate to confirmation page after payment
  };

  return (
    <div style={{ padding: '50px', maxWidth: '1200px', margin: '0 auto' }}>
      <Row gutter={32}>
        {/* Left Section: Booked Properties */}
        <Col xs={24} md={12}>
          <h2 style={{ marginBottom: '20px' }}>Your Bookings</h2>
          <List
            itemLayout="horizontal"
            dataSource={cartItems}
            renderItem={(item) => (
              <List.Item>
                <Card
                  hoverable
                  title={item.title}
                  bordered={false}
                  style={{ width: '100%', marginBottom: '20px', borderRadius: '8px', backgroundColor: '#f9f9f9' }}
                >
                  <p><strong>Price:</strong> ${item.price}/night</p>
                  <p><strong>Location:</strong> {item.location}</p>
                  <p><strong>Quantity:</strong> {item.quantity}</p>
                </Card>
              </List.Item>
            )}
          />
          <Divider />
          <h3>Total Cost: <span style={{ color: '#52c41a' }}>${totalPrice}</span></h3>
        </Col>
        {/* Right Section: Booking Form */}
        <Col xs={24} md={12}>
          <Card
            title="Booking & Payment Details"
            bordered={false}
            style={{ borderRadius: '8px', backgroundColor: '#ffffff', boxShadow: '0px 4px 12px rgba(0,0,0,0.1)' }}
          >
            <Form
              onFinish={onFinish}
              layout="vertical"
              style={{ marginTop: '20px' }}
            >
              <Divider orientation="left">Personal Details</Divider>

              <Form.Item
                label="Full Name"
                name="fullName"
                rules={[{ required: true, message: 'Please enter your full name' }]}
              >
                <Input placeholder="John Doe" />
              </Form.Item>

              <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: 'Please enter your email' }]}
              >
                <Input placeholder="example@mail.com" />
              </Form.Item>

              <Form.Item
                label="Phone Number"
                name="phoneNumber"
                rules={[{ required: true, message: 'Please enter your phone number' }]}
              >
                <Input placeholder="+1 (555) 123-4567" />
              </Form.Item>

              <Divider orientation="left">Payment Information</Divider>

              <Form.Item
                label="Credit Card Number"
                name="creditCard"
                rules={[{ required: true, message: 'Please enter your credit card number' }]}
              >
                <Input placeholder="1234 5678 9876 5432" />
              </Form.Item>

              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    label="Expiration Date"
                    name="expirationDate"
                    rules={[{ required: true, message: 'Please enter the expiration date' }]}
                  >
                    <Input placeholder="MM/YY" />
                  </Form.Item>
                </Col>

                <Col span={12}>
                  <Form.Item
                    label="CVV"
                    name="cvv"
                    rules={[{ required: true, message: 'Please enter the CVV' }]}
                  >
                    <Input.Password placeholder="123" />
                  </Form.Item>
                </Col>
              </Row>

              <Button
                type="primary"
                htmlType="submit"
                block
                size="large"
                style={{ marginTop: '20px', borderRadius: '5px' }}
              >
                Complete Payment
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default CheckoutPage;
