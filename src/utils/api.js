import axios from "axios";
import { toast } from "react-toastify";

const api = () => {
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  // if (user) headers.Authorization = `Bearer ${user.token}`;

  const apiSet = axios.create({
    baseURL: "https://pokeapi.co/api/v2",
    headers,
  });

  apiSet.interceptors.response.use(
    (response) => response,
    (error) => {
      let { message } = error.response.data;

      if (!message) {
        message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
      }

      const errors = {
        errors: error.response.data.errors,
        message,
      };

      toast.error(message);

      throw errors;
    }
  );
  return apiSet;
};

export default api;
