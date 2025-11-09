import CarCard from "./CarCard";

const TopRatedCars = () => {
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
    <section className="mt-20">
      <div className="flex items-center justify-center">
        <h2 className="text-4xl font-bold text-center border-b-4 mb-5">
          Top Rated Cars
        </h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </section>
  );
};

export default TopRatedCars;
