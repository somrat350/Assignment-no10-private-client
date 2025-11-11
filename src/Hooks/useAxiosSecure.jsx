import axios from "axios";
import useAuth from "./useAuth";

const instanceSecure = axios.create({
  baseURL: "http://localhost:3000",
});

const useAxiosSecure = () => {
  const { user } = useAuth();
  instanceSecure.interceptors.request.use((config) => {
    config.headers.authorization = `Bearer ${user?.accessToken}`;
    return config;
  });
  return instanceSecure;
};

export default useAxiosSecure;
