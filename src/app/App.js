import React from "react";
import { Redirect, Route } from "react-router-dom";
import RegisterForm from "./auth/registerForm";
import Header from "./components/header/header";
import Profile from "./components/profile/profile";
import SideBar from "./components/sideBar/sideBar";
import User from "./components/users/user/user";
import UserProfile from "./components/users/user/userProfile/userProfile";
import Users from "./components/users/users";

function App() {
  return (
    <>
      <div className="d-flex">
        <SideBar />
        <Route path="/profile" exact component={Profile} />
        <Route path="/userProfile/:userId?" exact component={UserProfile} />
        <Route path="/user" component={User} />
        <Route path="/users" exact component={Users} />
        <Route path="/register" exact component={RegisterForm} />
        <Header />
      </div>
      <Redirect to="/" />
    </>
  );
}

export default App;
