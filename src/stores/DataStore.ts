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

//key is the lower wick value of Up Candle, value is average corresponding OH
export interface UpCandleOHFromLowerWick {
  LW10: {
    averageOH: number;
    totalUpCandlesWithThisLW: number;
  };
  LW20: {
    averageOH: number;
    totalUpCandlesWithThisLW: number;
  };
  LW30: {
    averageOH: number;
    totalUpCandlesWithThisLW: number;
  };
  LW40: {
    averageOH: number;
    totalUpCandlesWithThisLW: number;
  };
  LW50: {
    averageOH: number;
    totalUpCandlesWithThisLW: number;
  };
  LW60: {
    averageOH: number;
    totalUpCandlesWithThisLW: number;
  };
  LW70: {
    averageOH: number;
    totalUpCandlesWithThisLW: number;
  };
  LW80: {
    averageOH: number;
    totalUpCandlesWithThisLW: number;
  };
  LW80plus: {
    averageOH: number;
    totalUpCandlesWithThisLW: number;
  };
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
export interface CandleProportions {
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
  @observable upCandleAvgHighToOpen: number = 0;
  @observable upCandleAvgCloseToOpen: number = 0;
  @observable upCandleAvgOpenToLow: number = 0;

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

  @observable upCandleOHFromCorrespondingLW: UpCandleOHFromLowerWick = {
    LW10: {
      averageOH: 0,
      totalUpCandlesWithThisLW: 0,
    },
    LW20: {
      averageOH: 0,
      totalUpCandlesWithThisLW: 0,
    },
    LW30: {
      averageOH: 0,
      totalUpCandlesWithThisLW: 0,
    },
    LW40: {
      averageOH: 0,
      totalUpCandlesWithThisLW: 0,
    },
    LW50: {
      averageOH: 0,
      totalUpCandlesWithThisLW: 0,
    },
    LW60: {
      averageOH: 0,
      totalUpCandlesWithThisLW: 0,
    },
    LW70: {
      averageOH: 0,
      totalUpCandlesWithThisLW: 0,
    },
    LW80: {
      averageOH: 0,
      totalUpCandlesWithThisLW: 0,
    },
    LW80plus: {
      averageOH: 0,
      totalUpCandlesWithThisLW: 0,
    },
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
      //calculates the total candle range from High to Low
      this.testCandleRange(high, low);
      //used later to calculate an average range at the end
      this.averageRange = this.averageRange + (high - low) * 10000;

      //parsed O-C, O-H, O-L percentages for all green candles
      if (close > open) {
        this.testCandleProportionPercentagesUpCandles(open, high, low, close);
        this.testAverageOHFromDiffOL(open, high, low);
      }
    });

