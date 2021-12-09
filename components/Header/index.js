import LocaleSwitcher from "components/LocaleSwitcher";
import React from "react";
import Image from "next/image";
import { Layout, Menu } from "antd";
const { Header, Content, Footer } = Layout;

const HeaderLayout = (props) => {
  //! State

  //! Function

  //! Render
  return (
    <Header className="header-layout bg-primary py-4 xl:py-0 px-2 relative z-50 flex justify-between items-center shadow-lg">
      <div className="header-layout-inner max-w-screen-xl mx-auto flex justify-between items-center flex-1">
        <div className="relative logo">
          <a className="flex items-center logo-header sm:flex" href="#/">
            <img alt="logo" src="img/logo.png" />
          </a>
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
