import React from "react";

const Button = ({ label, handleClick }) => {
  return (
    <div>
      <button onClick={handleClick}>{label}</button>
    </div>
  );
};

export default Button;
