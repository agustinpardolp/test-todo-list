import React, { useState } from "react";
import ErrorMessage from "../ErrorMessage";
import styles from "./styles.module.scss";

const Input = ({ handleChange, value, label, placeholder, type, errorMessage, regex, disabled = false, error }) => {

    return (
        <div className={styles.inputContainer}>
            {label && <label htmlFor="">{label}</label>}
            <input
                type={type}
                onChange={(e)=>handleChange(e, regex)}
                placeholder={placeholder}
                value={value}
                name='input'
                disabled={disabled }
            />
            {error && <ErrorMessage errorMessage={errorMessage} />}
        </div>
    );
};

export default Input;
