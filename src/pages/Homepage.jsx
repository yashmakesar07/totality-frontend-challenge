// src/pages/HomePage.js
import React, { useEffect, useState } from 'react';
import { Row, Col, Layout, Spin, Input, Select, Slider, Radio } from 'antd'; // Added Radio for sorting
import { useDispatch, useSelector } from 'react-redux';
import PropertyCard from '../components/PropertyCard'; // Import your PropertyCard component
import { fetchProperties } from '../redux/Property/propertySlice'; // Import fetchProperties action

const { Content, Footer } = Layout;
const { Option } = Select;

const HomePage = () => {
  const dispatch = useDispatch();
  const properties = useSelector((state) => state.properties.properties);
  const propertyStatus = useSelector((state) => state.properties.status);
  const error = useSelector((state) => state.properties.error);

  const [filteredProperties, setFilteredProperties] = useState([]);
  const [searchLocation, setSearchLocation] = useState('');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [bedrooms, setBedrooms] = useState(null);
  const [sortOrder, setSortOrder] = useState(''); // New state for sorting

  useEffect(() => {
    if (propertyStatus === 'idle') {
      dispatch(fetchProperties());
      console.log('dispatched');
    }
  }, [propertyStatus, dispatch]);

  useEffect(() => {
    // Filter and sort properties based on filters and sort order
    let filtered = properties;

    // Filter by location
    if (searchLocation) {
      filtered = filtered.filter((property) =>
        property.location.toLowerCase().includes(searchLocation.toLowerCase())
      );
    }

    // Filter by price range
    filtered = filtered.filter(
      (property) => property.price >= priceRange[0] && property.price <= priceRange[1]
    );

    // Filter by bedrooms
    if (bedrooms) {
      filtered = filtered.filter((property) => property.bedrooms === bedrooms);
    }

    // Sort properties based on sortOrder
    if (sortOrder === 'priceAsc') {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'priceDesc') {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    } else if (sortOrder === 'bedroomsAsc') {
      filtered = [...filtered].sort((a, b) => a.bedrooms - b.bedrooms);
    } else if (sortOrder === 'bedroomsDesc') {
      filtered = [...filtered].sort((a, b) => b.bedrooms - a.bedrooms);
    } else if (sortOrder === 'locationAsc') {
      filtered = [...filtered].sort((a, b) =>
        a.location.localeCompare(b.location)
      );
    } else if (sortOrder === 'locationDesc') {
      filtered = [...filtered].sort((a, b) =>
        b.location.localeCompare(a.location)
      );
    }

    setFilteredProperties(filtered);
  }, [searchLocation, priceRange, bedrooms, sortOrder, properties]);

  return (
    <Layout>
      <Content style={{ padding: '50px' }}>
        {propertyStatus === 'loading' && <Spin tip="Loading properties..." />}

        {propertyStatus === 'succeeded' && (
          <Row gutter={16}>
            {/* Filter Section */}
            <Col span={5}>
              <div style={{ padding: '10px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
                <h3>Filter Properties</h3>

                {/* Location Filter */}
                <Input
                  placeholder="Search by location"
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                  style={{ marginBottom: '20px' }}
                />

                {/* Price Range Filter */}
                <div>
                  <h4>Price Range</h4>
                  <Slider
                    range
                    step={10}
                    min={0}
                    max={1000}
                    defaultValue={[0, 1000]}
                    value={priceRange}
                    onChange={(value) => setPriceRange(value)}
                  />
                  <p>
                    {priceRange[0]} - {priceRange[1]} $
                  </p>
                </div>

                {/* Bedrooms Filter */}
                <div style={{ marginTop: '20px' }}>
                  <h4>Bedrooms</h4>
                  <Select
                    placeholder="Select bedrooms"
                    value={bedrooms}
                    onChange={(value) => setBedrooms(value)}
                    style={{ width: '100%' }}
                  >
                    <Option value={null}>Any</Option>
                    <Option value={1}>1</Option>
                    <Option value={2}>2</Option>
                    <Option value={3}>3</Option>
                    <Option value={4}>4</Option>
                    <Option value={5}>5</Option>
                  </Select>
                </div>

                {/* Sorting Section */}
                <div style={{ marginTop: '20px' }}>
                  <h4>Sort By</h4>
                  <Radio.Group
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                    style={{ display: 'flex', flexDirection: 'column' }}
                  >
                    <Radio value="priceAsc">Price: Low to High</Radio>
                    <Radio value="priceDesc">Price: High to Low</Radio>
                    <Radio value="bedroomsAsc">Bedrooms: Few to Many</Radio>
                    <Radio value="bedroomsDesc">Bedrooms: Many to Few</Radio>
                    <Radio value="locationAsc">Location: A to Z</Radio>
                    <Radio value="locationDesc">Location: Z to A</Radio>
                  </Radio.Group>
                </div>
              </div>
            </Col>

            {/* Property Listings */}
            <Col span={19}>
              <Row gutter={[16, 16]}>
                {filteredProperties.length > 0 ? (
                  filteredProperties.map((property) => (
                    <Col span={8} key={property.id}>
                      <PropertyCard property={property} />
                    </Col>
                  ))
                ) : (
                  <p>No properties match the selected criteria.</p>
                )}
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
