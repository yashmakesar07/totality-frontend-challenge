
// src/components/FilterComponent.js
import React from 'react';
import { Select, Slider } from 'antd';

const { Option } = Select;

const FilterComponent = () => {
  return (
    <div>
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
    </div>
  );
};

export default FilterComponent;
