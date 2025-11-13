import { useEffect, useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { HiXMark } from "react-icons/hi2";
import { Link, NavLink } from "react-router";
import ThemeToggler from "./ThemeToggler";
import useAuth from "../Hooks/useAuth";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { user, userLoading, logout } = useAuth();

  const get = localStorage.getItem("assignment-no10-private-theme");
  const getTheme = JSON.parse(get ? get : "false");

  const [theme, setTheme] = useState(getTheme);

  useEffect(() => {
    document
      .querySelector("html")
      .setAttribute("data-theme", theme ? "dark" : "light");
    localStorage.setItem(
      "assignment-no10-private-theme",
      JSON.stringify(theme)
    );
  }, [theme]);

  const middleMenu = (
    <>
      <NavLink to="/" className="text-base font-medium navLink">
        Home
      </NavLink>
      <NavLink to="/allCars" className="text-base font-medium navLink">
        Browse Cars
      </NavLink>
      <NavLink to="/addCar" className="text-base font-medium navLink">
        Add Car
      </NavLink>
      <NavLink to="/myListings" className="text-base font-medium navLink">
        My Listings
      </NavLink>
      <NavLink to="/myBookings" className="text-base font-medium navLink">
        My Bookings
      </NavLink>
      <div className="flex justify-end sm:hidden">
        <ThemeToggler theme={theme} setTheme={setTheme} />
      </div>
    </>
  );
  const rightMenu = (
    <>
      <div className="hidden sm:flex justify-center">
        <ThemeToggler theme={theme} setTheme={setTheme} />
      </div>
      {userLoading ? (
        ""
      ) : user ? (
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="m-1 cursor-pointer">
            <img src={user?.photoURL} alt="" className="w-10 h-10 rounded-full cursor-pointer" />
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-fit p-2 shadow-sm"
          >
            <li>
              <span>{user?.displayName}</span>
            </li>
            <li>
              <span>{user?.email}</span>
            </li>
            <li>
              <span className="block">
                <button
                  onClick={logout}
                  className="btn btn-error text-white w-full"
                >
                  Log Out
                </button>
              </span>
            </li>
          </ul>
        </div>
      ) : (
        <Link
          to="/login"
          className="btn btn-primary hover:scale-110 transition-all duration-200 font-medium text-sm"
        >
          Login/Signup
        </Link>
      )}
    </>
  );
  return (
    <header className="shadow-xl sticky top-0 z-20 backdrop-blur-3xl">
      <div className="max-w-7xl mx-auto px-5 py-4 flex justify-between items-center relative">
        <div className="flex items-center gap-2 sm:gap-3">
          <HiMenuAlt1
            onClick={() => setOpenMenu(true)}
            className="lg:hidden cursor-pointer text-2xl font-bold"
          />
          <div className="flex items-center gap-2">
            <img
              src="/logo.png"
              alt="RentWheels"
              className="w-10 hidden sm:flex"
            />
            <h1>
              <Link to="/" className="text-xl sm:text-2xl font-bold">
                RentWheels
              </Link>
            </h1>
          </div>
        </div>
        <div
          className={`absolute left-0 sm:left-5 top-0 shadow-2xl flex lg:hidden flex-col gap-5 p-8 rounded-b-3xl bg-base-300 w-full sm:max-w-xl z-10 duration-300 ${
            openMenu ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="flex justify-end">
            <HiXMark
              onClick={() => setOpenMenu(false)}
              className="cursor-pointer text-3xl font-extrabold"
            />
          </div>
          <div className="flex flex-col gap-5">{middleMenu}</div>
        </div>
        <div className="hidden lg:flex gap-6 items-center">{middleMenu}</div>
        <div className="flex items-center gap-3 h-10">{rightMenu}</div>
      </div>
    </header>
  );
};

export default Header;
