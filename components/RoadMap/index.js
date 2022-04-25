import React from "react";

const RoadMap = () => {
  const listRoadItem = [
    {
      dataId: "046baf0c-9b4c-ea28-05a2-50fd0f70aa61",
      wNodeIdLeft: "w-node-_046baf0c-9b4c-ea28-05a2-50fd0f70aa62-718776cd",
      wNodeIdCenter: "w-node-_046baf0c-9b4c-ea28-05a2-50fd0f70aa65-718776cd",
      wNodeIdRight: "w-node-_046baf0c-9b4c-ea28-05a2-50fd0f70aa67-718776cd",
      timeline: "1st April 2022",
      heading: "Dragons of Midgard Alpha Version with gameplay",
      description: `The alpha version of the game will include the testing phase of the
        fundamentals of the gameplay. This stage will ensure the
        synchronization of the components in the game.`,
    },
    {
      dataId: "046baf0c-9b4c-ea28-05a2-50fd0f70aa89",
      wNodeIdLeft: "w-node-_046baf0c-9b4c-ea28-05a2-50fd0f70aa8a-718776cd",
      wNodeIdCenter: "w-node-_046baf0c-9b4c-ea28-05a2-50fd0f70aa8d-718776cd",
      timeline: "1st April 2022",
      heading: "Dragons of Midgard Alpha Version with gameplay",
      description: `The alpha version of the game will include the testing phase of the
          fundamentals of the gameplay. This stage will ensure the
          synchronization of the components in the game.`,
    },
    {
      dataId: "046baf0c-9b4c-ea28-05a2-50fd0f70aa97",
      wNodeIdLeft: "w-node-_046baf0c-9b4c-ea28-05a2-50fd0f70aa98-718776cd",
      wNodeIdCenter: "w-node-_046baf0c-9b4c-ea28-05a2-50fd0f70aa9b-718776cd",
      timeline: "1st April 2022",
      heading: "Dragons of Midgard Alpha Version with gameplay",
      description: `The alpha version of the game will include the testing phase of the
          fundamentals of the gameplay. This stage will ensure the
          synchronization of the components in the game.`,
    },
    {
      dataId: "046baf0c-9b4c-ea28-05a2-50fd0f70aaa4",
      wNodeIdLeft: "w-node-_046baf0c-9b4c-ea28-05a2-50fd0f70aaa5-718776cd",
      wNodeIdCenter: "w-node-_046baf0c-9b4c-ea28-05a2-50fd0f70aaa8-718776cd",
      timeline: "1st April 2022",
      heading: "Dragons of Midgard Alpha Version with gameplay",
      description: `The alpha version of the game will include the testing phase of the
          fundamentals of the gameplay. This stage will ensure the
          synchronization of the components in the game.`,
    },
    {
      dataId: "046baf0c-9b4c-ea28-05a2-50fd0f70aab5",
      wNodeIdLeft: "w-node-_046baf0c-9b4c-ea28-05a2-50fd0f70aab6-718776cd",
      wNodeIdCenter: "w-node-_046baf0c-9b4c-ea28-05a2-50fd0f70aab9-718776cd",
      timeline: "1st April 2022",
      heading: "Dragons of Midgard Alpha Version with gameplay",
      description: `The alpha version of the game will include the testing phase of the
          fundamentals of the gameplay. This stage will ensure the
          synchronization of the components in the game.`,
    },
    {
      dataId: "046baf0c-9b4c-ea28-05a2-50fd0f70aac5",
      wNodeIdLeft: "w-node-_046baf0c-9b4c-ea28-05a2-50fd0f70aac6-718776cd",
      wNodeIdCenter: "w-node-_046baf0c-9b4c-ea28-05a2-50fd0f70aac9-718776cd",
      timeline: "1st April 2022",
      heading: "Dragons of Midgard Alpha Version with gameplay",
      description: `The alpha version of the game will include the testing phase of the
          fundamentals of the gameplay. This stage will ensure the
          synchronization of the components in the game.`,
    },
  ];
  const roadmap = [
    {
      name: "",
    },
  ];
  return (
    <section className="roadmap">
      <div className="bg-linear-red bg-shadow-red">

      <div className="text-fragment">
        <img src="/img/roadmap/roadmap_text.png" alt="" />
      </div>
      <div className="roadmap_main row container">
        <div className="roadmap_main__header">
          <img src="/img/roadmap/roadmap_line_header.png" alt="" />
        </div>
        {/*  */}
        <div className="roadmap_main__center">
          <div className="roadmap_main__center__center-year">
            <div className="roadmap_main__center__center-year__text">
              <span>Q4</span>
              <br></br>
              <span>2021</span>
            </div>
            <img src="/img/roadmap/roadmap_line_frame_year.png" alt="" />
          </div>
          <img src="/img/roadmap/roadmap_line_center.png" alt="" />
          <div className="roadmap_main__center__center-description">
            <div className="roadmap_main__center__center-description__text">
              <span>Game design/plan</span>
              <br></br>
              <span>Story telling</span>
              <br></br>
              <span>Whitepaper</span>
              <br></br>
              <span>Kick-off development</span>
            </div>
            <img src="/img/roadmap/roadmap_line_frame_description.png" alt="" />
          </div>
        </div>
        {/*  */}
        <div className="roadmap_main__center">
          <div className="roadmap_main__center__center-description">
            <div className="roadmap_main__center__center-description__text">
              <span>{`Presale & TGE`}</span>
              <br></br>
              <span>Demo Game Launch</span>
              <br></br>
              <span>New features development</span>
              <br></br>
              <span>Marketplace</span>
            </div>
            <img src="/img/roadmap/roadmap_line_frame_description.png" alt="" />
          </div>
          <img src="/img/roadmap/roadmap_line_center.png" alt="" />
          <div className="roadmap_main__center__center-year">
            <div className="roadmap_main__center__center-year__text">
              <span>Q1</span>
              <br></br>
              <span>2022</span>
            </div>
            <img src="/img/roadmap/roadmap_line_frame_year.png" alt="" />
          </div>
        </div>
        {/*  */}
        <div className="roadmap_main__center">
          <div className="roadmap_main__center__center-year">
            <div className="roadmap_main__center__center-year__text">
              <span>Q2</span>
              <br></br>
              <span>2022</span>
            </div>
            <img src="/img/roadmap/roadmap_line_frame_year.png" alt="" />
          </div>
          <img src="/img/roadmap/roadmap_line_center.png" alt="" />
          <div className="roadmap_main__center__center-description">
            <div className="roadmap_main__center__center-description__text">
              <span>Complete game</span>
              <br></br>
              <span>Ranking systems</span>
              <br></br>
              <span>Tournaments</span>
              <br></br>
              <span>Craft systems</span>
            </div>
            <img src="/img/roadmap/roadmap_line_frame_description.png" alt="" />
          </div>
        </div>
        {/*  */}
        <div className="roadmap_main__center">
          <div className="roadmap_main__center__center-description">
            <div className="roadmap_main__center__center-description__text">
              <span>Major expansion</span>
              <br></br>
              <span>New territories</span>
              <br></br>
              <span>Talent system</span>
            </div>
            <img src="/img/roadmap/roadmap_line_frame_description.png" alt="" />
          </div>
          <img src="/img/roadmap/roadmap_line_center.png" alt="" />
          <div className="roadmap_main__center__center-year">
            <div className="roadmap_main__center__center-year__text">
              <span>Q3</span>
              <br></br>
              <span>2022</span>
            </div>
            <img src="/img/roadmap/roadmap_line_frame_year.png" alt="" />
          </div>
        </div>
        {/*  */}
        <div className="roadmap_main__footer">
          <img src="/img/roadmap/roadmap_line_footer.png" alt="" />
        </div>
      </div>
      </div>
    </section>
  );
};

export default RoadMap;
