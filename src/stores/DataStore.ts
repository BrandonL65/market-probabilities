import { observable } from "mobx";
import { DSVRowArray } from "d3";

interface AllCloseProbabilities {
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

  @observable allCloseProbabilitiesUsingHiLo: AllCloseProbabilities = {
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

      this.averageRange = this.averageRange + (high - low) * 10000;
    });

    //calculates average high-low range, assigns it
    this.averageRange = parseFloat(
      (this.averageRange / this.rawData.length).toFixed(2)
    );
  };

  //test the % of time price retraces X%, then closes opposite direction

  //test probabilities to close within 0.25% "zones"
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

  reset = () => {
    this.name = "";
    this.rawData = [];
    this.totalUpDays = 0;
    this.totalDownDays = 0;
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
  };
}
