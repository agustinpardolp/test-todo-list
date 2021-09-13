import React from "react";
import styles from "./styles.module.scss";

const ViewWrapper = ({ children, title }) => (
  <div className={styles.container} data-testid="viewWrapper-id">
    <div className={styles.titleContainer}>
      <h2>{title}</h2>
    </div>

    {children}
  </div>
);

export default ViewWrapper;
