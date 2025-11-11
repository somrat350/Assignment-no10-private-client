import { Outlet } from "react-router";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { ToastContainer } from "react-toastify";

const Root = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ToastContainer />
      <Header />
      <div className="grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
