import React from "react";

const Input = ({ type, id, name, placeholder, required, onChange ,value}) => {
  return (
    <>
      <label htmlFor={id}>{placeholder}</label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
        value={value}
      />
    </>
  );
};

export default Input;
