import Link from "next/link";
import AmryTournament from "../components/HomePage/AmryTournament";
import Banner from "../components/HomePage/Banner";
import ChartDragon from "../components/HomePage/ChartDragon";
import DragonToken from "../components/HomePage/DragonToken";
import DragonWars from "../components/HomePage/DragonWars";
import RoadMap from "../components/RoadMap";

const Home = (props) => {
  return (
    <div className="home-page">
      <Banner />
      <DragonToken />
      <AmryTournament />
      <DragonWars />
      <ChartDragon />
      <RoadMap />
    </div>
  );
};


export default Home;
