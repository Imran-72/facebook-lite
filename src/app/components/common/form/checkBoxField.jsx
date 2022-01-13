import React from "react";

const CheckBoxField = ({ name, value, onChange, children }) => {
  const handleChange = () => {
    onChange({ name: name, value: !value });
  };
  return (
    <div className="form-check mb-2">
      <input
        className="form-check-input"
        type="checkbox"
        value=""
        id={name}
        onChange={handleChange}
        checked={value}
      />
      <label className="form-check-label" htmlFor={name}>
        {children}
      </label>
    </div>
  );
};

export default CheckBoxField;
