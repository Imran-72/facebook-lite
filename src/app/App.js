import React from "react";
import { Route } from "react-router-dom";
import Header from "./components/header/header";
import Profile from "./components/profile/profile";
import SideBar from "./components/sideBar/sideBar";
import Users from "./components/users/users";

function App() {
  return (
    <>
      <Header />
      <div className="d-flex">
        <SideBar />
        <Route path="/profile" component={Profile} />
        <Route path="/users" component={Users} />
      </div>
    </>
  );
}

export default App;
