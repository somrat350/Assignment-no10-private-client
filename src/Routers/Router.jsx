import { createBrowserRouter } from "react-router";
import Root from "../Root";
import Home from "../Pages/Home";
import AllCars from "../Pages/AllCars";
import AddCar from "../Pages/AddCar";
import MyListings from "../Pages/MyListings";

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
    ],
  },
]);
