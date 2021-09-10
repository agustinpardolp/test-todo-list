import React, { useMemo } from "react";
import Button from "../../../../components/Button";
import Checkbox from "../../../../components/Checkbox";
import { handleCheckStatus, statusTypes } from "./constants";
import styles from "./styles.module.scss";

const Todo = ({ handleChange, value }) => {

  const onCheckStatus = useMemo(() => {
    return handleCheckStatus(value);
  }, [value]);
  
  const { nextStatus, isChecked, isDisabled } = onCheckStatus

  return (
    <li className={styles.todoContainer}>
      <Checkbox
        onChange={() => handleChange(value, nextStatus)}
        isChecked={isChecked}
        isDisabled={isDisabled}
        label={value.title}
      />
      {value.status === statusTypes.DONE ? (
        <Button
          label="archivar"
          handleClick={() => handleChange(value, statusTypes.ARCHIVED)}
          variant="warning"
        />
      ) : null}
    </li>
  );
};

export default Todo;
