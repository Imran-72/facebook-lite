import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { getAuthUserData } from "../../../redux/actions";
// import CheckBoxField from "../../common/form/checkBoxField";
import TextField from "../../common/form/textField";
import httpServise from "../../services/httpServices";
import { validator } from "../../utils/validator";
import { UsersWrap } from "../users/usersWrap";

// const http = axios.create({
//   withCredentials: true,
//   baseURL: "https://social-network.samuraijs.com/api/1.0/",
// });
const LoginForm = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({ email: "", password: "" });
  // const [myId, setMyId] = useState(null);

  const { email, password } = data;
  const [rememberMe, setRememberMe] = useState(true);
  const [errors, setErrors] = useState({});

  const handleChange = ({ target }) => {
    setData((prev) => ({
      ...prev,
      [target.name]: target.value,
    }));
  };

  // const setAuthUserData = async () => {
  //   try {
  //     const { data } = await httpServise.post(`auth/login`, {
  //       email,
  //       password,
  //       rememberMe,
  //     });
  //     setMyId(data.data.userId);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const getAuthUserData = async () => {
  //   try {
  //     const { data } = await http.get(`auth/me`);
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const validatorConfig = {
    email: {
      isRequared: {
        message: "Электронная почта обязательна для заполнения",
      },
      isEmail: {
        message: "Email введён не корректно",
      },
    },
    password: {
      isRequared: {
        message: "Пароль обязателен для заполнения",
      },
      isCapitalSymbol: {
        message: "Пароль должен содержать хотя бы одну заглавную букву",
      },
      isContainDigit: {
        message: "Пароль должен содержать хотя бы одну цифру",
      },
      min: {
        message: "Пароль должен состоять минимум из 8 символов",
        value: 8,
      },
    },
  };
  useEffect(() => {
    validate();
  }, [data]);

  const validate = () => {
    const errors = validator(data, validatorConfig);

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const isValid = Object.keys(errors).length === 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
  };

  return (
    <UsersWrap>
      <div style={{ position: "absolute", left: "210px" }}>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-15 offset-md-3 shadow p-4">
              <form onSubmit={handleSubmit}>
                <TextField
                  label="Электронная почта"
                  type="text"
                  name="email"
                  value={data.email}
                  onChange={handleChange}
                  error={errors.email}
                />
                <TextField
                  label="Пароль"
                  type="password"
                  name="password"
                  value={data.password}
                  onChange={handleChange}
                  error={errors.password}
                />
                {/* <CheckBoxField
                  onChange={handleChange}
                  value={data.stayOn}
                  name="stayOn"
                >
                  Оставаться в системе
                </CheckBoxField> */}
                <Link to="/profile">
                  <button
                    className="btn btn-primary mt-2"
                    type="submit"
                    disabled={!isValid}
                    onClick={() => dispatch(getAuthUserData(data))}
                  >
                    Submit
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </UsersWrap>
  );
};

export default LoginForm;
