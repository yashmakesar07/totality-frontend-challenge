// src/components/FilterComponent.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Select, Slider, Checkbox } from 'antd';
import { setLocation, setPriceRange, setBedrooms, setAmenities } from '../redux/Property/propertySlice';

const { Option } = Select;

const amenitiesOptions = ['Pool', 'Gym', 'Wi-Fi', 'Parking'];

const FilterComponent = () => {
  const dispatch = useDispatch();
  const { location, priceRange, bedrooms, amenities } = useSelector((state) => state.properties.filters);

  const handleLocationChange = (value) => {
    dispatch(setLocation(value));
  };

  const handlePriceRangeChange = (value) => {
    dispatch(setPriceRange(value));
  };

  const handleBedroomsChange = (value) => {
    dispatch(setBedrooms(value));
  };

  const handleAmenitiesChange = (checkedValues) => {
    dispatch(setAmenities(checkedValues));
  };

  return (
    <div>
      <h3>Filters</h3>

      {/* Location Filter */}
      <Select
        placeholder="Select Location"
        style={{ width: '100%', marginBottom: '20px' }}
        onChange={handleLocationChange}
        value={location}
      >
        <Option value="Goa">Goa</Option>
        <Option value="Mumbai">Mumbai</Option>
        <Option value="Kerala">Kerala</Option>
      </Select>

      {/* Price Range Filter */}
      <h4>Price Range</h4>
      <Slider
        range
        min={0}
        max={1000}
        onChange={handlePriceRangeChange}
        value={priceRange}
      />

      {/* Bedrooms Filter */}
      <h4>Number of Bedrooms</h4>
      <Select
        placeholder="Select Bedrooms"
        style={{ width: '100%', marginBottom: '20px' }}
        onChange={handleBedroomsChange}
        value={bedrooms}
      >
        <Option value={1}>1 Bedroom</Option>
        <Option value={2}>2 Bedrooms</Option>
        <Option value={3}>3 Bedrooms</Option>
        <Option value={4}>4 Bedrooms</Option>
      </Select>

      {/* Amenities Filter */}
      <h4>Amenities</h4>
      <Checkbox.Group
        options={amenitiesOptions}
        value={amenities}
        onChange={handleAmenitiesChange}
      />
    </div>
  );
};

export default FilterComponent;
