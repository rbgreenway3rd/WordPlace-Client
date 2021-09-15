import React from "react";
import "./WordPlace.css";
import { NavBar } from "./nav/NavBar";
import { ApplicationViews } from "./ApplicationViews";
import { Route, Redirect } from "react-router-dom";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";

export const WordPlace = () => (
  <>
    <Route
      render={() => {
        if (localStorage.getItem("")) {
          return (
            <>
              <NavBar />
              <ApplicationViews />
            </>
          );
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />

    <Route exact path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
  </>
);
