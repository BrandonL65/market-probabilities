import React from "react";
import { observer } from "mobx-react";
import SinglePercentage from "../SinglePercentage/SinglePercentage";
import styles from "./PercentagesComponent.module.css";

interface PercentagesComponentProps {
  totalBars: number;
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
  const getPercentageForClose = (count: number, totalDays: number): string => {
    return ((count / totalDays) * 100).toFixed(2);
  };

  return (
    <div>
      <SinglePercentage
        title="1%+"
        totalBars={upOnePlus}
        percentage={getPercentageForClose(upOnePlus, totalBars)}
      />
      <SinglePercentage
        title={"0.75% - 1%"}
        totalBars={upSeventyFiveToOne}
        percentage={getPercentageForClose(upSeventyFiveToOne, totalBars)}
      />
      <SinglePercentage
        title={"0.5% - 0.75%"}
        totalBars={upFiftyToSeventyFive}
        percentage={getPercentageForClose(upFiftyToSeventyFive, totalBars)}
      />
      <SinglePercentage
        title={"0.25% - 0.5%"}
        totalBars={upTwentyFiveToFifty}
        percentage={getPercentageForClose(upTwentyFiveToFifty, totalBars)}
      />
      <SinglePercentage
        title={"0% - 0.25%"}
        totalBars={upZeroToTwentyFive}
        percentage={getPercentageForClose(upZeroToTwentyFive, totalBars)}
      />
      <SinglePercentage
        title={"0% - -0.25%"}
        totalBars={downZeroToTwentyFive}
        percentage={getPercentageForClose(downZeroToTwentyFive, totalBars)}
      />
      <SinglePercentage
        title={"-0.25% - -0.5%"}
        totalBars={downTwentyFiveToFifty}
        percentage={getPercentageForClose(downTwentyFiveToFifty, totalBars)}
      />
      <SinglePercentage
        title={"-0.5% - -0.75%"}
        totalBars={downFiftyToSeventyFive}
        percentage={getPercentageForClose(downFiftyToSeventyFive, totalBars)}
      />
      <SinglePercentage
        title={"-0.75% - -1%"}
        totalBars={downSeventyFiveToOne}
        percentage={getPercentageForClose(downSeventyFiveToOne, totalBars)}
      />
      <SinglePercentage
        title={"-1%-"}
        totalBars={downOnePlus}
        percentage={getPercentageForClose(downOnePlus, totalBars)}
      />
    </div>
  );
});

export default PercentagesComponent;
