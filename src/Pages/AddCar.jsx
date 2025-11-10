import { useState } from "react";

const AddCar = () => {
  const [carImg, setCarImg] = useState("")
  return (
    <section className="max-w-7xl mx-auto p-5">
      <div className="flex items-center justify-center">
        <h2 className="text-4xl font-bold text-center border-b-4 mb-5">
          Create A New Car For Rent
        </h2>
      </div>

      <form className="my-10">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 md:gap-5">
          {/* Seller Name */}
          <div className="flex flex-col gap-2">
            <label className="label">Provider Name</label>
            <input
              type="text"
              name="providerName"
              className="input border-gray-500 w-full"
              value={"Mr.osama"}
              readOnly
            />
          </div>

          {/* Seller Email */}
          <div className="flex flex-col gap-2">
            <label className="label">Provider Email</label>
            <input
              type="text"
              name="providerEmail"
              className="input border-gray-500 w-full"
              value={"mdsomratsordaro350@gmail.com"}
              readOnly
            />
          </div>

          {/* Car Name */}
          <div className="flex flex-col gap-2">
            <label className="label">Car Name</label>
            <input
              type="text"
              required
              name="carName"
              className="input border-gray-500 w-full"
              placeholder="example: Toyota Corolla"
            />
          </div>

          {/* Car Category */}
          <div className="flex flex-col gap-2">
            <label className="label">Car Type</label>
            <select
              required
              className="select border-gray-500 w-full"
              // onChange={(e) => setCategory(e.target.value)}
            >
              <option disabled={true}>Pick a type</option>
              <option>category</option>
              <option>category</option>
              <option>category</option>
              <option>category</option>
              <option>category</option>
            </select>
          </div>

          {/* Price per day */}
          <div className="flex flex-col gap-2">
            <label className="label">Rent Price (৳ / per day)</label>
            <input
              type="text"
              required
              name="rentPrice"
              className="input border-gray-500 w-full"
              placeholder="example: 10000"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="label">Location</label>
            <input
              type="text"
              required
              name="location"
              className="input border-gray-500 w-full"
              placeholder="example: City, Country"
            />
          </div>
          <div className="col-span-full flex flex-col gap-2">
            <label className="label">
              Simple Description about your Car
            </label>
            <textarea
              className="textarea border-gray-500 w-full"
              required
              name="carDesc"
              placeholder="example: Car license, Car brand, Car model. etc"
            ></textarea>
          </div>
          <div className="col-span-full flex flex-col gap-2">
            <label className="label">Your Car Image URL</label>
            <input
              type="text"
              required
              name="carImageURL"
              className="input border-gray-500 w-full"
              placeholder="example: https://..."
              onChange={(e) => setCarImg(e.target.value)}
            />
          </div>
          <div className="col-span-full flex items-center justify-center">
            {
              carImg && <img src={carImg} alt="" className="w-full max-w-sm mx-auto rounded-2xl" />
            }
          </div>

          <div className="col-span-full">
            <button className="btn btn-primary w-full">Create A Car</button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default AddCar;
