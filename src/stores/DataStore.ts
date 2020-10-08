import { observable } from "mobx";
import { DSVRowArray } from "d3";

export interface AllCloseProbabilities {
  upOnePlus: number;
  upSeventyFiveToOne: number;
  upFiftyToSeventyFive: number;
  upTwentyFiveToFifty: number;
  upZeroToTwentyFive: number;
  downZeroToTwentyFive: number;
  downTwentyFiveToFifty: number;
  downFiftyToSeventyFive: number;
  downSeventyFiveToOne: number;
  downOnePlus: number;
}

export interface CandleRangeStatistics {
  u5: number;
  u10: number;
  u15: number;
  u20: number;
  u25: number;
  u30: number;
  u35: number;
  u40: number;
  u45: number;
  u50: number;
  u55: number;
  u60: number;
  u65: number;
  u70: number;
  u80: number;
  u90: number;
  u100: number;
  u110: number;
  u120: number;
  u130: number;
  u140: number;
  u150: number;
  u160: number;
  u170: number;
  u180: number;
  u190: number;
  u200: number;
  u210: number;
  u220: number;
  u230: number;
  u240: number;
  u250: number;
  u250plus: number;
}

//Interface for the candle proportions, like open to low, open to high, open to close ranges
interface CandleProportions {
  OH5: number;
  OH10: number;
  OH15: number;
  OH20: number;
  OH25: number;
  OH30: number;
  OH35: number;
  OH40: number;
  OH45: number;
  OH50: number;
  OH55: number;
  OH60: number;
  OH70: number;
  OH80: number;
  OH90: number;
  OH100: number;
  OH110: number;
  OH120: number;
  OH130: number;
  OH140: number;
  OH150: number;
  OH160: number;
  OH170: number;
  OH180: number;
  OH190: number;
  OH200: number;
  OH210: number;
  OH220: number;
  OH230: number;
  OH240: number;
  OH250: number;
  OH250plus: number;
  OC5: number;
  OC10: number;
  OC15: number;
  OC20: number;
  OC25: number;
  OC30: number;
  OC35: number;
  OC40: number;
  OC45: number;
  OC50: number;
  OC55: number;
  OC60: number;
  OC70: number;
  OC80: number;
  OC90: number;
  OC100: number;
  OC110: number;
  OC120: number;
  OC130: number;
  OC140: number;
  OC150: number;
  OC160: number;
  OC170: number;
  OC180: number;
  OC190: number;
  OC200: number;
  OC210: number;
  OC220: number;
  OC230: number;
  OC240: number;
  OC250: number;
  OC250Plus: number;
  OL5: number;
  OL10: number;
  OL15: number;
  OL20: number;
  OL25: number;
  OL30: number;
  OL35: number;
  OL40: number;
  OL45: number;
  OL50: number;
  OL55: number;
  OL60: number;
  OL70: number;
  OL80: number;
  OL90: number;
  OL100: number;
  OL110: number;
  OL120: number;
  OL130: number;
  OL140: number;
  OL150: number;
  OL160: number;
  OL170: number;
  OL180: number;
  OL190: number;
  OL200: number;
  OL210: number;
  OL220: number;
  OL230: number;
  OL240: number;
  OL250: number;
  OL250Plus: number;
}

export class DataStore {
  @observable name: string = "";

  /*
  Change %
  Date
  High
  Low 
  Open 
  Price
  */
  @observable rawData: DSVRowArray<string> | null[] = [];

  @observable totalUpDays: number = 0;
  @observable totalDownDays: number = 0;
  @observable averageRange: number = 0;

  @observable allCloseProbabilities: AllCloseProbabilities = {
    upOnePlus: 0,
    upSeventyFiveToOne: 0,
    upFiftyToSeventyFive: 0,
    upTwentyFiveToFifty: 0,
    upZeroToTwentyFive: 0,
    downZeroToTwentyFive: 0,
    downTwentyFiveToFifty: 0,
    downFiftyToSeventyFive: 0,
    downSeventyFiveToOne: 0,
    downOnePlus: 0,
  };

  @observable allRanges: CandleRangeStatistics = {
    u5: 0,
    u10: 0,
    u15: 0,
    u20: 0,
    u25: 0,
    u30: 0,
    u35: 0,
    u40: 0,
    u45: 0,
    u50: 0,
    u55: 0,
    u60: 0,
    u65: 0,
    u70: 0,
    u80: 0,
    u90: 0,
    u100: 0,
    u110: 0,
    u120: 0,
    u130: 0,
    u140: 0,
    u150: 0,
    u160: 0,
    u170: 0,
    u180: 0,
    u190: 0,
    u200: 0,
    u210: 0,
    u220: 0,
    u230: 0,
    u240: 0,
    u250: 0,
    u250plus: 0,
  };

