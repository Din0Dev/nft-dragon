import React from "react";
import { Timeline } from "antd";

const RoadMap = (props) => {
  return (
    <div className="roadmap-common">
      <h3 className="text-xl text-white text-center md:text-3xl font-bold label-custom">ROADMAP</h3>
      <Timeline className="text-white" mode={"left"}>
        <Timeline.Item label="1ST APRILL 2022">
          <h3 className="text-xl text-white md:text-3xl font-bold">DRAGONS OF MIDGARD ALPHA VERSION WITH GAMEPLAY</h3>
          <p>The alpha version of the game will include the testing phase of the fundamentals of the gameplay. This stage will ensure the synchronization of the components in the game.</p>
        </Timeline.Item>
        <Timeline.Item label="15TH JUNE 2022">
          <h3 className="text-xl text-white md:text-3xl font-bold">DRAGONS OF MIDGARD ALPHA VERSION WITH GAMEPLAY</h3>
          <p>The alpha version of the game will include the testing phase of the fundamentals of the gameplay. This stage will ensure the synchronization of the components in the game.</p>
        </Timeline.Item>
        <Timeline.Item label="30th JULY 2022">
          <h3 className="text-xl text-white md:text-3xl font-bold">{`EXPERIENCE & ACHIEVEMENTS SYSTEM`}</h3>
          <p>The alpha version of the game will include the testing phase of the fundamentals of the gameplay. This stage will ensure the synchronization of the components in the game.</p>
        </Timeline.Item>
        <Timeline.Item label="1ST AUGUST 2022">
          <h3 className="text-xl text-white md:text-3xl font-bold">{`TOKAMAK TESTNET INTEGRATION`}</h3>
          <p>The Tokamak Test Network inclusion into the system allows the system to test the transactions in the game using dummy currency.</p>
        </Timeline.Item>
      </Timeline>
    </div>
  );
};

export default RoadMap;
