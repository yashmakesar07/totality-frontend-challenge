// src/pages/HomePage.js
import React, { useEffect } from 'react';
import { Row, Col, Layout, Spin } from 'antd'; // Added Spin for loading state
import { useDispatch, useSelector } from 'react-redux';
import PropertyCard from '../components/PropertyCard'; // Import your PropertyCard component
import FilterComponent from '../components/FilterComponent'; // Import your FilterComponent
import { fetchProperties } from '../redux/Property/propertySlice'; // Import fetchProperties action

const { Content, Footer } = Layout;

const HomePage = () => {
  const dispatch = useDispatch();
  const properties = useSelector((state) => state.properties.properties);
  const propertyStatus = useSelector((state) => state.properties.status);
  const error = useSelector((state) => state.properties.error);

  useEffect(() => {
    if (propertyStatus === 'idle') {
      dispatch(fetchProperties());
      console.log("dispatched")
    }
  }, [propertyStatus, dispatch]);

  return (
    <Layout>
      <Content style={{ padding: '50px' }}>
        {propertyStatus === 'loading' && <Spin tip="Loading properties..." />}

        {propertyStatus === 'succeeded' && (
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
        )}

        {propertyStatus === 'failed' && (
          <div style={{ color: 'red' }}>Error: {error}</div>
        )}
      </Content>
      <Footer style={{ textAlign: 'center' }}>Property Rental Platform ©2024</Footer>
    </Layout>
  );
};

export default HomePage;
