// HOOK'S
import React from "react";
import { NavLink } from "react-router-dom";

// COMPONENTS

// REDUX

// LIBRARY
import { Menu } from "antd";

import {
  HomeOutlined,
  InfoCircleOutlined,
  FormOutlined,
  StarOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

// CSS
import "./nav-bar.css";

// JAVASCRIP
const { Item } = Menu;

function NavBar() {
  return (
    <div className="conteiner-navBar">
      <Menu theme="dark" mode="horizontal" className="menu">
        <Item key="home" icon={<HomeOutlined />}>
          <NavLink to="/home">Home</NavLink>
        </Item>
        <Item key="about" icon={<InfoCircleOutlined />}>
          <NavLink to="/about">About</NavLink>
        </Item>
        <Item key="form" icon={<FormOutlined />}>
          <NavLink to="/form">Create</NavLink>
        </Item>
        <Item key="favorite" icon={<StarOutlined />}>
          <NavLink to="/favorite">Favorite</NavLink>
        </Item>
        <Item key="logout" icon={<LogoutOutlined />}>
          <NavLink to="/">Salir</NavLink>
        </Item>
      </Menu>
    </div>
  );
}

export default NavBar;
