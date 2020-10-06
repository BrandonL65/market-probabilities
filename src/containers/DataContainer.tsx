import React, { useContext } from "react";
import DataComponentForOpenClosePercentages from "../components/DataComponentForOpenClosePercentages/DataComponentForOpenClosePercentages";
import CandleRangeComponent from "../components/CandleRangeComponent/CandleRangeComponent";
import * as d3 from "d3";
import { Button } from "antd";
import { observer } from "mobx-react";
import { rootStoreContext } from "../contexts";
const EURUSD_DATA = require("../data/EURUSD.csv");
//GBPUSD Data from 03/29/2011 - 05/29/2020
const GBPUSD_DATA = require("../data/GBPUSD.csv");

const DataContainer = observer(() => {
  const { dataStore } = useContext(rootStoreContext);
  const {
    totalUpDays,
    totalDownDays,
    allCloseProbabilities,
    averageRange,
    allRanges,
  } = dataStore;
  const {
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
  } = allCloseProbabilities;

  const {
    u5,
    u10,
    u15,
    u20,
    u25,
    u30,
    u35,
    u40,
    u45,
    u50,
    u55,
    u60,
    u65,
    u70,
    u80,
    u90,
    u100,
    u110,
    u120,
    u130,
    u140,
    u150,
    u160,
    u170,
    u180,
    u190,
    u200,
    u210,
    u220,
    u230,
    u240,
    u250,
    u250plus,
  } = allRanges;

  //parses csv and loads the data into our MobX store
  const loadData = async (currency: string) => {
    console.log("Loading data...");
    dataStore.reset();
    let csv: d3.DSVRowArray<string>;
    if (currency === "EURUSD") {
      csv = await d3.csv(EURUSD_DATA);
    } else {
      csv = await d3.csv(GBPUSD_DATA);
    }
    dataStore.rawData = csv;
    dataStore.parseData();
  };

  return (
    <div>
      <Button onClick={() => loadData("EURUSD")}>Load EURUSD Data</Button>
      <Button onClick={() => loadData("GBPUSD")}>Load GBPUSD Data</Button>
      <DataComponentForOpenClosePercentages
        totalBars={dataStore.rawData.length}
        totalUpDays={totalUpDays}
        totalDownDays={totalDownDays}
        averageRange={averageRange}
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
      <CandleRangeComponent
        u5={u5}
        u10={u10}
        u15={u15}
        u20={u20}
        u25={u25}
        u30={u30}
        u35={u35}
        u40={u40}
        u45={u45}
        u50={u50}
        u55={u55}
        u60={u60}
        u65={u65}
        u70={u70}
        u80={u80}
        u90={u90}
        u100={u100}
        u110={u110}
        u120={u120}
        u130={u130}
        u140={u140}
        u150={u150}
        u160={u160}
        u170={u170}
        u180={u180}
        u190={u190}
        u200={u200}
        u210={u210}
        u220={u220}
        u230={u230}
        u240={u240}
        u250={u250}
        u250plus={u250plus}
      />
    </div>
  );
});

export default DataContainer;
