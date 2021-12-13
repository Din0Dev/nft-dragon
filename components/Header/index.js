import LocaleSwitcher from "components/LocaleSwitcher";
import React, { useState } from "react";
import Image from "next/image";
import { Layout, Menu } from "antd";
const { Header, Content, Footer } = Layout;

const HeaderLayout = (props) => {
  //! State
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  //! Function
  const handleChange = () => {
    setIsOpenMenu(true);
  };

  const onCloseMenu = () => {
    setIsOpenMenu(false);
  };
  //! Render
  return (
    <header className="header-layout bg-primary relative flex justify-between items-center shadow-lg">
      <div className="header-layout-inner max-w-screen-xl mx-auto flex justify-between items-center flex-1">
        <div className="relative logo">
          <a className="flex items-center logo-header sm:flex" href="#/">
            <img alt="logo" src="img/logo.png" />
          </a>
        </div>
        <Menu
          className="header-layout__menu hidden lg:flex flex-wrap justify-center md:h-full"
          defaultSelectedKeys={["2"]}
        >
          <Menu.Item>HOME</Menu.Item>
            <Menu.Item>Matketplace</Menu.Item>
            <Menu.Item>Tokenomics</Menu.Item>
            <Menu.Item>Roadmap</Menu.Item>
            <Menu.Item>Partner</Menu.Item>
        </Menu>
        {/*  */}
        <div className="header-layout__button">
          {/* <button className="btn-blue sb-btn">Start Battle</button>
          <button className="btn-blue clw-btn">Collect wallet</button> */}
          <div
            className="header-layout__button_hamburger p-4 space-y-2 rounded shadow"
            onClick={handleChange}
          >
            <span className="block w-8 h-0.5 bg-gray-100"></span>
            <span className="block w-8 h-0.5 bg-gray-100"></span>
            <span className="block w-8 h-0.5 bg-gray-100"></span>
          </div>
        </div>
        {/*  */}
        <div
          className={`menu-mobile transition-transform h-full duration-200 shadow-lg absolute left-full z-50 bg-primary w-full h-auto py-4 w-screen menu-slide-mobile transform ${
            isOpenMenu ? "-translate-x-full" : "-translate-x-0"
          } `}
        >
          {/* CLOSE BUTTON */}
          <div className="flex flex-row justify-end">
            <div
              className="rounded p-3 bg-dropdown-item-hover mr-4 cursor-pointer"
              onClick={onCloseMenu}
            >
              <img src="icon/close.svg" />
            </div>
          </div>
          <div className="flex justify-center mb-5">
            <img src="img/logo.png" />
          </div>
          <Menu
            className="header-layout__menu_mobile hidden lg:flex flex-wrap justify-center md:h-full"
            defaultSelectedKeys={["2"]}
            mode="inline"
          >
            <Menu.Item>HOME</Menu.Item>
            <Menu.Item>Matketplace</Menu.Item>
            <Menu.Item>Tokenomics</Menu.Item>
            <Menu.Item>Roadmap</Menu.Item>
            <Menu.Item>Partner</Menu.Item>
          </Menu>
        </div>
      </div>
    </header>
  );
};

export default HeaderLayout;
