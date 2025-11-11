import { useEffect, useState } from "react";
import useAxios from "../Hooks/useAxios";
import CarCard from "./CarCard";

const TopRatedCars = () => {
  const instance = useAxios();
  const [cars, setCars] = useState([]);

  useEffect(() => {
    instance.get("/topRatedCars").then((result) => {
      setCars(result.data);
    });
  }, [instance]);
  return (
    <section className="mt-20">
      <div className="flex items-center justify-center">
        <h2 className="text-4xl font-bold text-center border-b-4 mb-5">
          Top Rated Cars
        </h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((car) => (
          <CarCard key={car._id} car={car} />
        ))}
      </div>
    </section>
  );
};

export default TopRatedCars;
