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
        <div className={styles["percentages"]}>
          <h3>
            Total Up Days: {totalUpDays}, {getPercentage("up")}%
          </h3>
          <h3>
            Total Down Days: {totalDownDays}, {getPercentage("down")}%
          </h3>
          <div>
            <h3>
              1%+: {upOnePlus}, {getPercentageForClose(upOnePlus, totalBars)}%
            </h3>
            <h3>
              0.75% to 1%: {upSeventyFiveToOne},{" "}
              {getPercentageForClose(upSeventyFiveToOne, totalBars)}%
            </h3>
            <h3>
              0.5% to 0.75%: {upFiftyToSeventyFive},{" "}
              {getPercentageForClose(upFiftyToSeventyFive, totalBars)}%
            </h3>
            <h3>
              0.25% to 0.5%: {upTwentyFiveToFifty},{" "}
              {getPercentageForClose(upTwentyFiveToFifty, totalBars)}%
            </h3>
            <h3>
              0% to 0.25%: {upZeroToTwentyFive},{" "}
              {getPercentageForClose(upZeroToTwentyFive, totalBars)}%
            </h3>
            <h3>
              -0% to -0.25%: {downZeroToTwentyFive},{" "}
              {getPercentageForClose(downZeroToTwentyFive, totalBars)}%
            </h3>
            <h3>
              -0.25% to -0.5%: {downTwentyFiveToFifty},{" "}
              {getPercentageForClose(downTwentyFiveToFifty, totalBars)}%
            </h3>
            <h3>
              -0.5% to -0.75%: {downFiftyToSeventyFive},{" "}
              {getPercentageForClose(downFiftyToSeventyFive, totalBars)}%
            </h3>
            <h3>
              -0.75% to -1%: {downSeventyFiveToOne},{" "}
              {getPercentageForClose(downSeventyFiveToOne, totalBars)}%
            </h3>
            <h3>
              -1%+: {downOnePlus},{" "}
              {getPercentageForClose(downOnePlus, totalBars)}%
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
});
export default DataComponent;
