import Link from "next/link";
import Crystal from "../components/Crystal";
import AmryTournament from "../components/HomePage/AmryTournament";
import Banner from "../components/HomePage/Banner";
import ChartDragon from "../components/HomePage/ChartDragon";
import DragonToken from "../components/HomePage/DragonToken";
import DragonWars from "../components/HomePage/DragonWars";
import PartnerAdvisor from "../components/HomePage/PartnerAdvisor";
import RoadMap from "../components/RoadMap";

const Home = (props) => {
  return (
    <div className="home-page">
      <Banner />
      <Crystal isPurple style={{ width: "200px", paddingTop: "100px" }} />
      <DragonToken />
      <AmryTournament />
      <Crystal isBlue style={{ width: "286px" }} position="position-right" />
      <Crystal
        isGreen
        style={{ width: "286px", paddingTop: "100px" }}
        position="position-right-10"
      />
      <DragonWars />
      <Crystal
        isPink
        style={{ width: "286px", paddingTop: "100px" }}
      />
      <ChartDragon />
      <Crystal
        isOrange
        position= "index-99999 position-left-20-md position-left-20-xs position-left-20"
        style={{ width: "286px", paddingTop: "100px" }}
      />
      <RoadMap />
      <PartnerAdvisor />
    </div>
  );
};

export default Home;