  @observable candleProportionsUpCandles: CandleProportions = {
    OH5: 0,
    OH10: 0,
    OH15: 0,
    OH20: 0,
    OH25: 0,
    OH30: 0,
    OH35: 0,
    OH40: 0,
    OH45: 0,
    OH50: 0,
    OH55: 0,
    OH60: 0,
    OH70: 0,
    OH80: 0,
    OH90: 0,
    OH100: 0,
    OH110: 0,
    OH120: 0,
    OH130: 0,
    OH140: 0,
    OH150: 0,
    OH160: 0,
    OH170: 0,
    OH180: 0,
    OH190: 0,
    OH200: 0,
    OH210: 0,
    OH220: 0,
    OH230: 0,
    OH240: 0,
    OH250: 0,
    OH250plus: 0,
    OC5: 0,
    OC10: 0,
    OC15: 0,
    OC20: 0,
    OC25: 0,
    OC30: 0,
    OC35: 0,
    OC40: 0,
    OC45: 0,
    OC50: 0,
    OC55: 0,
    OC60: 0,
    OC70: 0,
    OC80: 0,
    OC90: 0,
    OC100: 0,
    OC110: 0,
    OC120: 0,
    OC130: 0,
    OC140: 0,
    OC150: 0,
    OC160: 0,
    OC170: 0,
    OC180: 0,
    OC190: 0,
    OC200: 0,
    OC210: 0,
    OC220: 0,
    OC230: 0,
    OC240: 0,
    OC250: 0,
    OC250Plus: 0,
    OL5: 0,
    OL10: 0,
    OL15: 0,
    OL20: 0,
    OL25: 0,
    OL30: 0,
    OL35: 0,
    OL40: 0,
    OL45: 0,
    OL50: 0,
    OL55: 0,
    OL60: 0,
    OL70: 0,
    OL80: 0,
    OL90: 0,
    OL100: 0,
    OL110: 0,
    OL120: 0,
    OL130: 0,
    OL140: 0,
    OL150: 0,
    OL160: 0,
    OL170: 0,
    OL180: 0,
    OL190: 0,
    OL200: 0,
    OL210: 0,
    OL220: 0,
    OL230: 0,
    OL240: 0,
    OL250: 0,
    OL250Plus: 0,
  };

  //parses ALL data by looping through the raw data
  parseData = () => {
    console.log("Parsing data from dataStore");
    this.rawData.forEach((data: any) => {
      let open = parseFloat(data["Open"]);
      let close = parseFloat(data["Price"]);
      let high = parseFloat(data["High"]);
      let low = parseFloat(data["Low"]);
      let change = parseFloat(data["Change %"].split("%")[0]);

      //calculates what percentile the bar closed in, like 0.25% up, etc
      this.testClosingZone(open, close, change);
      this.testCandleRange(high, low);
      this.averageRange = this.averageRange + (high - low) * 10000;

      //parsed O-C, O-H, O-L percentages for all green candles
      if (open < close) {
        this.testCandleProportionPercentagesUpCandles(open, high, low, close);
      }
    });

    //calculates average high-low range, assigns it
    this.averageRange = parseFloat(
      (this.averageRange / this.rawData.length).toFixed(2)
    );
    console.log(this.candleProportionsUpCandles);
  };

  //does calculations for OC OH OL of green candles
  testCandleProportionPercentagesUpCandles = (
    open: number,
    high: number,
    low: number,
    close: number
  ) => {
    let highToOpenDifference = Math.floor((high - open) * 10000);
    let closeToOpenDifference = Math.floor((close - open) * 10000);
    let openToLowDifference = Math.floor((open - low) * 10000);
    console.log(
      highToOpenDifference,
      closeToOpenDifference,
      openToLowDifference
    );
    this.upCandlesAssignProportionsForOH(highToOpenDifference);
    this.upCandlesAssignProportionsForOC(closeToOpenDifference);
    this.upCandlesAssignProportionsForOL(openToLowDifference);
  };

