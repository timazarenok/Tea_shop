import {
  SIGN_UP_SUCCESS,
  SIGN_UP_ERROR,
  SIGN_UP_RESET,
  SIGN_IN_SUCCESS,
  LOGOUT_USER,
} from "./constants";
import { reducer as formReducer } from "redux-form";
import { combineReducers } from "redux";

const initialState = {
  currentUser: "",
  is_sign_up: false,
  text_error: "",
};

const authentication = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
      return { ...state, currentUser: action.payload };
    case LOGOUT_USER:
      return { ...state, currentUser: "" };
    case SIGN_UP_SUCCESS:
      return { ...state, is_sign_up: true };
    case SIGN_UP_ERROR:
      return { ...state, is_sign_up: false, text_error: action.payload };
    case SIGN_UP_RESET:
      return { ...state, is_sign_up: false };
    default:
      return state;
  }
};

export default combineReducers({
  form: formReducer,
  authentication,
});
