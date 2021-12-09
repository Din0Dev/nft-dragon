import React from "react";

const RoadItem = (props) => {
  const {
    dataId = "046baf0c-9b4c-ea28-05a2-50fd0f70aa61",
    wNodeIdLeft = "w-node-_046baf0c-9b4c-ea28-05a2-50fd0f70aa62-718776cd",
    wNodeIdCenter = "w-node-_046baf0c-9b4c-ea28-05a2-50fd0f70aa65-718776cd",
    wNodeIdRight = "w-node-_046baf0c-9b4c-ea28-05a2-50fd0f70aa67-718776cd",
    timeline = "1st April 2022",
    heading = "Dragons of Midgard Alpha Version with gameplay",
    description = `The alpha version of the game will include the testing phase of the
        fundamentals of the gameplay. This stage will ensure the
        synchronization of the components in the game.`,
  } = props;
  return (
    <div data-w-id={dataId} className="timeline_item-2">
      <div id={wNodeIdLeft} className="timeline_left">
        <div className="timeline_date-text">{timeline}</div>
      </div>
      <div id={wNodeIdCenter} className="timeline_centre">
        <div className="timeline_circle"></div>
      </div>
      <div id={wNodeIdRight} className="timeline_right">
        <div className="margin-bottom-xlarge">
          <div className="timeline_text-2">
            <h2>{heading}</h2>
            <br />
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadItem;