  upCandlesAssignProportionsForOH = (highToOpenPips: number) => {
    const { candleProportionsUpCandles } = this;
    if (highToOpenPips < 5) {
      candleProportionsUpCandles.OH5++;
    } else if (highToOpenPips < 10) {
      candleProportionsUpCandles.OH10++;
    } else if (highToOpenPips < 15) {
      candleProportionsUpCandles.OH15++;
    } else if (highToOpenPips < 20) {
      candleProportionsUpCandles.OH20++;
    } else if (highToOpenPips < 25) {
      candleProportionsUpCandles.OH25++;
    } else if (highToOpenPips < 30) {
      candleProportionsUpCandles.OH30++;
    } else if (highToOpenPips < 35) {
      candleProportionsUpCandles.OH35++;
    } else if (highToOpenPips < 40) {
      candleProportionsUpCandles.OH40++;
    } else if (highToOpenPips < 45) {
      candleProportionsUpCandles.OH45++;
    } else if (highToOpenPips < 50) {
      candleProportionsUpCandles.OH50++;
    } else if (highToOpenPips < 55) {
      candleProportionsUpCandles.OH55++;
    } else if (highToOpenPips < 60) {
      candleProportionsUpCandles.OH60++;
    } else if (highToOpenPips < 70) {
      candleProportionsUpCandles.OH70++;
    } else if (highToOpenPips < 80) {
      candleProportionsUpCandles.OH80++;
    } else if (highToOpenPips < 90) {
      candleProportionsUpCandles.OH90++;
    } else if (highToOpenPips < 100) {
      candleProportionsUpCandles.OH100++;
    } else if (highToOpenPips < 110) {
      candleProportionsUpCandles.OH110++;
    } else if (highToOpenPips < 120) {
      candleProportionsUpCandles.OH120++;
    } else if (highToOpenPips < 130) {
      candleProportionsUpCandles.OH130++;
    } else if (highToOpenPips < 140) {
      candleProportionsUpCandles.OH140++;
    } else if (highToOpenPips < 150) {
      candleProportionsUpCandles.OH150++;
    } else if (highToOpenPips < 160) {
      candleProportionsUpCandles.OH160++;
    } else if (highToOpenPips < 170) {
      candleProportionsUpCandles.OH170++;
    } else if (highToOpenPips < 180) {
      candleProportionsUpCandles.OH180++;
    } else if (highToOpenPips < 190) {
      candleProportionsUpCandles.OH190++;
    } else if (highToOpenPips < 200) {
      candleProportionsUpCandles.OH200++;
    } else if (highToOpenPips < 210) {
      candleProportionsUpCandles.OH210++;
    } else if (highToOpenPips < 220) {
      candleProportionsUpCandles.OH220++;
    } else if (highToOpenPips < 230) {
      candleProportionsUpCandles.OH230++;
    } else if (highToOpenPips < 240) {
      candleProportionsUpCandles.OH240++;
    } else if (highToOpenPips < 250) {
      candleProportionsUpCandles.OH250++;
    } else {
      candleProportionsUpCandles.OH250plus++;
    }
  };

  upCandlesAssignProportionsForOC = (closeToOpenPips: number) => {
    const { candleProportionsUpCandles } = this;
    if (closeToOpenPips < 5) {
      candleProportionsUpCandles.OC5++;
    } else if (closeToOpenPips < 10) {
      candleProportionsUpCandles.OC10++;
    } else if (closeToOpenPips < 15) {
      candleProportionsUpCandles.OC15++;
    } else if (closeToOpenPips < 20) {
      candleProportionsUpCandles.OC20++;
    } else if (closeToOpenPips < 25) {
      candleProportionsUpCandles.OC25++;
    } else if (closeToOpenPips < 30) {
      candleProportionsUpCandles.OC30++;
    } else if (closeToOpenPips < 35) {
      candleProportionsUpCandles.OC35++;
    } else if (closeToOpenPips < 40) {
      candleProportionsUpCandles.OC40++;
    } else if (closeToOpenPips < 45) {
      candleProportionsUpCandles.OC45++;
    } else if (closeToOpenPips < 50) {
      candleProportionsUpCandles.OC50++;
    } else if (closeToOpenPips < 55) {
      candleProportionsUpCandles.OC55++;
    } else if (closeToOpenPips < 60) {
      candleProportionsUpCandles.OC60++;
    } else if (closeToOpenPips < 70) {
      candleProportionsUpCandles.OC70++;
    } else if (closeToOpenPips < 80) {
      candleProportionsUpCandles.OC80++;
    } else if (closeToOpenPips < 90) {
      candleProportionsUpCandles.OC90++;
    } else if (closeToOpenPips < 100) {
      candleProportionsUpCandles.OC100++;
    } else if (closeToOpenPips < 110) {
      candleProportionsUpCandles.OC110++;
    } else if (closeToOpenPips < 120) {
      candleProportionsUpCandles.OC120++;
    } else if (closeToOpenPips < 130) {
      candleProportionsUpCandles.OC130++;
    } else if (closeToOpenPips < 140) {
      candleProportionsUpCandles.OC140++;
    } else if (closeToOpenPips < 150) {
      candleProportionsUpCandles.OC150++;
    } else if (closeToOpenPips < 160) {
      candleProportionsUpCandles.OC160++;
    } else if (closeToOpenPips < 170) {
      candleProportionsUpCandles.OC170++;
    } else if (closeToOpenPips < 180) {
      candleProportionsUpCandles.OC180++;
    } else if (closeToOpenPips < 190) {
      candleProportionsUpCandles.OC190++;
    } else if (closeToOpenPips < 200) {
      candleProportionsUpCandles.OC200++;
    } else if (closeToOpenPips < 210) {
      candleProportionsUpCandles.OC210++;
    } else if (closeToOpenPips < 220) {
      candleProportionsUpCandles.OC220++;
    } else if (closeToOpenPips < 230) {
      candleProportionsUpCandles.OC230++;
    } else if (closeToOpenPips < 240) {
      candleProportionsUpCandles.OC240++;
    } else if (closeToOpenPips < 250) {
      candleProportionsUpCandles.OC250++;
    } else {
      candleProportionsUpCandles.OC250Plus++;
    }
  };

