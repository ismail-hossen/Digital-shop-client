import { useContext } from "react";
import { AuthContext } from "../authContext/AuthContext";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const PublicRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[80vh]">
        <span className="loading loading-ring loading-lg"></span>
        <span className="loading loading-ring loading-lg"></span>
        <span className="loading loading-ring loading-lg"></span>
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }

  if (user) {
    return <Navigate to="/" replace></Navigate>;
  }

  return children;
};

export default PublicRoute;

PublicRoute.propTypes = {
  children: PropTypes.node,
};
