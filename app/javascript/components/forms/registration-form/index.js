import React from "react";
import { Redirect } from "react-router-dom";
import UserForm from "../user-form";
import { useSelector, useDispatch } from "react-redux";
import { signUp } from "../../../packs/redux/actions";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const registration = useSelector((state) => state.authentication);
  if (!registration.is_sign_up)
    return (
      <UserForm
        buttonText="Регистрация"
        onSubmit={(values) => {
          dispatch(signUp(values));
        }}
      />
    );
  else {
    return <Redirect to="/registration-success" />;
  }
};
export default RegistrationForm;
