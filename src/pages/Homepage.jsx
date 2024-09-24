// src/pages/HomePage.js
import React from 'react';
import { Row, Col, Layout } from 'antd'; // Import your Header component
import PropertyCard from '../components/PropertyCard'; // Import your PropertyCard component
import FilterComponent from '../components/FilterComponent'; // Import your FilterComponent

const { Content, Footer } = Layout;

const HomePage = () => {
  const properties = [
    {
      id: 1,
      title: 'Luxury Villa',
      description: 'A beautiful villa with a pool and garden.',
      price: 250,
      location: 'Goa',
      bedrooms: 3,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      title: 'Cozy Apartment',
      description: 'A modern apartment in the city center.',
      price: 120,
      location: 'Mumbai',
      bedrooms: 2,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      title: 'Beach House',
      description: 'Enjoy the beach with this seaside house.',
      price: 300,
      location: 'Kerala',
      bedrooms: 4,
      image: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <Layout>
      <Content style={{ padding: '50px' }}>
        <Row gutter={16}>
          {/* Filter Section */}
          <Col span={5}>
            <FilterComponent /> {/* Use the FilterComponent */}
          </Col>

          {/* Property Listings */}
          <Col span={19}>
            <Row gutter={[16, 16]}>
              {properties.map((property) => (
                <Col span={8} key={property.id}>
                  <PropertyCard property={property} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Property Rental Platform ©2024</Footer>
    </Layout>
  );
};

export default HomePage;
