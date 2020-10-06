import React from "react";
import { observer } from "mobx-react";
import { CandleRangeStatistics } from "../../stores/DataStore";
import CandleRangeDisplay from "../CandleRangeDisplay/CandleRangeDisplay";

const CandleRangeComponent = observer((props: CandleRangeStatistics) => {
  return (
    <div>
      <h1>Below is the total range of the candles</h1>
      <div>
        <CandleRangeDisplay section={5} total={props.u5} />
        <CandleRangeDisplay section={10} total={props.u10} />
        <CandleRangeDisplay section={15} total={props.u15} />
        <CandleRangeDisplay section={20} total={props.u20} />
        <CandleRangeDisplay section={25} total={props.u25} />
        <CandleRangeDisplay section={30} total={props.u30} />
        <CandleRangeDisplay section={35} total={props.u35} />
        <CandleRangeDisplay section={40} total={props.u40} />
        <CandleRangeDisplay section={45} total={props.u45} />
        <CandleRangeDisplay section={50} total={props.u50} />
        <CandleRangeDisplay section={55} total={props.u55} />
        <CandleRangeDisplay section={60} total={props.u60} />
        <CandleRangeDisplay section={65} total={props.u65} />
        <CandleRangeDisplay section={70} total={props.u70} />
        <CandleRangeDisplay section={80} total={props.u80} />
        <CandleRangeDisplay section={90} total={props.u90} />
        <CandleRangeDisplay section={100} total={props.u100} />
        <CandleRangeDisplay section={110} total={props.u110} />
        <CandleRangeDisplay section={120} total={props.u120} />
        <CandleRangeDisplay section={130} total={props.u130} />
        <CandleRangeDisplay section={140} total={props.u140} />
        <CandleRangeDisplay section={150} total={props.u150} />
        <CandleRangeDisplay section={160} total={props.u160} />
        <CandleRangeDisplay section={170} total={props.u170} />
        <CandleRangeDisplay section={180} total={props.u180} />
        <CandleRangeDisplay section={190} total={props.u190} />
        <CandleRangeDisplay section={200} total={props.u200} />
        <CandleRangeDisplay section={210} total={props.u210} />
        <CandleRangeDisplay section={220} total={props.u220} />
        <CandleRangeDisplay section={230} total={props.u230} />
        <CandleRangeDisplay section={240} total={props.u240} />
        <CandleRangeDisplay section={250} total={props.u250} />
        <CandleRangeDisplay section={260} total={props.u250plus} />
      </div>
    </div>
  );
});

export default CandleRangeComponent;
