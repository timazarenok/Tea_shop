import React from "react";
import { Route } from "react-router-dom";
import { useSelector } from "react-redux";
import AuthenticationForm from "../forms/auth-form";

export const PrivateRoute = ({ children, ...options }) => {
  const { currentUser } = useSelector((state) => state.authentication);
  const finalComponent = currentUser ? children : <AuthenticationForm />;
  return <Route {...options}>{finalComponent} </Route>;
};
