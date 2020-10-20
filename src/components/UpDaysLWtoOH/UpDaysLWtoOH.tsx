import React from "react";
import { observer } from "mobx-react";
import { UpCandleOHFromLowerWick } from "../../stores/DataStore";
import CandleRangeDisplay from "../CandleRangeDisplay/CandleRangeDisplay";

const UpDaysLWtoOH = observer((props: UpCandleOHFromLowerWick) => {
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
  } = props;
  const getAverageNumOfBars = (accumulated: number, totalBars: number) => {
    return Math.floor(accumulated / totalBars);
  };

  return (
    <div>
      <h1 style={{ color: "white" }}>
        Up Days OH compared to Lower Wick Ranges
      </h1>
      <CandleRangeDisplay
        identifier={"3"}
        section={"Up days lower wick 10"}
        total={getAverageNumOfBars(
          LW10.averageOH,
          LW10.totalUpCandlesWithThisLW
        )}
      />
      <CandleRangeDisplay
        identifier={"3"}
        section={"Up days lower wick 20"}
        total={getAverageNumOfBars(
          LW20.averageOH,
          LW20.totalUpCandlesWithThisLW
        )}
      />
      <CandleRangeDisplay
        identifier={"3"}
        section={"Up days lower wick 30"}
        total={getAverageNumOfBars(
          LW30.averageOH,
          LW30.totalUpCandlesWithThisLW
        )}
      />
      <CandleRangeDisplay
        identifier={"3"}
        section={"Up days lower wick 40"}
        total={getAverageNumOfBars(
          LW40.averageOH,
          LW40.totalUpCandlesWithThisLW
        )}
      />
      <CandleRangeDisplay
        identifier={"3"}
        section={"Up days lower wick 50"}
        total={getAverageNumOfBars(
          LW50.averageOH,
          LW50.totalUpCandlesWithThisLW
        )}
      />
      <CandleRangeDisplay
        identifier={"3"}
        section={"Up days lower wick 60"}
        total={getAverageNumOfBars(
          LW60.averageOH,
          LW60.totalUpCandlesWithThisLW
        )}
      />
      <CandleRangeDisplay
        identifier={"3"}
        section={"Up days lower wick 70"}
        total={getAverageNumOfBars(
          LW70.averageOH,
          LW70.totalUpCandlesWithThisLW
        )}
      />
      <CandleRangeDisplay
        identifier={"3"}
        section={"Up days lower wick 80"}
        total={getAverageNumOfBars(
          LW80.averageOH,
          LW80.totalUpCandlesWithThisLW
        )}
      />
      <CandleRangeDisplay
        identifier={"3"}
        section={"Up days lower wick 90"}
        total={getAverageNumOfBars(
          LW90.averageOH,
          LW90.totalUpCandlesWithThisLW
        )}
      />
      <CandleRangeDisplay
        identifier={"3"}
        section={"Up days lower wick 100"}
        total={getAverageNumOfBars(
          LW100.averageOH,
          LW100.totalUpCandlesWithThisLW
        )}
      />
      <CandleRangeDisplay
        identifier={"3"}
        section={"Up days lower wick 110"}
        total={getAverageNumOfBars(
          LW110.averageOH,
          LW110.totalUpCandlesWithThisLW
        )}
      />
      <CandleRangeDisplay
        identifier={"3"}
        section={"Up days lower wick 120"}
        total={getAverageNumOfBars(
          LW120.averageOH,
          LW120.totalUpCandlesWithThisLW
        )}
      />
      <CandleRangeDisplay
        identifier={"3"}
        section={"Up days lower wick 120+"}
        total={getAverageNumOfBars(
          LW120plus.averageOH,
          LW120plus.totalUpCandlesWithThisLW
        )}
      />
    </div>
  );
});

export default UpDaysLWtoOH;
