import HeroSlider from "../Components/HeroSlider";
import NewestCars from "../Components/NewestCars";
import Testimonials from "../Components/Testimonials";
import TopRatedCars from "../Components/TopRatedCars";
import WhyRent from "../Components/WhyRent";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto p-5">
      <HeroSlider />
      <NewestCars />
      <WhyRent />
      <TopRatedCars />
      <Testimonials />
    </div>
  );
};

export default Home;
