import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { signUpReset } from "../../../packs/redux/actions";

const LogOutRegistrationSuccess = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(signUpReset());
  }, []);
  return <div>success</div>;
};

export default LogOutRegistrationSuccess;
