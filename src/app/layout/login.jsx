import React, { useState } from "react";
import LoginForm from "../components/ui/loginForm";
import { UsersWrap } from "../components/page/usersListPage/usersWrap";
import RegisterForm from "../components/ui/registerForm";
import { useParams } from "react-router-dom";

const Login = () => {
  const { type } = useParams();
  const [formType, setFormType] = useState(
    type === "register" ? type : "login"
  );
  const toggleFormType = (params) => {
    setFormType((prevState) =>
      prevState === "register" ? "login" : "register"
    );
  };

  return (
    <div className="container">
      <div className="row">
        <div
          className="col-md-6 offset-md-3 shadow p-4"
          style={{ marginTop: "150px" }}
        >
          <div>
            <h3 className="mb-4">Login</h3>
            <LoginForm />
            <p>
              Dont have account?{" "}
              <a role="button" onClick={toggleFormType}>
                {" "}
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
