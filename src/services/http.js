import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_URL;

axios.interceptors.request.use((config) => {
  config.headers.batch_id = localStorage.getItem("batch_id");
  return config;
});

const methods = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  patch: axios.patch,
};

export default methods;
