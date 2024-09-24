import React from 'react';
import { Row, Col, Layout, Select, Slider } from 'antd';
import Header from '../components/Header'; // Import your Header component
import PropertyCard from '../components/PropertyCard'; // Import your PropertyCard component

const { Content, Footer } = Layout;
const { Option } = Select;

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
      <Header /> {/* Render your Header component */}
      <Content style={{ padding: '50px' }}>
        <Row gutter={16}>
          {/* Filter Section */}
          <Col span={6}>
            <h3>Filters</h3>
            <Select
              placeholder="Select Location"
              style={{ width: '100%', marginBottom: '20px' }}
            >
              <Option value="Goa">Goa</Option>
              <Option value="Mumbai">Mumbai</Option>
              <Option value="Kerala">Kerala</Option>
            </Select>
            <h4>Price Range</h4>
            <Slider range defaultValue={[0, 500]} min={0} max={500} />
          </Col>

          {/* Property Listings */}
          <Col span={18}>
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
