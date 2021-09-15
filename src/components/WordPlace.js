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
        if (localStorage.getItem("wordplace_token")) {
          //retrieve wordplace_token from localStorage to check if valid user has been logged in
          return (
            <>
              <NavBar />
              <ApplicationViews />
            </>
          );
        } else {
          //if no token is found in localStorage, redirect back to login
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
