import axios from "axios";

// create an axios instance
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 5000, // request timeout
});

// request interceptor
service.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    console.log(config);
    return config;
  },
  (error) => {
    // Do something with request error
    console.log(error); // for debug
    Promise.reject(error);
  }
);

// respone interceptor
service.interceptors.response.use(
  (response) => {
    const { data, status } = response;
    console.log("response: ", response);
    return { data, status };
  },
  (error) => {
    console.log("err" + error); // for debug
    return Promise.reject(error);
  }
);

export default service;