  upCandlesAssignProportionsForOL = (openToLowPips: number) => {
    const { candleProportionsUpCandles } = this;
    if (openToLowPips < 5) {
      candleProportionsUpCandles.OL5++;
    } else if (openToLowPips < 10) {
      candleProportionsUpCandles.OL10++;
    } else if (openToLowPips < 15) {
      candleProportionsUpCandles.OL15++;
    } else if (openToLowPips < 20) {
      candleProportionsUpCandles.OL20++;
    } else if (openToLowPips < 25) {
      candleProportionsUpCandles.OL25++;
    } else if (openToLowPips < 30) {
      candleProportionsUpCandles.OL30++;
    } else if (openToLowPips < 35) {
      candleProportionsUpCandles.OL35++;
    } else if (openToLowPips < 40) {
      candleProportionsUpCandles.OL40++;
    } else if (openToLowPips < 45) {
      candleProportionsUpCandles.OL45++;
    } else if (openToLowPips < 50) {
      candleProportionsUpCandles.OL50++;
    } else if (openToLowPips < 55) {
      candleProportionsUpCandles.OL55++;
    } else if (openToLowPips < 60) {
      candleProportionsUpCandles.OL60++;
    } else if (openToLowPips < 70) {
      candleProportionsUpCandles.OL70++;
    } else if (openToLowPips < 80) {
      candleProportionsUpCandles.OL80++;
    } else if (openToLowPips < 90) {
      candleProportionsUpCandles.OL90++;
    } else if (openToLowPips < 100) {
      candleProportionsUpCandles.OL100++;
    } else if (openToLowPips < 110) {
      candleProportionsUpCandles.OL110++;
    } else if (openToLowPips < 120) {
      candleProportionsUpCandles.OL120++;
    } else if (openToLowPips < 130) {
      candleProportionsUpCandles.OL130++;
    } else if (openToLowPips < 140) {
      candleProportionsUpCandles.OL140++;
    } else if (openToLowPips < 150) {
      candleProportionsUpCandles.OL150++;
    } else if (openToLowPips < 160) {
      candleProportionsUpCandles.OL160++;
    } else if (openToLowPips < 170) {
      candleProportionsUpCandles.OL170++;
    } else if (openToLowPips < 180) {
      candleProportionsUpCandles.OL180++;
    } else if (openToLowPips < 190) {
      candleProportionsUpCandles.OL190++;
    } else if (openToLowPips < 200) {
      candleProportionsUpCandles.OL200++;
    } else if (openToLowPips < 210) {
      candleProportionsUpCandles.OL210++;
    } else if (openToLowPips < 220) {
      candleProportionsUpCandles.OL220++;
    } else if (openToLowPips < 230) {
      candleProportionsUpCandles.OL230++;
    } else if (openToLowPips < 240) {
      candleProportionsUpCandles.OL240++;
    } else if (openToLowPips < 250) {
      candleProportionsUpCandles.OL250++;
    } else {
      candleProportionsUpCandles.OL250Plus++;
    }
  };

