import CarCard from "../Components/CarCard";

const AllCars = () => {
  const cars = [
    {
      id: 1,
      name: "Toyota Corolla",
      pricePerDay: 3500,
      model: "Sedan 2022",
      provider: "Elite Rent Ltd.",
      rate: 4.5,
      status: "Available",
      image:
        "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGNhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=400",
    },
    {
      id: 2,
      name: "BMW X5",
      pricePerDay: 8500,
      model: "SUV 2023",
      provider: "LuxuryDrive BD",
      rate: 4,
      status: "Unavailable",
      image:
        "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGNhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=400",
    },
    {
      id: 3,
      name: "BMW X5",
      pricePerDay: 8500,
      model: "SUV 2023",
      provider: "LuxuryDrive BD",
      rate: 5,
      status: "Available",
      image:
        "https://images.unsplash.com/photo-1541443131876-44b03de101c5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGNhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=400",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto p-5">
      <div className="flex items-center justify-center">
        <h2 className="text-4xl font-bold text-center border-b-4 mb-5">
          Our All Cars
        </h2>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center mt-5 gap-3">
        <h2 className="text-2xl font-semibold">Total Cars (20)</h2>
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
          <input type="search" required placeholder="Search" />
        </label>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </section>
  );
};

export default AllCars;
