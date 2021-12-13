import React from "react";

const Banner = (props) => {
  return (
    <div className="banner">
      <div className="banner__inner">
        <div className="banner__label">
          <h3>
            {`Dragon-Tyrant`}
            <br />
            {`Metaverse`}
          </h3>
          <p>
            Dragon-Tyrant is an MMORPG game based on blockchain
            technology.Dragon-Tyrant is an MMORPG game based on blockchain
            technology.
          </p>
          <br/>
          <p>
            You can gather your friends, form a team, a country, fight with
            others and earn money just with your skills.
          </p>
        </div>
        {/* <div className="banner__label_btn">
          <button className="btn-orange gd-btn">Get Dragon</button>
          <button className="btn-orange clw-btn">Join Our Community</button>
        </div> */}
      </div>
    </div>
  );
};

export default Banner;
