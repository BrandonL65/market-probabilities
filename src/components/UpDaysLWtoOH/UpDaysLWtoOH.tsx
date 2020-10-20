import React from "react";
import { observer } from "mobx-react";
import { UpCandleOHFromLowerWick } from "../../stores/DataStore";
import CandleRangeDisplay from "../CandleRangeDisplay/CandleRangeDisplay";
import styles from "./UpDaysLWtoOH.module.css";

interface UpDaysLWtoOHProps extends UpCandleOHFromLowerWick {
  totalUpBars: number;
}

const UpDaysLWtoOH = observer((props: UpDaysLWtoOHProps) => {
  const {
    LW10,
    LW20,
    LW30,
    LW40,
    LW50,
    LW60,
    LW70,
    LW80,
    LW90,
    LW100,
    LW110,
    LW120,
    LW120plus,
    totalUpBars,
  } = props;
  const getAverageNumOfBars = (accumulated: number, totalBars: number) => {
    if (totalBars === 0) {
      return 0;
    }
    return Math.floor(accumulated / totalBars);
  };

  return (
    <div className={styles.container}>
      <h1>Up Days OH compared to Lower Wick Ranges</h1>
      <CandleRangeDisplay
        identifier={"3"}
        section={"Up days lower wick 10"}
        total={LW10.totalUpCandlesWithThisLW}
        totalBars={totalUpBars}
        OHfromCorrespondingLW={getAverageNumOfBars(
          LW10.averageOH,
          LW10.totalUpCandlesWithThisLW
        )}
      />
      <CandleRangeDisplay
        identifier={"3"}
        section={"Up days lower wick 20"}
        total={LW20.totalUpCandlesWithThisLW}
        totalBars={totalUpBars}
        OHfromCorrespondingLW={getAverageNumOfBars(
          LW20.averageOH,
          LW20.totalUpCandlesWithThisLW
        )}
      />
      <CandleRangeDisplay
        identifier={"3"}
        section={"Up days lower wick 30"}
        total={LW30.totalUpCandlesWithThisLW}
        totalBars={totalUpBars}
        OHfromCorrespondingLW={getAverageNumOfBars(
          LW30.averageOH,
          LW30.totalUpCandlesWithThisLW
        )}
      />
      <CandleRangeDisplay
        identifier={"3"}
        section={"Up days lower wick 40"}
        total={LW40.totalUpCandlesWithThisLW}
        totalBars={totalUpBars}
        OHfromCorrespondingLW={getAverageNumOfBars(
          LW40.averageOH,
          LW40.totalUpCandlesWithThisLW
        )}
      />
      <CandleRangeDisplay
        identifier={"3"}
        section={"Up days lower wick 50"}
        total={LW50.totalUpCandlesWithThisLW}
        totalBars={totalUpBars}
        OHfromCorrespondingLW={getAverageNumOfBars(
          LW50.averageOH,
          LW50.totalUpCandlesWithThisLW
        )}
      />
      <CandleRangeDisplay
        identifier={"3"}
        section={"Up days lower wick 60"}
        total={LW60.totalUpCandlesWithThisLW}
        totalBars={totalUpBars}
        OHfromCorrespondingLW={getAverageNumOfBars(
          LW60.averageOH,
          LW60.totalUpCandlesWithThisLW
        )}
      />
      <CandleRangeDisplay
        identifier={"3"}
        section={"Up days lower wick 70"}
        total={LW70.totalUpCandlesWithThisLW}
        totalBars={totalUpBars}
        OHfromCorrespondingLW={getAverageNumOfBars(
          LW70.averageOH,
          LW70.totalUpCandlesWithThisLW
        )}
      />
      <CandleRangeDisplay
        identifier={"3"}
        section={"Up days lower wick 80"}
        total={LW80.totalUpCandlesWithThisLW}
        totalBars={totalUpBars}
        OHfromCorrespondingLW={getAverageNumOfBars(
          LW80.averageOH,
          LW80.totalUpCandlesWithThisLW
        )}
      />
      <CandleRangeDisplay
        identifier={"3"}
        section={"Up days LW 90"}
        total={LW90.totalUpCandlesWithThisLW}
        totalBars={totalUpBars}
        OHfromCorrespondingLW={getAverageNumOfBars(
          LW90.averageOH,
          LW90.totalUpCandlesWithThisLW
        )}
      />
      <CandleRangeDisplay
        identifier={"3"}
        section={"Up days lower wick 100"}
        total={LW100.totalUpCandlesWithThisLW}
        totalBars={totalUpBars}
        OHfromCorrespondingLW={getAverageNumOfBars(
          LW100.averageOH,
          LW100.totalUpCandlesWithThisLW
        )}
      />
      <CandleRangeDisplay
        identifier={"3"}
        section={"Up days lower wick 110"}
        total={LW110.totalUpCandlesWithThisLW}
        totalBars={totalUpBars}
        OHfromCorrespondingLW={getAverageNumOfBars(
          LW110.averageOH,
          LW110.totalUpCandlesWithThisLW
        )}
      />
      <CandleRangeDisplay
        identifier={"3"}
        section={"Up days lower wick 120"}
        total={LW120.totalUpCandlesWithThisLW}
        totalBars={totalUpBars}
        OHfromCorrespondingLW={getAverageNumOfBars(
          LW120.averageOH,
          LW120.totalUpCandlesWithThisLW
        )}
      />
      <CandleRangeDisplay
        identifier={"3"}
        section={"Up days lower wick 120+"}
        total={LW120plus.totalUpCandlesWithThisLW}
        totalBars={totalUpBars}
        OHfromCorrespondingLW={getAverageNumOfBars(
          LW120plus.averageOH,
          LW120plus.totalUpCandlesWithThisLW
        )}
      />
    </div>
  );
});

export default UpDaysLWtoOH;
