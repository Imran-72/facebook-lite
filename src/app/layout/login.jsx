import React from "react";
import LoginForm from "../components/ui/loginForm";
import { UsersWrap } from "../components/page/usersListPage/usersWrap";

const Login = () => {
  return (
    <UsersWrap>
      <LoginForm />
    </UsersWrap>
  );
};

export default Login;
