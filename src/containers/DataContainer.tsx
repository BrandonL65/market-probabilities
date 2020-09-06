import React, { useContext } from "react";
import DataComponent from "../components/DataComponent/DataComponent";
import * as d3 from "d3";
import { Button } from "antd";
import { observer } from "mobx-react";
import { rootStoreContext } from "../contexts";
const data = require("../data/EURUSD.csv");

const DataContainer = observer(() => {
  const { dataStore } = useContext(rootStoreContext);
  const { totalUpDays, totalDownDays } = dataStore;

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
      />
    </div>
  );
});

export default DataContainer;
