import axios from "axios";
axios.defaults.headers.common["Content-Type"] = "application/json";
axios.interceptors.request.use(
  function (config) {
    console.log("!!!!");
    const authHeaders = JSON.parse(localStorage.getItem("authHeaders"));
    if (authHeaders) {
      config.headers[config.method] = {
        "access-token": authHeaders["access-token"],
        client: authHeaders["client"],
        uid: authHeaders["uid"],
      };
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    if (response.headers["access-token"]) {
      const authHeaders = {
        "access-token": response.headers["access-token"],
        client: response.headers["client"],
        uid: response.headers["uid"],
        expiry: response.headers["expiry"],
        "token-type": response.headers["token-type"],
      };
      window.localStorage.setItem("authHeaders", JSON.stringify(authHeaders));
    } else {
      window.localStorage.removeItem("authHeaders");
    }
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axios;