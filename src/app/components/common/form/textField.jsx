import React from "react";
import { useState } from "react";

const TextField = ({ label, name, type, value, onChange, error }) => {
  const [showPassword, setShowPassword] = useState();
  const getInputClasses = () => {
    return "form-control" + (error ? " is-invalid" : "");
  };

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <div className="mb-4">
      <label htmlFor={name}>{label}</label>
      <div className="input-group">
        <input
          type={showPassword ? "text" : type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          style={{ width: "400px" }}
          className={getInputClasses()}
        />
        {type === "password" && (
          <button
            className="btn btn-outlane-secondary"
            type="button"
            onClick={toggleShowPassword}
          >
            button
          </button>
        )}
      </div>
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

export default TextField;
