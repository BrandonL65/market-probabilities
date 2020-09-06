import React from "react";
import styles from "./DataComponent.module.css";
import { observer } from "mobx-react";

interface DataComponentProps {
  totalBars: number;
  totalUpDays: number;
  totalDownDays: number;
  upOnePlus: number;
  upSeventyFiveToOne: number;
  upFiftyToSeventyFive: number;
  upTwentyFiveToFifty: number;
  upZeroToTwentyFive: number;
}

const DataComponent = observer((props: DataComponentProps) => {
  const {
    totalBars,
    totalUpDays,
    totalDownDays,
    upOnePlus,
    upSeventyFiveToOne,
    upFiftyToSeventyFive,
    upTwentyFiveToFifty,
    upZeroToTwentyFive,
  } = props;

  console.log(upTwentyFiveToFifty);
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
      <div>
        <h3>
          Total Up Days: {totalUpDays} {getPercentage("up")}%
        </h3>
        <h3>Up 1%+: {upOnePlus}</h3>
        <h3>Up 0.75% to 1%: {upSeventyFiveToOne}</h3>
        <h3>Up 0.5% to 0.75%: {upFiftyToSeventyFive}</h3>
        <h3>Up 0.25% to 0.5%: {upTwentyFiveToFifty}</h3>
        <h3>Up 0% to 0.25%: {upZeroToTwentyFive}</h3>
      </div>
      <h3>
        Total Down Days: {totalDownDays} {getPercentage("down")}%
      </h3>
    </div>
  );
});
export default DataComponent;
