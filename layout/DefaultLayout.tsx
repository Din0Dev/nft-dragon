import { Content } from "antd/lib/layout/layout";
import FooterLayout from "components/Footer";
import React, { Fragment } from "react";
import HeaderLayout from "../components/Header/index";

const DefaultLayout: React.FC = ({ children }) => {
  //! State

  //! Function

  //! Render
  return (
    <div id="root">
      <HeaderLayout />
        {children}
      <FooterLayout />
    </div>
  );
};

export default DefaultLayout;
