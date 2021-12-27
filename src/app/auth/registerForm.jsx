import React, { useEffect, useState } from "react";
import axios from "axios";
import { UsersWrap } from "../components/users/usersWrap";

const RegisterForm = () => {
  const [auth, setAuth] = useState({
    login: "",
    email: "",
    password: "",
    rememberMe: Boolean,
  });

  const handleChange = ({ target }) => {
    setAuth((prev) => ({
      ...prev,
      [target.name]: target.value,
    }));
  };

  useEffect(() => {
    console.log(auth);
  }, [auth]);

  const handleAuth = async () => {
    const response = await axios.get(
      "https://social-network.samuraijs.com/login"
      // ,
      //   {
      //     login: auth.login,
      //     email: auth.email,
      //     password: auth.password,
      //   }
    );
    console.log("response", response);
  };

  return (
    <>
      <UsersWrap>
        <div>
          <span>Войти</span>
          <input
            type="text"
            name="login"
            value={auth.login}
            onChange={handleChange}
          />
          <input
            type="text"
            name="email"
            value={auth.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            value={auth.password}
            onChange={handleChange}
          />
          {/* <input
            type="checkbox"
            name="rememberMe"
            value={auth.rememberMe}
            onChange={handleChange}
          /> */}
        </div>
        <button onClick={handleAuth}>register</button>
      </UsersWrap>
    </>
  );
};

export default RegisterForm;
