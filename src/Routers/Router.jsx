import { createBrowserRouter } from "react-router";
import Root from "../Root";
import Home from "../Pages/Home";
import AllCars from "../Pages/AllCars";
import AddCar from "../Pages/AddCar";
import MyListings from "../Pages/MyListings";
import MyBookings from "../Pages/MyBookings";

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
    ],
  },
]);
