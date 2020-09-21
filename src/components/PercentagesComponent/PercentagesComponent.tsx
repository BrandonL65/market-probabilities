import React from "react";
import { observer } from "mobx-react";
import styles from "./PercentagesComponent.module.css";

interface PercentagesComponentProps {
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

/*
This component displays the raw data separated by 0.25% intervals. For example,
it shows the total # of bars, and % of total bars, that closed between 0% and 0.25%,
and 0.25% - 0.5%, etc, up to a total of +1% and -1%.
*/
const PercentagesComponent = observer((props: PercentagesComponentProps) => {
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

  //gets % of the days that price closes within that range, like 0.25 to 0.5, etc
  const getPercentageForClose = (count: number, totalDays: number) => {
    return ((count / totalDays) * 100).toFixed(2);
  };

  return (
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
      <h3 className={styles["middle"]}>
        0.25% to 0.5%: {upTwentyFiveToFifty},{" "}
        {getPercentageForClose(upTwentyFiveToFifty, totalBars)}%
      </h3>
      <h3 className={styles["middle"]}>
        0% to 0.25%: {upZeroToTwentyFive},{" "}
        {getPercentageForClose(upZeroToTwentyFive, totalBars)}%
      </h3>
      <h3 className={styles["middle"]}>
        -0% to -0.25%: {downZeroToTwentyFive},{" "}
        {getPercentageForClose(downZeroToTwentyFive, totalBars)}%
      </h3>
      <h3 className={styles["middle"]}>
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
        -1%+: {downOnePlus}, {getPercentageForClose(downOnePlus, totalBars)}%
      </h3>
    </div>
  );
});

export default PercentagesComponent;
