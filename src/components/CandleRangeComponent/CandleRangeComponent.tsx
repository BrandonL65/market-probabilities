import React from "react";
import { observer } from "mobx-react";
import { CandleRangeStatistics } from "../../stores/DataStore";
import CandleRangeDisplay from "../CandleRangeDisplay/CandleRangeDisplay";

interface CandleRangeComponentProps extends CandleRangeStatistics {
  totalBars: number;
}

const CandleRangeComponent = observer((props: CandleRangeComponentProps) => {
  const { totalBars } = props;
  return (
    <div style={{ marginBottom: "2%", width: "65%", margin: "auto" }}>
      <h1 style={{ color: "white" }}>
        Below is the total range of the candles
      </h1>
      <div>
        <CandleRangeDisplay
          identifier={"1"}
          section={5}
          total={props.u5}
          totalBars={totalBars}
        />
        <CandleRangeDisplay
          identifier={"1"}
          section={10}
          total={props.u10}
          totalBars={totalBars}
        />
        <CandleRangeDisplay
          identifier={"1"}
          section={15}
          total={props.u15}
          totalBars={totalBars}
        />
        <CandleRangeDisplay
          identifier={"1"}
          section={20}
          total={props.u20}
          totalBars={totalBars}
        />
        <CandleRangeDisplay
          identifier={"1"}
          section={25}
          total={props.u25}
          totalBars={totalBars}
        />
        <CandleRangeDisplay
          identifier={"1"}
          section={30}
          total={props.u30}
          totalBars={totalBars}
        />
        <CandleRangeDisplay
          identifier={"1"}
          section={35}
          total={props.u35}
          totalBars={totalBars}
        />
        <CandleRangeDisplay
          identifier={"1"}
          section={40}
          total={props.u40}
          totalBars={totalBars}
        />
        <CandleRangeDisplay
          identifier={"1"}
          section={45}
          total={props.u45}
          totalBars={totalBars}
        />
        <CandleRangeDisplay
          identifier={"1"}
          section={50}
          total={props.u50}
          totalBars={totalBars}
        />
        <CandleRangeDisplay
          identifier={"1"}
          section={55}
          total={props.u55}
          totalBars={totalBars}
        />
        <CandleRangeDisplay
          identifier={"1"}
          section={60}
          total={props.u60}
          totalBars={totalBars}
        />
        <CandleRangeDisplay
          identifier={"1"}
          section={65}
          total={props.u65}
          totalBars={totalBars}
        />
        <CandleRangeDisplay
          identifier={"1"}
          section={70}
          total={props.u70}
          totalBars={totalBars}
        />
        <CandleRangeDisplay
          identifier={"1"}
          section={80}
          total={props.u80}
          totalBars={totalBars}
        />
        <CandleRangeDisplay
          identifier={"1"}
          section={90}
          total={props.u90}
          totalBars={totalBars}
        />
        <CandleRangeDisplay
          identifier={"1"}
          section={100}
          total={props.u100}
          totalBars={totalBars}
        />
        <CandleRangeDisplay
          identifier={"1"}
          section={110}
          total={props.u110}
          totalBars={totalBars}
        />
        <CandleRangeDisplay
          identifier={"1"}
          section={120}
          total={props.u120}
          totalBars={totalBars}
        />
        <CandleRangeDisplay
          identifier={"1"}
          section={130}
          total={props.u130}
          totalBars={totalBars}
        />
        <CandleRangeDisplay
          identifier={"1"}
          section={140}
          total={props.u140}
          totalBars={totalBars}
        />
        <CandleRangeDisplay
          identifier={"1"}
          section={150}
          total={props.u150}
          totalBars={totalBars}
        />
        <CandleRangeDisplay
          identifier={"1"}
          section={160}
          total={props.u160}
          totalBars={totalBars}
        />
        <CandleRangeDisplay
          identifier={"1"}
          section={170}
          total={props.u170}
          totalBars={totalBars}
        />
        <CandleRangeDisplay
          identifier={"1"}
          section={180}
          total={props.u180}
          totalBars={totalBars}
        />
        <CandleRangeDisplay
          identifier={"1"}
          section={190}
          total={props.u190}
          totalBars={totalBars}
        />
        <CandleRangeDisplay
          identifier={"1"}
          section={200}
          total={props.u200}
          totalBars={totalBars}
        />
        <CandleRangeDisplay
          identifier={"1"}
          section={210}
          total={props.u210}
          totalBars={totalBars}
        />
        <CandleRangeDisplay
          identifier={"1"}
          section={220}
          total={props.u220}
          totalBars={totalBars}
        />
        <CandleRangeDisplay
          identifier={"1"}
          section={230}
          total={props.u230}
          totalBars={totalBars}
        />
        <CandleRangeDisplay
          identifier={"1"}
          section={240}
          total={props.u240}
          totalBars={totalBars}
        />
        <CandleRangeDisplay
          identifier={"1"}
          section={250}
          total={props.u250}
          totalBars={totalBars}
        />
        <CandleRangeDisplay
          identifier={"1"}
          section={260}
          total={props.u250plus}
          totalBars={totalBars}
        />
      </div>
    </div>
  );
});

export default CandleRangeComponent;
