import React, { useMemo } from "react";
import Button from "../../../../components/Button";
import Checkbox from "../../../../components/Checkbox";
import { handleCheckStatus, statusTypes } from "./constants";
import styles from "./styles.module.scss";

const Todo = ({ handleChange, value }) => {

  const onCheckStatus = useMemo(() => {
    return handleCheckStatus(value);
  }, [value]);

  return (
    <li className={styles.todoContainer}>
      <Checkbox
        onChange={() => handleChange(value, onCheckStatus.nextStatus)}
        isChecked={onCheckStatus.isChecked}
        isDisabled={onCheckStatus.isDisabled}
        label={value.title}
      />
      {value.status === statusTypes.DONE ? (
        <Button
          label="archivar"
          handleClick={() => handleChange(value, statusTypes.ARCHIVED)}
        />
      ) : null}
    </li>
  );
};

export default Todo;
