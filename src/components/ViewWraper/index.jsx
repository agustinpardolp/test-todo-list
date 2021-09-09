import React from "react";
import styles from "./styles.module.scss";

const ViewWrapper = ({ children, title }) => (
  <div className={styles.container}>
    <div className={styles.titleContainer}>
      <h2>TodoList - Task manager</h2>
    </div>

    {children}
  </div>
);

export default ViewWrapper;
