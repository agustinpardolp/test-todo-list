import React from "react";
import styles from "./styles.module.scss";

const Checkbox = ({ onChange, isChecked, isDisabled, label }) => {
  return (
    <div className={styles.checkboxContainer}>
      {label && <label htmlFor="">{label}</label>}
      <input
        type="checkbox"
        onChange={onChange}
        checked={isChecked}
        disabled={isDisabled}
      />
    </div>
  );
};

export default Checkbox;
