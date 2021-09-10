import React from "react";
import styles from "./styles.module.scss";

const Input = ({ handleChange, value, label, placeholder, type }) => {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor="">{label}</label>
      <input
        type={type}
        onChange={handleChange}
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
};

export default Input;
