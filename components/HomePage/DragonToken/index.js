import React from "react";
import Image from "next/image";

const DragonToken = (props) => {
  return (
    <div className="dragon_token bg-shadow-red">
      <div className="bg-linear-red">
        <div className="rounded-lg overflow-hidden">
          <div className="sm:grid grid-cols-1 sm:grid-cols-10">
            <div className="text-fragment col-span-10">
              <img src="/img/gameplay/gameplay_text.png" alt="" />
            </div>
            <div className="dragon_token__video col-span-10">
              <div className="col-span-5 dragon_token__video__frame">
                <img
                  src="/img/gameplay/gameplay_frame_video.png"
                  className="dragon_token__video__frame_img"
                  alt=""
                />
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
    </div>
  );
};

export default DragonToken;
