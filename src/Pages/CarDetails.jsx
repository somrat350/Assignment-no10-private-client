import {
  FaCar,
  FaInfoCircle,
  FaStar,
  FaTag,
  FaUserCircle,
  FaUserTie,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { GrTextAlignLeft } from "react-icons/gr";
import { MdEmail } from "react-icons/md";
import { useNavigate, useParams } from "react-router";
import useAxios from "../Hooks/useAxios";
import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import { toast } from "react-toastify";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import Loading from "../Components/Loading";
import Lottie from "lottie-react";
import successAnimation from "../assets/success.json";

const CarDetails = () => {
  const { user } = useAuth();
  const instance = useAxios();
  const instanceSecure = useAxiosSecure();
  const { id } = useParams();
  const [details, setDetails] = useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [isConfirmed, setIsConfirmed] = useState(false);

  useEffect(() => {
    instance.get(`/car/${id}`).then((result) => {
      setDetails(result.data);
      setLoading(false);
    });
  }, [instance, id]);

  const handleBooking = () => {
    if (!details.status) {
      toast.error("This car is booked. Please try another car.");
      return;
    }
    const newBooking = {
      carId: details._id,
      carName: details.carName,
      carImageUrl: details.carImageUrl,
      carCategory: details.carCategory,
      rentPrice: details.rentPrice,
      bookingEmail: user.email,
    };

    instanceSecure.post("/newBooking", newBooking).then((result) => {
      if (result.data.insertedId) {
        const updateCarStatus = { status: false };
        instanceSecure
          .patch(`/updateCar/${details._id}`, updateCarStatus)
          .then((result) => {
            if (result.data.modifiedCount === 1) {
              setIsConfirmed(true);
              document.getElementById("my_modal_2").showModal();
              setTimeout(() => {
                setIsConfirmed(false);
                document.getElementById("my_modal_2").close();
                toast.success("Car booked successfully.");
                navigate("/myBookings");
              }, 2000);
            }
          });
      }
    });
  };

  return (
    <div className="max-w-7xl mx-auto p-5 my-5">
      <title>{`${details ? `${details.carName}` : ""} | RentWheels`}</title>
      <dialog id="my_modal_2" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h2 className="text-2xl font-bold text-green-500">Car booked!</h2>
          {isConfirmed && (
            <Lottie
              animationData={successAnimation}
              loop={false}
              style={{ width: 300, margin: "0 auto" }}
            />
          )}
        </div>
      </dialog>

      {loading ? (
        <Loading />
      ) : !details ? (
        <h2 className="mt-10 text-center font-bold text-2xl">
          Sorry! This car details not found.
        </h2>
      ) : (
        <div className="grid lg:grid-cols-3 gap-10 lg:gap-5">
          <div className="">
            <img
              src={details.carImageUrl}
              alt={details.carName}
              className="w-full rounded-lg"
            />
          </div>
          <div className="lg:col-span-2">
            <div className="flex justify-between">
              <div className="">
                <h2 className="text-2xl font-bold">{details.carName}</h2>
                <p>{details.carCategory}</p>
                <p className="flex items-center gap-1">
                  <FaStar className="text-amber-600" /> {details.ratings}
                </p>
              </div>
            </div>
            <hr className="my-4" />
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div className="">
                <h2 className="text-xl font-semibold text-primary flex items-center gap-2">
                  <FaTag /> Category
                </h2>
                <p>{details.carCategory}</p>
              </div>
              <div className="">
                <h2 className="text-xl font-semibold text-primary flex items-center gap-2">
                  <span>৳</span> Rent Price
                </h2>
                <p className="text-success font-bold">
                  ৳{details.rentPrice} <small className="">/ day</small>
                </p>
              </div>
              <div className="">
                <h2 className="text-xl font-semibold text-primary flex items-center gap-2">
                  <FaLocationDot /> Location
                </h2>
                <p className="">{details.location}</p>
              </div>
              <div className="">
                <h2 className="text-xl font-semibold text-primary flex items-center gap-2">
                  <FaInfoCircle /> Car Status
                </h2>
                <p className="mt-1">
                  <span
                    className={`badge ${
                      details.status ? "bg-green-600" : "bg-red-600"
                    } text-white`}
                  >
                    {details.status ? "Available" : "Booked"}
                  </span>
                </p>
              </div>
            </div>

            <div className="mb-4">
              <h2 className="text-xl font-semibold text-primary flex items-center gap-2">
                <GrTextAlignLeft /> Description
              </h2>
              <p className="">{details.carDesc}</p>
            </div>

            <hr className="my-4"></hr>

            <div className="mb-4">
              <h2 className="text-xl font-semibold text-primary flex items-center gap-2">
                <FaUserTie /> Provider Information
              </h2>
              <div className="grid sm:grid-cols-2 gap-3 mt-2">
                <div className="">
                  <div className="flex items-center gap-2">
                    <FaUserCircle className="text-4xl text-primary" />
                    <div>
                      <small className="block">Name</small>
                      <strong className="break-all">
                        {details.providerName}
                      </strong>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="flex items-center gap-2">
                    <MdEmail className="text-4xl text-primary min-w-fit" />
                    <div>
                      <small className="block">Email</small>
                      <strong className="break-all">
                        {details.providerEmail}
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={handleBooking}
              className={`btn ${
                details.status ? "btn-primary" : "btn-error"
              } text-xl text-white mt-5`}
            >
              <FaCar /> {details.status ? "Book Now" : "Booked"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarDetails;
