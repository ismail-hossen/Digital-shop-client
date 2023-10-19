import { Outlet } from "react-router-dom";
import Navbar from "../components/header/Navbar";
import Footer from "../components/footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../authContext/AuthContext";

const Root = () => {
  const { loading } = useContext(AuthContext);
  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center h-[80vh]">
          <span className="loading loading-ring loading-lg"></span>
          <span className="loading loading-ring loading-lg"></span>
          <span className="loading loading-ring loading-lg"></span>
          <span className="loading loading-ring loading-lg"></span>
        </div>
      ) : (
        <>
          <Navbar />
          <Outlet />
          <Footer />
        </>
      )}
    </>
  );
};

export default Root;
