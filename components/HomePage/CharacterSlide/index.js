import React from "react";
import Slider from "react-slick";

const CharacterSlide = () => {
  //! Function
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style }}
        onClick={onClick}
      />
    );
  }

  //! State
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    initialSlide: 0,
    nextArrow: <SampleNextArrow className="arrow-slide next-arrow" />,
    prevArrow: <SamplePrevArrow className="arrow-slide prev-arrow" />,
    responsive: [
      {
        breakpoint: 1290,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  //! Render
  return (
    <div className="mx-4 md:mx-10 my-12 mt-0">
      <div className="container max-w-screen-md m-auto">
        <Slider {...settings}>
          {/*  */}
          <div className="m-auto h-full col-span-1 pt-4 w-full">
            <div className="mx-4 md:mx-1 card-reposive">
              <div className="rounded-lg border-4 lg:border-8 overflow-hidden h-full border-blue2 p-0 mt-12 md:mt-16 flex justify-center items-end home-card-dragon bg-center bg-no-repeat bg-cover bg-amry">
                <div className="text-white text-center py-6 md:py-8 w-full px-4 bg-blur-black">
                  <h3 className="text-xl text-white  md:text-3xl font-bold">
                    Army
                  </h3>
                  <div className="mt-1.5" style={{ minHeight: "48px" }}>
                    Own your dragons with many different skills based on their
                    genes
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="m-auto h-full col-span-1 pt-4 w-full">
            <div className="mx-4 md:mx-1 card-reposive">
              <div className="rounded-lg border-4 lg:border-8 overflow-hidden h-full border-blue2 p-0 mt-12 md:mt-16 flex justify-center items-end home-card-dragon bg-center bg-no-repeat bg-cover bg-tournament">
                <div className="text-white text-center py-6 md:py-8 w-full px-4 bg-blur-black">
                  <h3 className="text-xl text-white md:text-3xl font-bold">
                    Tournament
                  </h3>
                  <div className="mt-1.5" style={{ minHeight: "48px" }}>
                    <p>
                      PvP battle to earn real <br /> money rewards
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="m-auto h-full col-span-1 pt-4 w-full">
            <div className="mx-4 md:mx-1 card-reposive">
              <div className="rounded-lg border-4 lg:border-8 overflow-hidden h-full border-blue2 p-0 mt-12 md:mt-16 flex justify-center items-end home-card-dragon bg-center bg-no-repeat bg-cover bg-char3">
                <div className="text-white text-center py-6 md:py-8 w-full px-4 bg-blur-black">
                  <h3 className="text-xl text-white md:text-3xl font-bold">
                    Tournament
                  </h3>
                  <div className="mt-1.5" style={{ minHeight: "48px" }}>
                    <p>
                      PvP battle to earn real <br /> money rewards
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="m-auto h-full col-span-1 pt-4 w-full">
            <div className="mx-4 md:mx-1 card-reposive">
              <div className="rounded-lg border-4 lg:border-8 overflow-hidden h-full border-blue2 p-0 mt-12 md:mt-16 flex justify-center items-end home-card-dragon bg-center bg-no-repeat bg-cover bg-char4">
                <div className="text-white text-center py-6 md:py-8 w-full px-4 bg-blur-black">
                  <h3 className="text-xl text-white md:text-3xl font-bold">
                    Tournament
                  </h3>
                  <div className="mt-1.5" style={{ minHeight: "48px" }}>
                    <p>
                      PvP battle to earn real <br /> money rewards
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="m-auto h-full col-span-1 pt-4 w-full">
            <div className="mx-4 md:mx-1 card-reposive">
              <div className="rounded-lg border-4 lg:border-8 overflow-hidden h-full border-blue2 p-0 mt-12 md:mt-16 flex justify-center items-end home-card-dragon bg-center bg-no-repeat bg-cover bg-char5">
                <div className="text-white text-center py-6 md:py-8 w-full px-4 bg-blur-black">
                  <h3 className="text-xl text-white md:text-3xl font-bold">
                    Tournament
                  </h3>
                  <div className="mt-1.5" style={{ minHeight: "48px" }}>
                    <p>
                      PvP battle to earn real <br /> money rewards
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* -- */}
        </Slider>
      </div>
    </div>
  );
};

export default CharacterSlide;
