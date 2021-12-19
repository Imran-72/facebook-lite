import React from "react";
import { Redirect, Route } from "react-router-dom";
import Header from "./components/header/header";
import Profile from "./components/profile/profile";
import SideBar from "./components/sideBar/sideBar";
import User from "./components/users/user/user";
import Users from "./components/users/users";

function App() {
  return (
    <>
      <div className="d-flex">
        <SideBar />
        <Route path="/profile" exact component={Profile} />
        <Route path="/user/:userId?" component={User} />
        <Route path="/users" exact component={Users} />
        <Header />
      </div>
      <Redirect to="/" />
    </>
  );
}

export default App;
