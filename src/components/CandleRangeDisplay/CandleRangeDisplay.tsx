import React from "react";
import { observer } from "mobx-react";
import styles from "./CandleRangeDisplay.module.css";

interface CandleRangeDisplayProps {
  section: number;
  total: number;
}

const CandleRangeDisplay = observer((props: CandleRangeDisplayProps) => {
  return (
    <div className={styles["container"]}>
      <div className={styles["inner-container"]}>{props.section} pips</div>
      <div className={styles["inner-container"]}> {props.total} bars</div>
    </div>
  );
});

export default CandleRangeDisplay;
