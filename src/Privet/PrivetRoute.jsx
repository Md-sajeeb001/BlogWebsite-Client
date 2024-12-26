/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";
import Loading from "../Components/Loading";

const PrivetRoute = ({ children }) => {
  const { user, loading } = UseAuth();

  if (user) {
    return children;
  }

  if (loading) {
    return <Loading></Loading>;
  }

  return <Navigate to="/signIn"></Navigate>;
};

export default PrivetRoute;
