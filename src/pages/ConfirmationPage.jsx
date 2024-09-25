import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Result, Divider } from 'antd';
import { SmileOutlined } from '@ant-design/icons';

const ConfirmationPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/'); // Navigate back to the home page
  };

  return (
    <div style={{ padding: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Card
        style={{
          maxWidth: '600px',
          width: '100%',
          padding: '40px',
          textAlign: 'center',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          borderRadius: '8px',
          backgroundColor: '#f9f9f9',
        }}
      >
        <Result
          icon={<SmileOutlined style={{ color: '#52c41a', fontSize: '64px' }} />}
          title="Thank you for your booking!"
          subTitle="Your booking has been confirmed. We have sent the details to your email."
          status="success"
        />

        <Divider orientation="center" style={{ margin: '20px 0' }}>
          Booking Summary
        </Divider>

        <p><strong>Booking ID:</strong> #123456</p>
        <p><strong>Total Cost:</strong> $450</p>
        <p><strong>Check-in Date:</strong> Oct 10, 2024</p>
        <p><strong>Check-out Date:</strong> Oct 15, 2024</p>
        <p><strong>Location:</strong> New York City, USA</p>

        <Divider />

        <Button
          type="primary"
          size="large"
          style={{ marginTop: '20px', borderRadius: '5px', width: '100%' }}
          onClick={handleGoHome}
        >
          Back to Home
        </Button>
      </Card>
    </div>
  );
};

export default ConfirmationPage;
