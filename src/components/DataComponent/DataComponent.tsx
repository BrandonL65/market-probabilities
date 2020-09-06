import React from "react";
import styles from "./DataComponent.module.css";
import { observer } from "mobx-react";

interface DataComponentProps {
  totalBars: number;
  totalUpDays: number;
  totalDownDays: number;
}

const DataComponent = observer((props: DataComponentProps) => {
  const { totalBars, totalUpDays, totalDownDays } = props;

  const getPercentage = (direction: string) => {
    switch (direction) {
      case "up":
        return ((totalUpDays / totalBars) * 100).toFixed(2);
      case "down":
        return ((totalDownDays / totalBars) * 100).toFixed(2);
    }
  };

  return (
    <div className={styles["container"]}>
      <h1>Data component for EURUSD</h1>
      <h3>Total Bars: {totalBars}</h3>
      <h3>
        Total Up Days: {totalUpDays} {getPercentage("up")}
      </h3>
      <h3>
        Total Down Days: {totalDownDays} {getPercentage("down")}
      </h3>
    </div>
  );
});
export default DataComponent;
