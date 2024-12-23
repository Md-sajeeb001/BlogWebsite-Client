/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";

const PrivetRoute = ({ children }) => {
  const { user, loading } = UseAuth();

  if (user) {
    return children;
  }

  if (loading) {
    return <span className="loading loading-bars loading-lg"></span>;
  }

  return <Navigate to="/signIn"></Navigate>;
};

export default PrivetRoute;
