import HeroSlider from "../Components/HeroSlider";
import NewestCars from "../Components/NewestCars";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto p-5">
      <HeroSlider/>
      <NewestCars/>
    </div>
  );
};

export default Home;