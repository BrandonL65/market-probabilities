import React from "react";
import { observer } from "mobx-react";
import styles from "./CandleRangeDisplay.module.css";

interface CandleRangeDisplayProps {
  section: number | string;
  total: number;
  totalBars: number;
}

const CandleRangeDisplay = observer((props: CandleRangeDisplayProps) => {
  const getPercentage = () => {
    const { total, totalBars } = props;
    return ((total / totalBars) * 100).toFixed(1);
  };
  return (
    <div className={styles["container"]}>
      <div className={styles["inner-container"]}>{props.section} pips</div>
      <div className={styles["inner-container"]}> {props.total} bars</div>
      <div className={styles["inner-container"]}>{getPercentage()} %</div>
    </div>
  );
});

export default CandleRangeDisplay;
