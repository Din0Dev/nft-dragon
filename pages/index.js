import Link from "next/link";
import AmryTournament from "../components/HomePage/AmryTournament";
import Banner from "../components/HomePage/Banner";
import DragonToken from "../components/HomePage/DragonToken";
import DragonWars from "../components/HomePage/DragonWars";
import RoadMap from "../components/HomePage/RoadMap/index,";
import TabsLayout from "../components/HomePage/Tabs";

const Home = (props) => {
  return (
    <div className="home-page">
      <Banner />
      <TabsLayout />
      <DragonToken />
      <AmryTournament />
      <DragonWars />
      <RoadMap />
    </div>
  );
};


export default Home;
