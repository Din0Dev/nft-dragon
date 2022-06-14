import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";

const { Footer } = Layout;

const FooterLayout = () => {
  //! State
  const socialList = [
    {
      id: 1,
      src: "img/footer/frame_facebook.png",
    },
    {
      id: 2,
      src: "img/footer/frame_twitter.png",
    },
    {
      id: 3,
      src: "img/footer/frame_telegram.png",
    },
    {
      id: 4,
      src: "img/footer/frame_discord.png",
    },
  ];

  const downloadApp = [
    {
      id: 1,
      src: "img/footer/download_appstore.png",
    },
    {
      id: 2,
      src: "img/footer/download_chplay.png",
    },
  ];
  //! Function

  //! Render
  return (
    <Footer className="footer bg-color-primary">
      <div className="footer_container">
        <div className="footer__logo">
          <div className="footer__logo_img">
            <img src="img/logo.png" alt="" />
          </div>
        </div>
      </div>
      <div className="footer__social_list">
        {socialList.map((el) => (
          <div key={el.id} className="col-span-3">
            <img className="footer__social_list_item" src={el.src} />
          </div>
        ))}
      </div>
      <div className="footer__download_list">
        {downloadApp.map((el) => (
          <div key={el.id} className=" col-span-3">
            <img className="footer__download_list_item" src={el.src} />
          </div>
        ))}
      </div>
      <div className="footer__copyright">
        <span className="footer__copyright__text">
          Copyright © 2021, Dragontyrant. All Rights Reserved
        </span>
      </div>
    </Footer>
  );
};

export default FooterLayout;
