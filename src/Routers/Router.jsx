import { createBrowserRouter } from "react-router";
import Root from "../Root";
import Home from "../Pages/Home";
import AllCars from "../Pages/AllCars";
import AddCar from "../Pages/AddCar";
import MyListings from "../Pages/MyListings";
import MyBookings from "../Pages/MyBookings";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Error404 from "../Pages/Error404";
import CarDetails from "../Pages/CarDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/allCars",
        Component: AllCars,
      },
      {
        path: "/car/:id",
        Component: CarDetails,
      },
      {
        path: "/addCar",
        Component: AddCar,
      },
      {
        path: "/myListings",
        Component: MyListings,
      },
      {
        path: "/myBookings",
        Component: MyBookings,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/*",
        Component: Error404,
      },
    ],
  },
]);
