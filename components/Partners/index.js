import React from "react";

const Partners = () => {
  const items = [];
  for (let i = 0; i < 8; i++) {
    items.push(
      <div className="col-span-3 partners__list__item">
        <div className="partners-img">
          <img src="img/partners/partners_frame.png" alt="" />
        </div>
      </div>
    );
  }

  return (
    <section className="partners">
      <div className="row">
        <div className="col-12">
          <div className="text-fragment">
            <img src="/img/partners/partners_text.png" alt="" />
          </div>
        </div>
        <div className="partners__list container sm:grid grid-cols-1 sm:grid-cols-12">
          {items}
        </div>
      </div>
    </section>
  );
};

export default Partners;
