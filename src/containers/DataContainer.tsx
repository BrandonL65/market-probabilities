import React, { useContext } from "react";
import DataComponentForOpenClosePercentages from "../components/DataComponentForOpenClosePercentages/DataComponentForOpenClosePercentages";
import CandleRangeComponent from "../components/CandleRangeComponent/CandleRangeComponent";
import UpDaysCandleProportions from "../components/UpDaysCandleProportions/UpDaysCandleProportions";
import UpDaysLWtoOH from "../components/UpDaysLWtoOH/UpDaysLWtoOH";
import * as d3 from "d3";
import { Button } from "antd";
import { observer } from "mobx-react";
import { rootStoreContext } from "../contexts";
const EURUSD_DATA = require("../data/EURUSD.csv");
//GBPUSD Data from 03/29/2011 - 05/29/2020
const GBPUSD_DATA = require("../data/GBPUSD.csv");
const GBPUSD_DATA_TWOYEARS = require("../data/GBPUSD_NEW.csv");
const GBPUSD_DATA_WEEKLY_10YRS = require("../data/GBPUSD_WEEKLY_10YRS.csv");
const GBPUSD_2020 = require("../data/GBPUSD_2020.csv");

const DataContainer = observer(() => {
  const { dataStore } = useContext(rootStoreContext);
  const {
    totalUpDays,
    totalDownDays,
    allCloseProbabilities,
    averageRange,
    allRanges,
    candleProportionsUpCandles,
    upCandleAvgHighToOpen,
    upCandleAvgCloseToOpen,
    upCandleAvgOpenToLow,
    upCandleOHFromCorrespondingLW,
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
  } = upCandleOHFromCorrespondingLW;

  //parses csv and loads the data into our MobX store
  const loadData = async (currency: string) => {
    console.log("Loading data...");
    dataStore.reset();
    let csv: d3.DSVRowArray<string>;
    switch (currency) {
      case "EURUSD":
        csv = await d3.csv(EURUSD_DATA);
        break;
      case "GBPUSD":
        csv = await d3.csv(GBPUSD_DATA);
        break;
      case "GBPUSD_DATA_TWO_YEARS":
        csv = await d3.csv(GBPUSD_DATA_TWOYEARS);
        break;
      case "GBPUSD_W_10":
        csv = await d3.csv(GBPUSD_DATA_WEEKLY_10YRS);
        break;
      default:
        csv = await d3.csv(GBPUSD_2020);
    }
    dataStore.rawData = csv;
    dataStore.parseData();
  };

  return (
    <div>
      <Button ghost onClick={() => loadData("EURUSD")}>
        Load EURUSD Data
      </Button>
      <Button ghost onClick={() => loadData("GBPUSD")}>
        Load GBPUSD Data
      </Button>
      <Button ghost onClick={() => loadData("GBPUSD_DATA_TWO_YEARS")}>
        Load new GBPUSD Data
      </Button>
      <Button ghost onClick={() => loadData("GBPUSD_W_10")}>
        Load GBPUSD Weekly 10Years Data
      </Button>
      <Button ghost onClick={() => loadData("GBPUSD_2020")}>
        Load GBPUSD 2020 Data
      </Button>
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
        totalBars={dataStore.rawData.length}
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
      <UpDaysCandleProportions
        totalUpBars={totalUpDays}
        avgOH={upCandleAvgHighToOpen}
        avgOC={upCandleAvgCloseToOpen}
        avgOL={upCandleAvgOpenToLow}
        OH5={candleProportionsUpCandles.OH5}
        OH10={candleProportionsUpCandles.OH10}
        OH15={candleProportionsUpCandles.OH15}
        OH20={candleProportionsUpCandles.OH20}
        OH25={candleProportionsUpCandles.OH25}
        OH30={candleProportionsUpCandles.OH30}
        OH35={candleProportionsUpCandles.OH35}
        OH40={candleProportionsUpCandles.OH40}
        OH45={candleProportionsUpCandles.OH45}
        OH50={candleProportionsUpCandles.OH50}
        OH55={candleProportionsUpCandles.OH55}
        OH60={candleProportionsUpCandles.OH60}
        OH70={candleProportionsUpCandles.OH70}
        OH80={candleProportionsUpCandles.OH80}
        OH90={candleProportionsUpCandles.OH90}
        OH100={candleProportionsUpCandles.OH100}
        OH110={candleProportionsUpCandles.OH110}
        OH120={candleProportionsUpCandles.OH120}
        OH130={candleProportionsUpCandles.OH130}
        OH140={candleProportionsUpCandles.OH140}
        OH150={candleProportionsUpCandles.OH150}
        OH160={candleProportionsUpCandles.OH160}
        OH170={candleProportionsUpCandles.OH170}
        OH180={candleProportionsUpCandles.OH180}
        OH190={candleProportionsUpCandles.OH190}
        OH200={candleProportionsUpCandles.OH200}
        OH210={candleProportionsUpCandles.OH210}
        OH220={candleProportionsUpCandles.OH220}
        OH230={candleProportionsUpCandles.OH230}
        OH240={candleProportionsUpCandles.OH240}
        OH250={candleProportionsUpCandles.OH250}
        OH250plus={candleProportionsUpCandles.OH250plus}
        OC5={candleProportionsUpCandles.OC5}
        OC10={candleProportionsUpCandles.OC10}
        OC15={candleProportionsUpCandles.OC15}
        OC20={candleProportionsUpCandles.OC20}
        OC25={candleProportionsUpCandles.OC25}
        OC30={candleProportionsUpCandles.OC30}
        OC35={candleProportionsUpCandles.OC35}
        OC40={candleProportionsUpCandles.OC40}
        OC45={candleProportionsUpCandles.OC45}
        OC50={candleProportionsUpCandles.OC50}
        OC55={candleProportionsUpCandles.OC55}
        OC60={candleProportionsUpCandles.OC60}
        OC70={candleProportionsUpCandles.OC70}
        OC80={candleProportionsUpCandles.OC80}
        OC90={candleProportionsUpCandles.OC90}
        OC100={candleProportionsUpCandles.OC100}
        OC110={candleProportionsUpCandles.OC110}
        OC120={candleProportionsUpCandles.OC120}
        OC130={candleProportionsUpCandles.OC130}
        OC140={candleProportionsUpCandles.OC140}
        OC150={candleProportionsUpCandles.OC150}
        OC160={candleProportionsUpCandles.OC160}
        OC170={candleProportionsUpCandles.OC170}
        OC180={candleProportionsUpCandles.OC180}
        OC190={candleProportionsUpCandles.OC190}
        OC200={candleProportionsUpCandles.OC200}
        OC210={candleProportionsUpCandles.OC210}
        OC220={candleProportionsUpCandles.OC220}
        OC230={candleProportionsUpCandles.OC230}
        OC240={candleProportionsUpCandles.OC240}
        OC250={candleProportionsUpCandles.OC250}
        OC250plus={candleProportionsUpCandles.OC250plus}
        OL5={candleProportionsUpCandles.OL5}
        OL10={candleProportionsUpCandles.OL10}
        OL15={candleProportionsUpCandles.OL15}
        OL20={candleProportionsUpCandles.OL20}
        OL25={candleProportionsUpCandles.OL25}
        OL30={candleProportionsUpCandles.OL30}
        OL35={candleProportionsUpCandles.OL35}
        OL40={candleProportionsUpCandles.OL40}
        OL45={candleProportionsUpCandles.OL45}
        OL50={candleProportionsUpCandles.OL50}
        OL55={candleProportionsUpCandles.OL55}
        OL60={candleProportionsUpCandles.OL60}
        OL70={candleProportionsUpCandles.OL70}
        OL80={candleProportionsUpCandles.OL80}
        OL90={candleProportionsUpCandles.OL90}
        OL100={candleProportionsUpCandles.OL100}
        OL110={candleProportionsUpCandles.OL110}
        OL120={candleProportionsUpCandles.OL120}
        OL130={candleProportionsUpCandles.OL130}
        OL140={candleProportionsUpCandles.OL140}
        OL150={candleProportionsUpCandles.OL150}
        OL160={candleProportionsUpCandles.OL160}
        OL170={candleProportionsUpCandles.OL170}
        OL180={candleProportionsUpCandles.OL180}
        OL190={candleProportionsUpCandles.OL190}
        OL200={candleProportionsUpCandles.OL200}
        OL210={candleProportionsUpCandles.OL210}
        OL220={candleProportionsUpCandles.OL220}
        OL230={candleProportionsUpCandles.OL230}
        OL240={candleProportionsUpCandles.OL240}
        OL250={candleProportionsUpCandles.OL250}
        OL250plus={candleProportionsUpCandles.OL250plus}
      />
      <UpDaysLWtoOH
        totalUpBars={totalUpDays}
        LW10={LW10}
        LW20={LW20}
        LW30={LW30}
        LW40={LW40}
        LW50={LW50}
        LW60={LW60}
        LW70={LW70}
        LW80={LW80}
        LW90={LW90}
        LW100={LW100}
        LW110={LW110}
        LW120={LW120}
        LW120plus={LW120plus}
      />
    </div>
  );
});

export default DataContainer;
