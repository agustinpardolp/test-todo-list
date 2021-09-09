import React from "react";
import styles from "./styles.module.scss";

const Input = ({ handleChange, value, label, placeholder }) => {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor="">{label}</label>
      <input
        type="text"
        onChange={handleChange}
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
};

export default Input;
