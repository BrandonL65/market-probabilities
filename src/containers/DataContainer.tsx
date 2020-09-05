import React from "react";
import * as d3 from "d3";
import { Button } from "antd";
const data = require("../data/EURUSD.csv");

const DataContainer = () => {
  const loadData = async () => {
    console.log("Hi");
    let csv = await d3.csv(data);
    console.log(csv);
  };

  return (
    <div>
      <Button onClick={loadData}>Load CSV Data</Button>
    </div>
  );
};

export default DataContainer;
