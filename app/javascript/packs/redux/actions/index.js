import axios from "../../axios";

export const signUp = (user) => (dispatch) => {
  axios
    .post("http://localhost:3000/auth", user)
    .then((response) => {
      dispatch({ type: "SIGN_UP_SUCCESS" });
    })
    .catch((error) => {
      dispatch({ type: "SIGN_UP_ERROR", payload: error });
    });
};

export const signIn = (user) => (dispatch) => {
  axios
    .post("http://localhost:3000/auth/sign_in", user)
    .then((response) => {
      const email = JSON.parse(localStorage.getItem("authHeaders"))["uid"];
      dispatch({ type: "SIGN_IN_SUCCESS", payload: email });
      localStorage.setItem("token", response.headers["access-token"]);
    })
    .catch((error) => {
      dispatch({ type: "SIGN_IN_ERROR", payload: error });
    });
};

export const signUpReset = () => ({ type: "SIGN_UP_RESET" });

export const checkSignIn = () => (dispatch) => {
  if (localStorage.getItem("token")) {
    const email = JSON.parse(localStorage.getItem("authHeaders"))["uid"];
    dispatch({ type: "SIGN_IN_SUCCESS", payload: email });
  } else {
    dispatch({ type: "LOGOUT_USER" });
  }
};

export const logOut = () => (dispatch) => {
  dispatch({ type: "LOGOUT_USER" });
  localStorage.removeItem("token");
  localStorage.removeItem("authHeaders");
};
