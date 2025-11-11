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

const CarDetails = () => {
  return (
    <div className="max-w-7xl mx-auto p-5 my-5">
      <div className="grid lg:grid-cols-3 gap-10 lg:gap-5">
        <div className="">
          <img
            src="https://img.freepik.com/free-psd/black-isolated-car_23-2151852894.jpg?t=st=1762826453~exp=1762830053~hmac=7b49ba91e8b966ccac300b30ef739f247a8b97cd069973ae1b3960eaf952a779&w=2000"
            alt=""
            className="w-full rounded-lg"
          />
        </div>
        <div className="lg:col-span-2">
          <div className="flex justify-between">
            <div className="">
              <h2 className="text-2xl font-bold">
                Lorem ipsum dolor sit amet.
              </h2>
              <p>Electric</p>
              <p className="flex items-center gap-1">
                <FaStar className="text-amber-600" /> 4
              </p>
            </div>
          </div>
          <hr className="my-4" />
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div className="">
              <h2 className="text-xl font-semibold text-primary flex items-center gap-2">
                <FaTag /> Category
              </h2>
              <p>Sedan / Hybrid</p>
            </div>
            <div className="">
              <h2 className="text-xl font-semibold text-primary flex items-center gap-2">
                <span>৳</span> Rent Price
              </h2>
              <p className="text-success font-bold">
                ৳8500 <small className="">/ day</small>
              </p>
            </div>
            <div className="">
              <h2 className="text-xl font-semibold text-primary flex items-center gap-2">
                <FaLocationDot /> Location
              </h2>
              <p className="">Dhaka, Bangladesh</p>
            </div>
            <div className="">
              <h2 className="text-xl font-semibold text-primary flex items-center gap-2">
                <FaInfoCircle /> Car Status
              </h2>
              <p className="mt-1">
                <span className="badge badge-success text-white">
                  Available
                </span>
              </p>
            </div>
          </div>

          <div className="mb-4">
            <h2 className="text-xl font-semibold text-primary flex items-center gap-2">
              <GrTextAlignLeft /> Description
            </h2>
            <p className="">
              Experience luxury and efficiency with the{" "}
              <strong>2024 Toyota Camry Hybrid SE</strong>. This premium sedan
              combines a sleek design with cutting-edge hybrid technology,
              delivering up to <strong>52 MPG</strong> in the city. Perfect for
              business trips or family outings in Dhaka.
            </p>
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
                    <strong className="break-all">Rahim Khans</strong>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="flex items-center gap-2">
                  <MdEmail className="text-4xl text-primary min-w-fit" />
                  <div>
                    <small className="block">Email</small>
                    <strong className="break-all">
                      mdsomratsordaro350@gmail.com
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button className="btn btn-primary text-xl mt-5">
            <FaCar /> Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
