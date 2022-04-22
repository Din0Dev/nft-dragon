import Link from "next/link";
import Crystal from "../components/Crystal";
import AmryTournament from "../components/HomePage/AmryTournament";
import Banner from "../components/HomePage/Banner";
import CharacterSlide from "../components/HomePage/CharacterSlide";
import ChartDragon from "../components/HomePage/ChartDragon";
import DragonToken from "../components/HomePage/DragonToken";
import DragonWars from "../components/HomePage/DragonWars";
import OurTeam from "../components/HomePage/OurTeam";
import PartnerAdvisor from "../components/HomePage/PartnerAdvisor";
import Partners from "../components/Partners";
import RoadMap from "../components/RoadMap";

const Home = (props) => {
  return (
    <div className="home-page">
      <Banner />
      <DragonToken />
      <CharacterSlide />
      <ChartDragon />
      <RoadMap />
      <OurTeam />
      <Partners />
    </div>
  );
};

export default Home;
