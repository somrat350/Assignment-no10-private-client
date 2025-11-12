import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import Loading from "../Components/Loading";

const MyBookings = () => {
  const instanceSecure = useAxiosSecure();
  const { user } = useAuth();
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    instanceSecure.get(`/myBookings/${user?.email}`).then((result) => {
      setCars(result.data);
      setLoading(false);
    });
  }, [instanceSecure, user]);

  return (
    <section className="max-w-7xl mx-auto p-5">
      <div className="flex items-center justify-center">
        <h2 className="text-4xl font-bold text-center border-b-4 mb-5">
          My Bookings: {cars.length}
        </h2>
      </div>

      {loading ? (
        <Loading />
      ) : cars.length === 0 ? (
        <h2 className="mt-10 text-center font-bold text-2xl">
          You not have any booked car!
        </h2>
      ) : (
        <>
          <div className="mt-10 hidden sm:block">
            <table className="table">
              <thead>
                <tr>
                  <th>SL No</th>
                  <th>Image</th>
                  <th>Car Name</th>
                  <th>Category</th>
                  <th>Rent Price</th>
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
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-5 sm:hidden">
            {cars.map((car) => (
              <div key={car._id} className="flex flex-col gap-2">
                <div className="w-full h-36 rounded-xl overflow-hidden">
                  <img
                    src={car.carImageUrl}
                    alt={car.carName}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex flex-col">
                  <h2 className="font-medium">{car.carName}</h2>
                  <div className="flex gap-2 items-center">
                    <h2 className="text-base">{car.carCategory}</h2>
                  </div>
                  <h2 className="text-sm">৳{car.rentPrice} / day</h2>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default MyBookings;
