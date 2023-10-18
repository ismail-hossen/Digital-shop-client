import { Outlet } from "react-router-dom";
import Navbar from "../components/header/Navbar";
import Footer from "../components/footer/Footer";

const Root = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
