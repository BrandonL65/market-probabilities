import React, { useContext } from "react";
import DataComponent from "../components/DataComponent/DataComponent";
import * as d3 from "d3";
import { Button } from "antd";
import { observer } from "mobx-react";
import { rootStoreContext } from "../contexts";
const data = require("../data/EURUSD.csv");

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
  const loadData = async () => {
    dataStore.reset();
    let csv = await d3.csv(data);
    dataStore.rawData = csv;
    dataStore.parseData();
  };

  return (
    <div>
      <Button onClick={loadData}>Load CSV Data</Button>
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
