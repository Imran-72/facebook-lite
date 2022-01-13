import React from "react";
import { Route } from "react-router-dom";
import Login from "./layout";
import User from "./components/page/userPage";
import UserProfile from "./components/page/userPage/userProfile";
import UsersContainer from "./components/page/usersListPage";
import ProfileContainer from "./components/profile/profileContainer";
import RegisterFrom from "./components/ui/registerForm";
import Main from "./layout/main";
import NavBar from "./components/ui/navBar";

function App() {
  return (
    <>
      <NavBar />
      <Route path="/" exact component={Main} />
      <Route path={"/profile"} exact component={ProfileContainer} />
      <Route path="/userProfile/:userId?" exact component={UserProfile} />
      <Route path="/user" component={User} />
      <Route path="/login" exact component={Login} />
      <Route path="/users" exact component={UsersContainer} />
      <Route path="/registerForm" exact component={RegisterFrom} />
    </>
  );
}

export default App;
