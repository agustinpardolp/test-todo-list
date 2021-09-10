import React from "react";
import styles from "./styles.module.scss";

const Button = ({ label, handleClick, disabled = false }) => {
    return (
        <div>
            <button disabled={disabled} onClick={handleClick} className={`${styles.button}`}>{label}</button>
        </div>
    );
};

export default Button;
