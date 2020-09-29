import React from "react";
import { observer } from "mobx-react";
import styles from "./SinglePercentage.module.css";

interface SinglePercentageProps {
  title: string;
  totalBars: number;
  percentage: string;
}

const SinglePercentage = observer((props: SinglePercentageProps) => {
  return (
    <div className={styles["container"]}>
      <div
        className={`${styles["inner-container"]} ${styles["middle-percentages"]}`}
      >
        {props.title}
      </div>
      <div className={styles["inner-container"]}>{props.totalBars}</div>
      <div className={styles["inner-container"]}>{props.percentage}%</div>
    </div>
  );
});

export default SinglePercentage;
