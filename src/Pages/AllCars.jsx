import { useEffect, useState } from "react";
import CarCard from "../Components/CarCard";
import useAxios from "../Hooks/useAxios";

const AllCars = () => {
  const instance = useAxios();
  const [cars, setCars] = useState([]);
  const [src, setSrc] = useState("");

  useEffect(() => {
    instance.get("/allCars").then((result) => {
      setCars(result.data);
    });
  }, [instance]);

  const normalize = (text = "") =>
    text.trim().replace(/\s+/g, " ").toLowerCase();

  const finalCars = cars.filter((car) => {
    const term = normalize(src);
    return (
      normalize(car.carName).includes(term) ||
      normalize(car.carCategory).includes(term) ||
      normalize(car.carDesc).includes(term)
    );
  });

  return (
    <section className="max-w-7xl mx-auto p-5">
      <div className="flex items-center justify-center">
        <h2 className="text-4xl font-bold text-center border-b-4 mb-5">
          Our All Cars
        </h2>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center mt-5 gap-3">
        <h2 className="text-2xl font-semibold">
          Total Cars ({finalCars.length})
        </h2>
        <label className="input border-gray-500">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            required
            placeholder="Search"
            value={src}
            onChange={(e) => setSrc(e.target.value)}
          />
        </label>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {finalCars.map((car) => (
          <CarCard key={car._id} car={car} />
        ))}
      </div>
    </section>
  );
};

export default AllCars;
