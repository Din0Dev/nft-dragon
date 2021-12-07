import React from "react";

const Banner = (props) => {
  return (
    <div className="banner">
      <div className="banner__inner">
        <div className="banner__label">
          <h3>
            {`DRAGON WARS`}
            <br />
            {`Let's Play`}
          </h3>
          <p>
            Dragon War - Buy eggs to hatch dragons, raise them then join
            battleground to earn rewards!
          </p>
        </div>
        <div className="banner__label_btn">
          <button className="btn-orange gd-btn">Get Dragon</button>
          <button className="btn-orange clw-btn">Join Our Community</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
