import React from "react";

const CardItem = () => {
  const imgstyle = { maxHeight: "12px", maxWidth: "12px", width: "12px" };
  return (
    <a className="card-item">
      {/* ID/GEN */}
      <div className="flex justify-between id-gen">
        <div className="flex justify-between">
          <div className="flex items-center">
            <span className="span-common py-1 px-1 rounded-xl bg-earth text-white px-2 sm:px-3 text-xs sm:text-sm pt-0.5 pb-0.5">
              #1552
            </span>
            <span className="span-common py-1 px-1 rounded-xl text-white px-2 sm:px-3 text-xs sm:text-sm pt-0.5 pb-0.5 bg-blue2 ml-1">
              Gen 0
            </span>
          </div>
        </div>
      </div>
      {/* Level */}
      <div className="flex justify-between mt-2">
        <div className="flex flex-col">
          <span className="py-1 px-1 rounded-xl text-white px-2 sm:px-3 text-xs sm:text-sm pt-0.5 pb-0.5 bg-blue2">
            <span className="span-common hidden sm:inline">Potential 5</span>
          </span>
          <div className="flex items-center">
            <span className="py-1 px-1 rounded-xl bg-earth px-1 py-1"></span>
            <span className="pl-1 sm:pl-2 capitalize text-xs sm:text-sm-md">
              earth
            </span>
          </div>
          <p className="opacity-50 text-xs sm:text-sm-md">Level: 4</p>
        </div>
        <div className="flex flex-col items-end h-12">
          <span className="span-common py-1 px-1 rounded-xl bg-blue2 text-white px-2 text-xs sm:text-sm pt-0.5 pb-0.5 ml-1">
            Rapid (1m)
          </span>
          <p
            className="rounded-l-xl text-sm sm:text-sm-md px-6 pl-3 text-white mt-1.5 transform translate-x-2.5"
            style={{backgroundImage: 'linear-gradient(to right, rgb(72, 202, 228), rgb(0, 104, 180))'}}
          >
            For sale
          </p>
        </div>
      </div>
        {/* IMG */}
        <div className="flex justify-center h-32 sm:h-36 py-3 relative">
          <img
            src="https://devabcde-api.dragonwars.game/resource/dragons/1552/250x1552.png"
            className="h-full"
          />
        </div>
        {/* INFO */}
        <div className="grid grid-cols-3 mt-2">
          <div className="flex justify-center items-center">
            <img src="/icon/health.svg" style={imgstyle} />
            <div className="text-white ml-2">
              <p className="text-sm-md">16</p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img src="/icon/generation.svg" style={imgstyle} />
            <div className="text-white ml-2">
              <p className="text-sm-md">18</p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img src="/icon/attack.svg" style={imgstyle} />
            <div className="text-white ml-2">
              <p className="text-sm-md">16</p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img src="/icon/defend.svg" style={imgstyle} />
            <div className="text-white ml-2">
              <p className="text-sm-md">19</p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img src="/icon/speed.svg" style={imgstyle} />
            <div className="text-white ml-2">
              <p className="text-sm-md">17</p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img src="/icon/morale.svg" style={imgstyle} />
            <div className="text-white ml-2">
              <p className="text-sm-md">19</p>
            </div>
          </div>
        </div>
        {/* STATIC */}
        <div className="grid grid-cols-2 my-1">
          <p className="text-center text-sm-md">
            <span className="text-xs text-white50 block sm:inline">XP:</span>{" "}
            300
          </p>
          <p className="text-center text-sm-md">
            <span className="text-xs text-white50 block sm:inline">Stats:</span>{" "}
            105
          </p>
        </div>
        {/*  */}
        <div className="h-9 mt-2.5">
          <p className="text-white text-center font-bold text-sm-md sm:text-md">
            20,000 KAI
          </p>
          <p className="text-white text-center text-xs opacity-50">~1,529.9$</p>
        </div>
    </a>
  );
};

export default CardItem;
