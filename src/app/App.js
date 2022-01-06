import React from "react";
import { Redirect, Route } from "react-router-dom";
import Login from "./layout";
import Header from "./components/header";
import Profile from "./components/profile/profile";
import User from "./components/page/userPage";
import UserProfile from "./components/page/userPage/userProfile";
import UsersContainer from "./components/page/usersListPage";
import NavBar from "./components/ui/navBar";

function App() {
  return (
    <>
      <div className="d-flex">
        <NavBar />
        <Route path="/profile" exact component={Profile} />
        <Route path="/userProfile/:userId?" exact component={UserProfile} />
        <Route path="/user" component={User} />
        <Route path="/users" exact component={UsersContainer} />
        <Route path="/login" exact component={Login} />
        <Header />
      </div>
      <Redirect to="/" />
    </>
  );
}

export default App;
