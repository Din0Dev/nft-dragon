import React from "react";

const OurTeam = () => {
  const items = [];
  for (let i = 0; i < 8; i++) {
    items.push(
      <div className="col-span-3 our-team__list__item md:col-span-3 sm:grid-cols-6">
        <div className="our-team-img">
          <img src="img/ourteam/ourteam_frame.png" alt="" />
        </div>
      </div>
    );
  }

  return (
    <section className="our-team">
      <div className="bg-linear-red bg-shadow-red">
        <div className="row">
          <div className="col-12">
            <div className="text-fragment">
              <img src="/img/ourteam/ourteam_text.png" alt="" />
            </div>
          </div>
          <div className="our-team__list container sm:grid grid-cols-1 sm:grid-cols-12">
            {items}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
