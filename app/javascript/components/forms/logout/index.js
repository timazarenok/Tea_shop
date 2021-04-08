import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";

import { useDispatch } from "react-redux";
import { logOut } from "../../../packs/redux/actions";

const LogOut = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(logOut());
    // window.location.reload(false);
  });

  return <Redirect to="/" />;
};

export default LogOut;
