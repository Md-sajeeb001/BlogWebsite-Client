import axios from "axios";
import { useEffect } from "react";
import UseAuth from "./UseAuth";
import { useNavigate } from "react-router-dom";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

const UseAxiosInstance = () => {
  const navigate = useNavigate();
  const { signOutUser } = UseAuth();

  useEffect(() => {
    axiosInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (error?.status === 401 || error?.status === 403) {
          signOutUser();
          navigate("/signIn");
        }

        console.log(error);

        return Promise.reject(error);
      }
    );
  }, [navigate, signOutUser]);

  return axiosInstance;
};

export default UseAxiosInstance;
