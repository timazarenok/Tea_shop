import React from "react";
import { Redirect } from "react-router-dom";
import UserForm from "../user-form";
import { useSelector, useDispatch } from "react-redux";
import { signIn } from "../../../packs/redux/actions";

const AuthenticationForm = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.authentication);

  if (!currentUser) {
    return (
      <UserForm
        buttonText="Войти"
        onSubmit={(values) => {
          dispatch(signIn(values));
        }}
      />
    );
  }
  return <Redirect to="/" />;
};

export default AuthenticationForm;
