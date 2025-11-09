import { FaCar, FaUser } from "react-icons/fa";
import { Link } from "react-router";

const CarCard = ({ car }) => {
  return (
    <div className="shadow-md rounded-2xl p-4 hover:shadow-lg transition-all duration-300">
      {/* Car Image */}
      <div className="w-full h-48 rounded-xl overflow-hidden">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Car Info */}
      <div className="mt-4 space-y-2">
        <h3 className="text-xl font-semibold">{car.name}</h3>
        <p className="text-lg font-medium text-primary">
          ৳{car.pricePerDay} / day
        </p>

        <div className="flex items-center gap-2 text-gray-500">
          <FaCar size={18} /> <span>{car.model}</span>
        </div>

        <div className="flex items-center gap-2 text-gray-500">
          <FaUser size={18} /> <span>{car.provider}</span>
        </div>
      </div>

      {/* Button */}
      <div className="mt-4">
        <Link
          to={`/car/${car.id}`}
          className="btn btn-primary w-full"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default CarCard;
