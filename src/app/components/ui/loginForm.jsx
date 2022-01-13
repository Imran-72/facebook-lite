import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../../../redux/actions";
import TextField from "../common/form";
import CheckBoxField from "../common/form/checkBoxField";
import { validator } from "../../utils/validator";
const LoginForm = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [errors, setErrors] = useState({});
  // const [enterError, setEnterError] = useState(null);

  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
    // setEnterError(null);
  };

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
      <CheckBoxField
        onChange={handleChange}
        value={data.rememberMe}
        name="rememberMe"
      >
        Оставаться в системе
      </CheckBoxField>
      <Link to="/profile">
        <button
          className="btn btn-primary w-100 mx-auto"
          type="submit"
          disabled={!isValid}
          onClick={() => dispatch(login(data))}
        >
          Submit
        </button>
      </Link>
    </form>
  );
};

export default LoginForm;
