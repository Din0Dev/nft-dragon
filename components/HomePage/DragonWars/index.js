import React from "react";

const DragonWars = () => {
  return (
    <div className="container max-w-screen-xl m-auto pb-20 px-4">
      <div className="rounded-lg overflow-hidden">
        <div className="shadow-md bg-cover bg-center bg-no-repeat h-48 sm:h-60 md:h-72 lg:h-80 xl:h-96 bg-dragonwars">
          <div className="flex items-end justify-center w-full h-full p-5">
            <div className="flex flex-col">
              {/* <h3 className="text-white font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl max-w-md">
                Dragon Wars
              </h3> */}
              <div
                className="mt-1.5 text-white text-md"
                style={{ minHeight: "48px",marginBottom: '3rem', maxWidth: "600px" }}
              >{`"Dragon-Tyrant builds a virtual world: Waste Land. That place was still reeling from the war between humans and Dragons.
Players can earn tokens through quests, build a clan and even their own country."`}</div>
              <div>
                {/* <button className="flex items-center justify-center border-white text-white font-bold border-2 rounded-3xl py-1.5 px-6 sm:py-2 sm:px-7 mt-5 btn-blue">
                  Buy Dragon{" "}
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DragonWars;
