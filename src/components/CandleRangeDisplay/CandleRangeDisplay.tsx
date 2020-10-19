import React from "react";
import { observer } from "mobx-react";
import styles from "./CandleRangeDisplay.module.css";

interface CandleRangeDisplayProps {
  identifier: string;
  section: number | string;
  total: number;
  totalBars?: number;
}

const CandleRangeDisplay = observer((props: CandleRangeDisplayProps) => {
  //getPercentage will only be displayed if totalBars prop is present
  const getPercentage = () => {
    const { total, totalBars } = props;
    return ((total / totalBars!) * 100).toFixed(1);
  };
  const symbolIdentifier = () => {
    if (props.identifier === "1") {
      return "bars";
    } else {
      return "pips";
    }
  };
  return (
    <div className={styles["container"]}>
      <div className={styles["inner-container"]}>{props.section} pips</div>
      <div className={styles["inner-container"]}>
        {" "}
        {props.total} {symbolIdentifier()}
      </div>
      {props.totalBars ? (
        <div className={styles["inner-container"]}>{getPercentage()} %</div>
      ) : null}
    </div>
  );
});

export default CandleRangeDisplay;
