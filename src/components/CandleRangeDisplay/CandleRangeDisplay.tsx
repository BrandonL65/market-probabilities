import React from "react";
import { observer } from "mobx-react";
import styles from "./CandleRangeDisplay.module.css";

interface CandleRangeDisplayProps {
  identifier: string;
  section: number | string;
  total: number;
  totalBars?: number;
  OHfromCorrespondingLW?: number;
}

const CandleRangeDisplay = observer((props: CandleRangeDisplayProps) => {
  //getPercentage will only be displayed if totalBars prop is present
  const getPercentage = () => {
    const { total, totalBars } = props;
    return ((total / totalBars!) * 100).toFixed(1);
  };

  const displayOHtoLW = () => {
    if (props.OHfromCorrespondingLW || props.OHfromCorrespondingLW === 0) {
      return (
        <div className={styles["inner-container"]}>
          OH Avg: {props.OHfromCorrespondingLW} pips
        </div>
      );
    }
    return null;
  };

  if (props.identifier === "3") {
    console.log(props.total, props.OHfromCorrespondingLW);
  }

  return (
    <div className={styles["container"]}>
      <div className={styles["inner-container"]}>{props.section} pips</div>
      <div className={styles["inner-container"]}> {props.total} bars</div>
      {props.totalBars ? (
        <div className={styles["inner-container"]}>{getPercentage()} %</div>
      ) : null}
      {/* {props.OHfromCorrespondingLW ? (
        <div className={styles["inner-container"]}>
          OH: Avg {props.OHfromCorrespondingLW} pips{" "}
        </div>
      ) : null} */}
      {displayOHtoLW()}
    </div>
  );
});

export default CandleRangeDisplay;