  //test probabilities to close within 0.25% "zones" using close price relative to open
  testClosingZone = (open: number, close: number, change: number) => {
    if (close > open) {
      this.totalUpDays++;
      if (change <= 0.25) {
        this.allCloseProbabilities.upZeroToTwentyFive++;
      } else if (change > 0.25 && change <= 0.5) {
        this.allCloseProbabilities.upTwentyFiveToFifty++;
      } else if (change > 0.5 && change <= 0.75) {
        this.allCloseProbabilities.upFiftyToSeventyFive++;
      } else if (change > 0.75 && change <= 1) {
        this.allCloseProbabilities.upSeventyFiveToOne++;
      } else if (change > 1) {
        this.allCloseProbabilities.upOnePlus++;
      }
    } else {
      this.totalDownDays++;
      if (change >= -0.25) {
        this.allCloseProbabilities.downZeroToTwentyFive++;
      } else if (change < -0.25 && change >= -0.5) {
        this.allCloseProbabilities.downTwentyFiveToFifty++;
      } else if (change < -0.5 && change >= -0.75) {
        this.allCloseProbabilities.downFiftyToSeventyFive++;
      } else if (change < -0.75 && change >= -1) {
        this.allCloseProbabilities.downSeventyFiveToOne++;
      } else if (change < -1) {
        this.allCloseProbabilities.downOnePlus++;
      }
    }
  };

  //test total candle range
  testCandleRange = (high: number, low: number) => {
    let total: number = Math.floor((high - low) * 10000);

    if (total <= 5) {
      this.allRanges.u5++;
    } else if (total <= 10) {
      this.allRanges.u10++;
    } else if (total <= 15) {
      this.allRanges.u15++;
    } else if (total <= 20) {
      this.allRanges.u20++;
    } else if (total <= 25) {
      this.allRanges.u25++;
    } else if (total <= 30) {
      this.allRanges.u30++;
    } else if (total <= 35) {
      this.allRanges.u35++;
    } else if (total <= 40) {
      this.allRanges.u40++;
    } else if (total <= 45) {
      this.allRanges.u45++;
    } else if (total <= 50) {
      this.allRanges.u50++;
    } else if (total <= 55) {
      this.allRanges.u55++;
    } else if (total <= 60) {
      this.allRanges.u60++;
    } else if (total <= 65) {
      this.allRanges.u65++;
    } else if (total <= 70) {
      this.allRanges.u70++;
    } else if (total <= 80) {
      this.allRanges.u80++;
    } else if (total <= 90) {
      this.allRanges.u90++;
    } else if (total <= 100) {
      this.allRanges.u100++;
    } else if (total <= 110) {
      this.allRanges.u110++;
    } else if (total <= 120) {
      this.allRanges.u120++;
    } else if (total <= 130) {
      this.allRanges.u130++;
    } else if (total <= 140) {
      this.allRanges.u140++;
    } else if (total <= 150) {
      this.allRanges.u150++;
    } else if (total <= 160) {
      this.allRanges.u160++;
    } else if (total <= 170) {
      this.allRanges.u170++;
    } else if (total <= 180) {
      this.allRanges.u180++;
    } else if (total <= 190) {
      this.allRanges.u190++;
    } else if (total <= 200) {
      this.allRanges.u200++;
    } else if (total <= 210) {
      this.allRanges.u210++;
    } else if (total <= 220) {
      this.allRanges.u220++;
    } else if (total <= 230) {
      this.allRanges.u230++;
    } else if (total <= 240) {
      this.allRanges.u240++;
    } else if (total <= 250) {
      this.allRanges.u250++;
    } else {
      this.allRanges.u250plus++;
    }
  };

  reset = () => {
    this.name = "";
    this.rawData = [];
    this.totalUpDays = 0;
    this.totalDownDays = 0;
    this.averageRange = 0;
    this.allCloseProbabilities = {
      upOnePlus: 0,
      upSeventyFiveToOne: 0,
      upFiftyToSeventyFive: 0,
      upTwentyFiveToFifty: 0,
      upZeroToTwentyFive: 0,
      downZeroToTwentyFive: 0,
      downTwentyFiveToFifty: 0,
      downFiftyToSeventyFive: 0,
      downSeventyFiveToOne: 0,
      downOnePlus: 0,
    };

    this.allRanges = {
      u5: 0,
      u10: 0,
      u15: 0,
      u20: 0,
      u25: 0,
      u30: 0,
      u35: 0,
      u40: 0,
      u45: 0,
      u50: 0,
      u55: 0,
      u60: 0,
      u65: 0,
      u70: 0,
      u80: 0,
      u90: 0,
      u100: 0,
      u110: 0,
      u120: 0,
      u130: 0,
      u140: 0,
      u150: 0,
      u160: 0,
      u170: 0,
      u180: 0,
      u190: 0,
      u200: 0,
      u210: 0,
      u220: 0,
      u230: 0,
      u240: 0,
      u250: 0,
      u250plus: 0,
    };
  };
}
