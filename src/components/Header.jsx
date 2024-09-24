import React from 'react';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

const HeaderComponent = () => {
  return (
    <Header style={{ background: '#fff' }}>
      <div style={{ float: 'left', color: '#000', fontSize: '24px' }}>
        StayScape
      </div>
      <Menu mode="horizontal" style={{ float: 'right', paddingRight: 40 }}>
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">Cart</Menu.Item>
        <Menu.Item key="3">Login</Menu.Item>
      </Menu>
    </Header>
  );
};

export default HeaderComponent;
