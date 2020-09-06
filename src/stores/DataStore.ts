import { observable } from "mobx";
import { DSVRowArray } from "d3";

interface DTURetrace {
  downTwentyFive: number;
  downFifty: number;
}

interface UTDRetrace {
  upTwentyFive: number;
  upFifty: number;
}

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

  @observable downToUpRetrace: DTURetrace = {
    downTwentyFive: 0,
    downFifty: 0,
  };

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

  parseData = () => {
    this.rawData.forEach((data: any) => {
      let open = parseFloat(data["Open"]);
      let close = parseFloat(data["Price"]);
      let change = parseFloat(data["Change %"].split("%")[0]);

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
      }
    });
  };

  reset = () => {
    this.name = "";
    this.rawData = [];
    this.totalUpDays = 0;
    this.totalDownDays = 0;
  };
}
