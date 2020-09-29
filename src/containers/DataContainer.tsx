import React, { useContext } from "react";
import DataComponent from "../components/DataComponent/DataComponent";
import * as d3 from "d3";
import { Button } from "antd";
import { observer } from "mobx-react";
import { rootStoreContext } from "../contexts";
const EURUSD_DATA = require("../data/EURUSD.csv");
//GBPUSD Data from 03/29/2011 - 05/29/2020
const GBPUSD_DATA = require("../data/GBPUSD.csv");

const DataContainer = observer(() => {
  const { dataStore } = useContext(rootStoreContext);
  const { totalUpDays, totalDownDays, allCloseProbabilities } = dataStore;
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
      <DataComponent
        totalBars={dataStore.rawData.length}
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
  );
});

export default DataContainer;
