import axios from "axios";
import { toast } from "react-toastify";
// import logger from "./logService";
import config from "../config.json";

axios.defaults.baseURL = config.apiEndpoint;
axios.interceptors.response.use(
  (res) => res,
  function (error) {
    const expextedErrors =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500;
    if (!expextedErrors) {
      console.log(error);
      //   logger.log(error);
      toast.error("Something it later");
    }
    return Promise.reject(error);
  }
);

const httpServise = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};

export default httpServise;