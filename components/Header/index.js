import LocaleSwitcher from "components/LocaleSwitcher";
import React from "react";
import Image from 'next/image'
import { Layout, Menu } from "antd";
const { Header, Content, Footer } = Layout;

const HeaderLayout = (props) => {
  //! State

  //! Function

  //! Render
  return (
    <Header className="header-layout">
      <div className="header-layout-inner">
        <div className="logo">
          <img src="img/logo.png" alt=""/>
        </div>
        <Menu className="header-layout__menu" defaultSelectedKeys={["2"]}>
          <Menu.Item>Matketplace</Menu.Item>
          <Menu.Item>Breed</Menu.Item>
          <Menu.Item>My Dragons</Menu.Item>
          <Menu.Item>Events</Menu.Item>
          <Menu.Item>Get DRAGON</Menu.Item>
        </Menu>
        <div className="header-layout__button">
          <button className="btn-blue sb-btn">Start Battle</button>
          <button className="btn-blue clw-btn">Collect wallet</button>
        </div>
      </div>
    </Header>
  );
};

export default HeaderLayout;
