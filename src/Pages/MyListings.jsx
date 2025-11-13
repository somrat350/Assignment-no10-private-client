import { Link } from "react-router";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useAuth from "../Hooks/useAuth";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Loading from "../Components/Loading";

const MyListings = () => {
  const instanceSecure = useAxiosSecure();
  const { user } = useAuth();
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    instanceSecure.get(`/myListings/${user?.email}`).then((result) => {
      setCars(result.data);
      setLoading(false);
    });
  }, [instanceSecure, user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((toastResult) => {
      if (toastResult.isConfirmed) {
        instanceSecure.delete(`/deleteCar/${id}`).then((result) => {
          if (result.data.deletedCount > 0) {
            const remainingCar = cars.filter((car) => car._id !== id);
            setCars(remainingCar);
            Swal.fire({
              title: "Deleted!",
              text: "Your car has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <section className="max-w-7xl mx-auto p-5">
      <title>My listings | RentWheels</title>
      <div className="flex items-center justify-center">
        <h2 className="text-4xl font-bold text-center border-b-4 mb-5">
          My Listings: {cars.length}
        </h2>
      </div>

      {loading ? (
        <Loading />
      ) : cars.length === 0 ? (
        <h2 className="mt-10 text-center font-bold text-2xl">
          You not have any listing car!
        </h2>
      ) : (
        <>
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
                {cars.map((car, index) => (
                  <tr key={car._id}>
                    <th>{index + 1}</th>
                    <td>
                      <img
                        src={car.carImageUrl}
                        alt={car.carName}
                        className="w-14 h-10 object-cover rounded"
                      />
                    </td>
                    <td className="font-medium text-base">{car.carName}</td>
                    <td className="font-medium text-base">{car.carCategory}</td>
                    <td className="font-medium text-base">
                      ৳{car.rentPrice}/day
                    </td>
                    <td>
                      <div
                        className={`badge ${
                          car.status ? "bg-green-600" : "bg-red-600"
                        } text-white`}
                      >
                        {car.status ? "Available" : "Booked"}
                      </div>
                    </td>
                    <td className="flex gap-3 items-center">
                      <Link
                        to={`/editCar/${car._id}`}
                        className="btn btn-outline btn-primary"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(car._id)}
                        className="btn btn-outline btn-error"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-10 lg:hidden grid md:grid-cols-2 gap-3">
            {cars.map((car) => (
              <div
                key={car._id}
                className="flex flex-col sm:flex-row gap-2 justify-between sm:items-center"
              >
                <div className="flex items-center gap-2">
                  <img
                    src={car.carImageUrl}
                    alt=""
                    className="w-20 h-20 rounded-md"
                  />
                  <div className="flex flex-col">
                    <h2 className="font-medium">{car.carName}</h2>
                    <div className="flex gap-2 items-center">
                      <h2 className="text-base">{car.carCategory}</h2>
                      <span
                        className={`badge ${
                          car.status ? "bg-green-600" : "bg-red-600"
                        } text-white`}
                      >
                        {car.status ? "Available" : "Booked"}
                      </span>
                    </div>
                    <h2 className="text-sm">৳{car.rentPrice} / day</h2>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <Link
                    to={`/editCar/${car._id}`}
                    className="btn btn-outline btn-primary"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(car._id)}
                    className="btn btn-outline btn-error"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default MyListings;
