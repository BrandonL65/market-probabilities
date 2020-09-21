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

  //gets % of the days that price closes within that range, like 0.25 to 0.5, etc
  const getPercentageForClose = (count: number, totalDays: number) => {
    return ((count / totalDays) * 100).toFixed(2);
  };

  return (
    <div className={styles["container"]}>
      <h1>Data component for EURUSD</h1>
      <h3>Total Bars: {totalBars}</h3>
      <div className={styles["stats"]}>
        <PercentagesComponent
          totalBars={totalBars}
          totalUpDays={totalUpDays}
          totalDownDays={totalDownDays}
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
    </div>
  );
});
export default DataComponent;
