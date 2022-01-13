import React, { useEffect, useState } from "react";
import { validator } from "../../utils/validator";
import TextField from "../common/form/textField";
// import RadioField from "../common/form/radio.Field";
import CheckBoxField from "../common/form/checkBoxField";
import { useHistory } from "react-router-dom";
import { UsersWrap } from "../page/usersListPage/usersWrap";

const RegisterForm = () => {
  const history = useHistory();
  const [data, setData] = useState({
    email: "",
    password: "",
    sex: "male",
    name: "",
    licence: false,
  });

  console.log(data);
  const [errors, setErrors] = useState({});
  const handleChange = ({ target }) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };
  const validatorConfog = {
    email: {
      isRequired: {
        message: "Электронная почта обязательна для заполнения",
      },
      isEmail: {
        message: "Email введен некорректно",
      },
    },
    name: {
      isRequired: {
        message: "Имя обязательно для заполнения",
      },
      min: {
        message: "Имя должно состаять миниму из 3 символов",
        value: 3,
      },
    },
    password: {
      isRequired: {
        message: "Пароль обязательна для заполнения",
      },
      isCapitalSymbol: {
        message: "Пароль должен содержать хотя бы одну заглавную букву",
      },
      isContainDigit: {
        message: "Пароль должен содержать хотя бы одно число",
      },
      min: {
        message: "Пароль должен состаять миниму из 8 символов",
        value: 8,
      },
    },
    licence: {
      isRequired: {
        message:
          "Вы не можете использовать наш сервис без подтреврждения лицензионного соглашения",
      },
    },
  };

  useEffect(() => {
    validate();
  }, [data]);

  const validate = () => {
    const errors = validator(data, validatorConfog);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const isValid = Object.keys(errors).length === 0;

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <UsersWrap>
      <div style={{ position: "absolute", left: "50px" }}>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-12 offset-md-3 shadow p-4">
              <h3 className="mb-4">Register Form</h3>
              <form onSubmit={handleSubmit}>
                <TextField
                  label="Электронная почта"
                  name="email"
                  value={data.email}
                  onChange={handleChange}
                  error={errors.email}
                />
                <TextField
                  label="Имя"
                  name="name"
                  value={data.name}
                  onChange={handleChange}
                  error={errors.name}
                />
                <TextField
                  label="Пароль"
                  type="password"
                  name="password"
                  value={data.password}
                  onChange={handleChange}
                  error={errors.password}
                />

                {/* <RadioField
        options={[
          { name: "Male", value: "male" },
          { name: "Female", value: "female" },
          { name: "Other", value: "other" },
        ]}
        value={data.sex}
        name="sex"
        onChange={handleChange}
        label="Выберите ваш пол"
      /> */}
                <CheckBoxField
                  value={data.licence}
                  onChange={handleChange}
                  name="licence"
                  error={errors.licence}
                >
                  Подтвердить <a>лицензионное соглашение</a>
                </CheckBoxField>
                <button
                  type="submit"
                  disabled={!isValid}
                  className="btn btn-primary w-100 mx-auto"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </UsersWrap>
  );
};

export default RegisterForm;
