import { FaCar, FaUser } from "react-icons/fa";
import { Link } from "react-router";

const MyListings = () => {
  const car = {
    id: 1,
    name: "Toyota Corolla",
    pricePerDay: 3500,
    image:
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGNhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=400",
    model: "Sedan 2022",
    provider: "Elite Rent Ltd.",
    category: "Elite",
    status: "Available",
  };
  return (
    <section className="max-w-7xl mx-auto p-5">
      <div className="flex items-center justify-center">
        <h2 className="text-4xl font-bold text-center border-b-4 mb-5">
          My Listings
        </h2>
      </div>

      <div className="mt-10 hidden lg:block">
        <table className="table">
          <thead>
            <tr>
              <th>SL No</th>
              <th>Image</th>
              <th>Car Name</th>
              <th>Category</th>
              <th>Rent Price</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-14 h-10 object-cover rounded"
                />
              </td>
              <td className="font-medium text-base">{car.name}</td>
              <td className="font-medium text-base">{car.category}</td>
              <td className="font-medium text-base">৳{car.pricePerDay}/day</td>
              <td>
                <div className={`badge badge-primary text-white`}>
                  {car.status}
                </div>
              </td>
              <td className="flex gap-3 items-center">
                <Link
                  to={`/editCar/${car.id}`}
                  className="btn btn-outline btn-primary"
                >
                  Edit
                </Link>
                <button className="btn btn-outline btn-error">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-10 lg:hidden grid md:grid-cols-2 gap-3">
        <div className="flex flex-col sm:flex-row gap-2 justify-between sm:items-center">
          <div className="flex items-center gap-2">
            <img src={car.image} alt="" className="w-20 h-20 rounded-md" />
            <div className="flex flex-col">
              <h2 className="font-medium">{car.name}</h2>
              <div className="flex gap-2 items-center">
                <h2 className="text-base">{car.category}</h2>
                <span className="badge badge-primary">{car.status}</span>
              </div>
              <h2 className="text-sm">৳{car.pricePerDay} / day</h2>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <Link
              to={`/editProduct/${car._id}`}
              className="btn btn-outline btn-primary"
            >
              Edit
            </Link>
            <button className="btn btn-outline btn-error">Delete</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyListings;
