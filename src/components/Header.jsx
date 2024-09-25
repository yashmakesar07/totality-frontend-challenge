// src/components/Header.js
import React from "react";
import { Layout, Menu, Badge } from "antd"; // Corrected imports
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { HiOutlineHeart, HiOutlineHome, HiOutlineShoppingCart,HiOutlineUser } from "react-icons/hi";

const { Header } = Layout;

const HeaderComponent = () => {
  const bookedProperties = useSelector((state) => state.cart.cartItems);
  const cartCount = 5; // Example cart count

  return (
    <Header style={{ background: "#FFFFFF", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)" }}>
      <div style={{ float: "left", color: "#4A90E2", fontSize: "24px", fontWeight: "bold" }}>
        Rent Spot
      </div>
      <Menu mode="horizontal" style={{ float: "right", lineHeight: '64px' }}>
        <Menu.Item key="1">
        <Link to="/" style={{ color: "#333333" }}>
          <HiOutlineHome size={20} />
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
            <Badge dot >
            <Link to="/cart" style={{ color: "#333333" }}>
            <HiOutlineHeart  size={20}/>
          </Link>
            </Badge>
        </Menu.Item>
        <Menu.Item key="3">
            <Badge count={`${bookedProperties.length}`} offset={[10,0]} showZero>
            <Link to="/cart" style={{ color: "#333333" }}>
            <HiOutlineShoppingCart  size={20}/>
          </Link>
            </Badge>
        </Menu.Item>
        <Menu.Item key="4">
         <HiOutlineUser size={20} />
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default HeaderComponent;