    //calculates average high-low range, assigns it from line 415
    this.averageRange = parseFloat(
      (this.averageRange / this.rawData.length).toFixed(2)
    );
    //calculates average OH, OC, OL for up candle parsed data, line 419
    this.upCandleAverageRangeAssignment();
    this.logIt();
  };

  logIt = () => {
    for (let k in this.upCandleOHFromCorrespondingLW) {
      let value = this.upCandleOHFromCorrespondingLW[
        k as keyof UpCandleOHFromLowerWick
      ];
      console.log(k, value.averageOH / value.totalUpCandlesWithThisLW);
    }
  };

  //divides the average OH OC OL ranges of up candles by total # of up candles
  upCandleAverageRangeAssignment = () => {
    this.upCandleAvgHighToOpen = parseFloat(
      (this.upCandleAvgHighToOpen / this.totalUpDays).toFixed(2)
    );
    this.upCandleAvgCloseToOpen = parseFloat(
      (this.upCandleAvgCloseToOpen / this.totalUpDays).toFixed(2)
    );
    this.upCandleAvgOpenToLow = parseFloat(
      (this.upCandleAvgOpenToLow / this.totalUpDays).toFixed(2)
    );
  };

  //assigns upCandleOHFromCorrespondingLW observable with corresponding average OH values W.R.T diff lower wick values
  //For example, total average OH from candles w/ lower wick <= 10, 20, etc
  testAverageOHFromDiffOL = (open: number, high: number, low: number) => {
    let OH = parseFloat(((high - open) * 10000).toFixed(2));
    let OL = parseFloat(((open - low) * 10000).toFixed(2));
    if (OL <= 10) {
      const { LW10 } = this.upCandleOHFromCorrespondingLW;
      LW10.averageOH += OH;
      LW10.totalUpCandlesWithThisLW++;
    } else if (OL <= 20) {
      const { LW20 } = this.upCandleOHFromCorrespondingLW;
      LW20.averageOH += OH;
      LW20.totalUpCandlesWithThisLW++;
    } else if (OL <= 30) {
      const { LW30 } = this.upCandleOHFromCorrespondingLW;
      LW30.averageOH += OH;
      LW30.totalUpCandlesWithThisLW++;
    } else if (OL <= 40) {
      const { LW40 } = this.upCandleOHFromCorrespondingLW;
      LW40.averageOH += OH;
      LW40.totalUpCandlesWithThisLW++;
    } else if (OL <= 50) {
      const { LW50 } = this.upCandleOHFromCorrespondingLW;
      LW50.averageOH += OH;
      LW50.totalUpCandlesWithThisLW++;
    } else if (OL <= 60) {
      const { LW60 } = this.upCandleOHFromCorrespondingLW;
      LW60.averageOH += OH;
      LW60.totalUpCandlesWithThisLW++;
    } else if (OL <= 70) {
      const { LW70 } = this.upCandleOHFromCorrespondingLW;
      LW70.averageOH += OH;
      LW70.totalUpCandlesWithThisLW++;
    } else if (OL <= 80) {
      const { LW80 } = this.upCandleOHFromCorrespondingLW;
      LW80.averageOH += OH;
      LW80.totalUpCandlesWithThisLW++;
      console.log(OL, OH);
    } else if (OL > 80) {
      const { LW80plus } = this.upCandleOHFromCorrespondingLW;
      LW80plus.averageOH += OH;
      LW80plus.totalUpCandlesWithThisLW++;
    }
  };

  //does calculations for OC OH OL of green candles
  testCandleProportionPercentagesUpCandles = (
    open: number,
    high: number,
    low: number,
    close: number
  ) => {
    let highToOpenDifference = parseFloat(((high - open) * 10000).toFixed(2));
    let closeToOpenDifference = parseFloat(((close - open) * 10000).toFixed(2));
    let openToLowDifference = parseFloat(((open - low) * 10000).toFixed(2));

    this.upCandlesAssignProportionsForOH(highToOpenDifference);
    this.upCandlesAssignProportionsForOC(closeToOpenDifference);
    this.upCandlesAssignProportionsForOL(openToLowDifference);
    this.upCandleAvgHighToOpen += highToOpenDifference;
    this.upCandleAvgCloseToOpen += closeToOpenDifference;
    this.upCandleAvgOpenToLow += openToLowDifference;
  };

  upCandlesAssignProportionsForOH = (highToOpenPips: number) => {
    this.assignProportions(highToOpenPips, "OH");
  };

  upCandlesAssignProportionsForOC = (closeToOpenPips: number) => {
    this.assignProportions(closeToOpenPips, "OC");
  };

  upCandlesAssignProportionsForOL = (openToLowPips: number) => {
    this.assignProportions(openToLowPips, "OL");
  };

  assignProportions = (range: number, whichProportion: string) => {
    const { candleProportionsUpCandles } = this;
    if (range <= 5) {
      switch (whichProportion) {
        case "OH":
          candleProportionsUpCandles.OH5++;
          break;
        case "OC":
          candleProportionsUpCandles.OC5++;
          break;
        case "OL":
          candleProportionsUpCandles.OL5++;
          break;
      }
    } else if (range <= 10) {
      switch (whichProportion) {
        case "OH":
          candleProportionsUpCandles.OH10++;
          break;
        case "OC":
          candleProportionsUpCandles.OC10++;
          break;
        case "OL":
          candleProportionsUpCandles.OL10++;
          break;
      }
    } else if (range <= 15) {
      switch (whichProportion) {
        case "OH":
          candleProportionsUpCandles.OH15++;
          break;
        case "OC":
          candleProportionsUpCandles.OC15++;
          break;
        case "OL":
          candleProportionsUpCandles.OL15++;
          break;
      }
    } else if (range <= 20) {
      switch (whichProportion) {
        case "OH":
          candleProportionsUpCandles.OH20++;
          break;
        case "OC":
          candleProportionsUpCandles.OC20++;
          break;
        case "OL":
          candleProportionsUpCandles.OL20++;
          break;
      }
    } else if (range <= 25) {
      switch (whichProportion) {
        case "OH":
          candleProportionsUpCandles.OH25++;
          break;
        case "OC":
          candleProportionsUpCandles.OC25++;
          break;
        case "OL":
          candleProportionsUpCandles.OL25++;
          break;
      }
    } else if (range <= 30) {
      switch (whichProportion) {
        case "OH":
          candleProportionsUpCandles.OH30++;
          break;
        case "OC":
          candleProportionsUpCandles.OC30++;
          break;
        case "OL":
          candleProportionsUpCandles.OL30++;
          break;
      }
    } else if (range <= 35) {
      switch (whichProportion) {
        case "OH":
          candleProportionsUpCandles.OH35++;
          break;
        case "OC":
          candleProportionsUpCandles.OC35++;
          break;
        case "OL":
          candleProportionsUpCandles.OL35++;
          break;
      }
    } else if (range <= 40) {
      switch (whichProportion) {
        case "OH":
          candleProportionsUpCandles.OH40++;
          break;
        case "OC":
          candleProportionsUpCandles.OC40++;
          break;
        case "OL":
          candleProportionsUpCandles.OL40++;
          break;
      }
    } else if (range <= 45) {
      switch (whichProportion) {
        case "OH":
          candleProportionsUpCandles.OH45++;
          break;
        case "OC":
          candleProportionsUpCandles.OC45++;
          break;
        case "OL":
          candleProportionsUpCandles.OL45++;
          break;
      }
    } else if (range <= 50) {
      switch (whichProportion) {
        case "OH":
          candleProportionsUpCandles.OH50++;
          break;
        case "OC":
          candleProportionsUpCandles.OC50++;
          break;
        case "OL":
          candleProportionsUpCandles.OL50++;
          break;
      }
    } else if (range <= 55) {
      switch (whichProportion) {
        case "OH":
          candleProportionsUpCandles.OH55++;
          break;
        case "OC":
          candleProportionsUpCandles.OC55++;
          break;
        case "OL":
          candleProportionsUpCandles.OL55++;
          break;
      }
    } else if (range <= 60) {
      switch (whichProportion) {
        case "OH":
          candleProportionsUpCandles.OH60++;
          break;
        case "OC":
          candleProportionsUpCandles.OC60++;
          break;
        case "OL":
          candleProportionsUpCandles.OL60++;
          break;
      }
    } else if (range <= 70) {
      switch (whichProportion) {
        case "OH":
          candleProportionsUpCandles.OH70++;
          break;
        case "OC":
          candleProportionsUpCandles.OC70++;
          break;
        case "OL":
          candleProportionsUpCandles.OL70++;
          break;
      }
    } else if (range <= 80) {
      switch (whichProportion) {
        case "OH":
          candleProportionsUpCandles.OH80++;
          break;
        case "OC":
          candleProportionsUpCandles.OC80++;
          break;
        case "OL":
          candleProportionsUpCandles.OL80++;
          break;
      }
    } else if (range <= 90) {
      switch (whichProportion) {
        case "OH":
          candleProportionsUpCandles.OH90++;
          break;
        case "OC":
          candleProportionsUpCandles.OC90++;
          break;
        case "OL":
          candleProportionsUpCandles.OL90++;
          break;
      }
    } else if (range <= 100) {
      switch (whichProportion) {
        case "OH":
          candleProportionsUpCandles.OH100++;
          break;
        case "OC":
          candleProportionsUpCandles.OC100++;
          break;
        case "OL":
          candleProportionsUpCandles.OL100++;
          break;
      }
    } else if (range <= 110) {
      switch (whichProportion) {
        case "OH":
          candleProportionsUpCandles.OH110++;
          break;
        case "OC":
          candleProportionsUpCandles.OC110++;
          break;
        case "OL":
          candleProportionsUpCandles.OL110++;
          break;
      }
    } else if (range <= 120) {
      switch (whichProportion) {
        case "OH":
          candleProportionsUpCandles.OH120++;
          break;
        case "OC":
          candleProportionsUpCandles.OC120++;
          break;
        case "OL":
          candleProportionsUpCandles.OL120++;
          break;
      }
    } else if (range <= 130) {
      switch (whichProportion) {
        case "OH":
          candleProportionsUpCandles.OH130++;
          break;
        case "OC":
          candleProportionsUpCandles.OC130++;
          break;
        case "OL":
          candleProportionsUpCandles.OL130++;
          break;
      }
    } else if (range <= 140) {
      switch (whichProportion) {
        case "OH":
          candleProportionsUpCandles.OH140++;
          break;
        case "OC":
          candleProportionsUpCandles.OC140++;
          break;
        case "OL":
          candleProportionsUpCandles.OL140++;
          break;
      }
    } else if (range <= 150) {
      switch (whichProportion) {
        case "OH":
          candleProportionsUpCandles.OH150++;
          break;
        case "OC":
          candleProportionsUpCandles.OC150++;
          break;
        case "OL":
          candleProportionsUpCandles.OL150++;
          break;
      }
    } else if (range <= 160) {
      switch (whichProportion) {
        case "OH":
          candleProportionsUpCandles.OH160++;
          break;
        case "OC":
          candleProportionsUpCandles.OC160++;
          break;
        case "OL":
          candleProportionsUpCandles.OL160++;
          break;
      }
    } else if (range <= 170) {
      switch (whichProportion) {
        case "OH":
          candleProportionsUpCandles.OH170++;
          break;
        case "OC":
          candleProportionsUpCandles.OC170++;
          break;
        case "OL":
          candleProportionsUpCandles.OL170++;
          break;
      }
    } else if (range <= 180) {
      switch (whichProportion) {
        case "OH":
          candleProportionsUpCandles.OH180++;
          break;
        case "OC":
          candleProportionsUpCandles.OC180++;
          break;
        case "OL":
          candleProportionsUpCandles.OL180++;
          break;
      }
    } else if (range <= 190) {
      switch (whichProportion) {
        case "OH":
          candleProportionsUpCandles.OH190++;
          break;
        case "OC":
          candleProportionsUpCandles.OC190++;
          break;
        case "OL":
          candleProportionsUpCandles.OL190++;
          break;
      }
    } else if (range <= 200) {
      switch (whichProportion) {
        case "OH":
          candleProportionsUpCandles.OH200++;
          break;
        case "OC":
          candleProportionsUpCandles.OC200++;
          break;
        case "OL":
          candleProportionsUpCandles.OL200++;
          break;
      }
    } else if (range <= 210) {
      switch (whichProportion) {
        case "OH":
          candleProportionsUpCandles.OH210++;
          break;
        case "OC":
          candleProportionsUpCandles.OC210++;
          break;
        case "OL":
          candleProportionsUpCandles.OL210++;
          break;
      }
    } else if (range <= 220) {
      switch (whichProportion) {
        case "OH":
          candleProportionsUpCandles.OH220++;
          break;
        case "OC":
          candleProportionsUpCandles.OC220++;
          break;
        case "OL":
          candleProportionsUpCandles.OL220++;
          break;
      }
    } else if (range <= 230) {
      switch (whichProportion) {
        case "OH":
          candleProportionsUpCandles.OH230++;
          break;
        case "OC":
          candleProportionsUpCandles.OC230++;
          break;
        case "OL":
          candleProportionsUpCandles.OL230++;
          break;
      }
    } else if (range <= 240) {
      switch (whichProportion) {
        case "OH":
          candleProportionsUpCandles.OH240++;
          break;
        case "OC":
          candleProportionsUpCandles.OC240++;
          break;
        case "OL":
          candleProportionsUpCandles.OL240++;
          break;
      }
    } else if (range <= 250) {
      switch (whichProportion) {
        case "OH":
          candleProportionsUpCandles.OH250++;
          break;
        case "OC":
          candleProportionsUpCandles.OC250++;
          break;
        case "OL":
          candleProportionsUpCandles.OL250++;
          break;
      }
    } else if (range > 250) {
      switch (whichProportion) {
        case "OH":
          candleProportionsUpCandles.OH250plus++;
          break;
        case "OC":
          candleProportionsUpCandles.OC250Plus++;
          break;
        case "OL":
          candleProportionsUpCandles.OL250Plus++;
          break;
      }
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
