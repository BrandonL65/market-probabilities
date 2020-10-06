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
    });

    //calculates average high-low range, assigns it
    this.averageRange = parseFloat(
      (this.averageRange / this.rawData.length).toFixed(2)
    );
    console.log(this.allRanges);
  };

  //test the % of time price retraces X%, then closes opposite direction

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
