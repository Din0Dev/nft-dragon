import React from "react";
import Image from "next/image";

const DragonToken = (props) => {
  return (
    <div className="dragon_token bg-shadow-red">
      <div className="rounded-lg overflow-hidden">
        <div className="sm:grid grid-cols-1 sm:grid-cols-10">
          <div className="dragon_token__video col-span-10">
            <div className="col-span-5 dragon_token__video__frame">
              <div className="dragon_token__video__frame_video">
                <iframe
                  width="710"
                  height="450"
                  src="https://www.youtube.com/embed/Tga7PbY1Jig"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="col-span-5 dragon_token__video__note">
              <img
                src="/img/gameplay/gameplay_note.png"
                className="dragon_token__video__note_img"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DragonToken;
