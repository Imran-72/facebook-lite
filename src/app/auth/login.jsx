import React from "react";
import LoginForm from "../components/ui/loginForm";
import { UsersWrap } from "../components/users/usersWrap";

const Login = () => {
  return (
    <UsersWrap>
      <LoginForm />
    </UsersWrap>
  );
};

export default Login;
