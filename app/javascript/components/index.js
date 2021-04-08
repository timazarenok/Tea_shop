import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Teas from "./teas";
import Tea from "./tea-show";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./header";
import TeaForm from "./tea-form";
import RegistrationForm from "./forms/registration-form";
import RegistrationSuccess from "./forms/registration-form/registration-success";
import AuthenticationForm from "./forms/auth-form";
import LogOut from "./forms/logout";
import { checkSignIn } from "../packs/redux/actions";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkSignIn());
  });

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Teas} />
        <Route exact path="/teas/:id" component={Tea} />
        <Route exact path="/new-tea" component={TeaForm} />
        <Route exact path="/sign_up" component={RegistrationForm} />
        <Route exact path="/sign_in" component={AuthenticationForm} />
        <Route
          exact
          path="/registration-success"
          component={RegistrationSuccess}
        />
        <Route exact path="/log_out" component={LogOut} />
      </Switch>
    </>
  );
};

export default App;
