import React from "react";
import styles from "./DataComponent.module.css";
import { observer } from "mobx-react";
import PercentagesComponent from "../PercentagesComponent/PercentagesComponent";

interface DataComponentProps {
  totalBars: number;
  totalUpDays: number;
  totalDownDays: number;
  upOnePlus: number;
  upSeventyFiveToOne: number;
  upFiftyToSeventyFive: number;
  upTwentyFiveToFifty: number;
  upZeroToTwentyFive: number;
  downZeroToTwentyFive: number;
  downTwentyFiveToFifty: number;
  downFiftyToSeventyFive: number;
  downSeventyFiveToOne: number;
  downOnePlus: number;
  averageRange: number;
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
    downZeroToTwentyFive,
    downTwentyFiveToFifty,
    downFiftyToSeventyFive,
    downSeventyFiveToOne,
    downOnePlus,
    averageRange,
  } = props;

  //gets total % of up and down days
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
        Total Up Days: {totalUpDays}, {getPercentage("up")}%
      </h3>
      <h3>
        Total Down Days: {totalDownDays}, {getPercentage("down")}%
      </h3>
      <h3>Average High to Low range: {averageRange} pips</h3>
      <PercentagesComponent
        totalBars={totalBars}
        upOnePlus={upOnePlus}
        upSeventyFiveToOne={upSeventyFiveToOne}
        upFiftyToSeventyFive={upFiftyToSeventyFive}
        upTwentyFiveToFifty={upTwentyFiveToFifty}
        upZeroToTwentyFive={upZeroToTwentyFive}
        downZeroToTwentyFive={downZeroToTwentyFive}
        downTwentyFiveToFifty={downTwentyFiveToFifty}
        downFiftyToSeventyFive={downFiftyToSeventyFive}
        downSeventyFiveToOne={downSeventyFiveToOne}
        downOnePlus={downOnePlus}
      />
    </div>
  );
});
export default DataComponent;
