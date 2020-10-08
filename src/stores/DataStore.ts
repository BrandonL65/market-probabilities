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
  OC25OPlus: number;
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
  OL25OPlus: number;
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

  @observable CandleProportionsUpCandles: CandleProportions = {
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
    OC25OPlus: 0,
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
    OL25OPlus: 0,
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
