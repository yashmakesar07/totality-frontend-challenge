// src/components/Header.js
import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

const { Header } = Layout;

const HeaderComponent = () => {
  return (
    <Header style={{ background: "#FFFFFF", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)" }}>
      <div style={{ float: "left", color: "#4A90E2", fontSize: "24px", fontWeight: "bold" }}>
        Rent Spot
      </div>
      <Menu mode="horizontal" style={{ float: "right", paddingRight: 40, lineHeight: '64px' }}>
        <Menu.Item key="1">
          <Link to="/" style={{ color: "#333333" }}>Home</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/cart" style={{ color: "#333333" }}>Cart</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/login" style={{ color: "#333333" }}>Login</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default HeaderComponent;
