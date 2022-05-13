import React from "react";
import Slider from "react-slick";

const CharacterSlide = () => {
  //! Function
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <img
        src="icon/button_next.png"
        className={className}
        style={{ ...style }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <img
        src="icon/button_prev.png"
        className={className}
        style={{ ...style }}
        onClick={onClick}
      />
    );
  }

  //! State
  var settings = {
    dots: false,
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    autoplay: false,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: "30px",
        },
      },
    ],
    centerPadding: "60px",
    nextArrow: <SampleNextArrow className="arrow-slide next-arrow" />,
    prevArrow: <SamplePrevArrow className="arrow-slide prev-arrow" />,
  };

  const imgs = [{}];
  //! Render
  return (
    <div className="hero">
      <div className=" character-slide container m-auto">
        <div className="text-fragment">
          <img src="/img/hero/hero_text.png" alt="" />
        </div>
        <Slider {...settings}>
          {/*  */}
          <div className="m-auto h-full col-span-1 pt-4">
            <div className="card-reposive">
              <div className="home-card-dragon bg-center bg-no-repeat bg-cover bg-char4"></div>
            </div>
          </div>
          {/*  */}
          <div className="m-auto h-full col-span-1 pt-4">
            <div className="card-reposive">
              <div className="home-card-dragon bg-center bg-no-repeat bg-cover bg-char3"></div>
            </div>
          </div>
          {/*  */}
          <div className="m-auto h-full col-span-1 pt-4">
            <div className="card-reposive">
              <div className="home-card-dragon bg-center bg-no-repeat bg-cover bg-char5"></div>
            </div>
          </div>
          {/*  */}
          <div className="m-auto h-full col-span-1 pt-4">
            <div className="card-reposive">
              <div className="home-card-dragon bg-center bg-no-repeat bg-cover bg-char4"></div>
            </div>
          </div>
          {/*  */}
          <div className="m-auto h-full col-span-1 pt-4">
            <div className="card-reposive">
              <div className="home-card-dragon bg-center bg-no-repeat bg-cover bg-char5"></div>
            </div>
          </div>
          {/* -- */}
        </Slider>
      </div>
    </div>
  );
};

export default CharacterSlide;
