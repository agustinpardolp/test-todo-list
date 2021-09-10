import React, { useState } from "react";
import ErrorMessage from "../ErrorMessage";
import styles from "./styles.module.scss";

const Input = ({ handleChange, value, label, placeholder, type, errorMessage, regex, disabled = false }) => {
    const [error, setError] = useState(false);

    const onChange = (e) => {
        if (regex && e.target.value) {
            regex.test(e.target.value)
            setError(!regex.test(e.target.value))
            handleChange(e)
        } else {
            handleChange(e)
            setError(false)
        }
    }
    return (
        <div className={styles.inputContainer}>
            {label && <label htmlFor="">{label}</label>}
            <input
                type={type}
                onChange={onChange}
                placeholder={placeholder}
                value={value}
                name='input'
                disabled={disabled}
            />
            {error && <ErrorMessage errorMessage={errorMessage} />}
        </div>
    );
};

export default Input;
