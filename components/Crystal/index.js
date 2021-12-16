import React from "react";

const Crystal = (props) => {
  const {
    isGreen = false,
    isBlue = false,
    isPink = false,
    isPurple = false,
    isYellow = false,
    isOrange = false,
    position = "",
    className = "",
    style = {},
  } = props;

  return (
    <div className={`crystal ${position}`}>
      {isGreen ? (
        <embed
          src="img/crystal/gem-green.svg"
          className={`crystal__img ${className}`}
          style={style}
        ></embed>
      ) : (
        ""
      )}
      {isBlue ? (
        <embed
          src="img/crystal/gem-blue.svg"
          className={`crystal__img ${className}`}
          style={style}
        ></embed>
      ) : (
        ""
      )}
      {isPink ? (
        <embed
          src="img/crystal/gem-pink.svg"
          className={`crystal__img ${className}`}
          style={style}
        ></embed>
      ) : (
        ""
      )}
      {isPurple ? (
        <embed
          src="img/crystal/gem-purple.svg"
          className={`crystal__img ${className}`}
          style={style}
        ></embed>
      ) : (
        ""
      )}
      {isYellow ? (
        <embed
          src="img/crystal/gem-yellow.svg"
          className={`crystal__img ${className}`}
          style={style}
        ></embed>
      ) : (
        ""
      )}
      {isOrange ? (
        <embed
          src="img/crystal/gem-orange.svg"
          className={`crystal__img ${className}`}
          style={style}
        ></embed>
      ) : (
        ""
      )}
    </div>
  );
};

export default Crystal;
