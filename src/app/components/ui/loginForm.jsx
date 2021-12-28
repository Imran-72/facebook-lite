import React, { useState } from "react";
import { useEffect } from "react";
import CheckBoxField from "../../common/form/checkBoxField";
import TextField from "../../common/form/textField";

const LoginForm = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = ({ target }) => {
    setData((prev) => ({
      ...prev,
      [target.name]: target.value,
    }));
  };

  useEffect(() => {
    validate();
  }, [data]);

  const validate = () => {
    const errors = {};
    for (const fieldName in data) {
      if (data[fieldName].trim() === "") {
        errors[fieldName] = `${fieldName} is requared`;
      }
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    console.log(data);
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
      <CheckBoxField onChange={handleChange} value={data.stayOn} name="stayOn">
        Оставаться в системе
      </CheckBoxField>
      <button className="btn btn-primary mt-2" type="submit">
        Submit
      </button>
    </form>
  );
};

export default LoginForm;
