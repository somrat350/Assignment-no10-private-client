import { Outlet, useLocation } from "react-router";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import Loading from "./Components/Loading";

const Root = () => {
  const location = useLocation();
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    setShowLoader(true);
    let timer;
    timer = setTimeout(() => setShowLoader(false), 500);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (showLoader) {
    return (
      <div className="h-screen flex items-center">
        <ToastContainer />
        <Loading />
      </div>
    );
  }
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
