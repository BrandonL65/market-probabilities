import { observable, computed } from "mobx";
import { DSVRowArray } from "d3";

export class DataStore {
  @observable name: string = "";

  @observable rawData: DSVRowArray<string> | null[] = [];

  @observable totalUpDays: number = 0;
  @observable totalDownDays: number = 0;

  parseData = () => {
    this.rawData.forEach((data: any) => {
      let open = parseFloat(data["Open"]);
      let close = parseFloat(data["Price"]);

      if (close > open) {
        this.totalUpDays++;
      } else {
        this.totalDownDays++;
      }
    });

    console.log(this.totalUpDays, this.totalDownDays, this.rawData.length);
  };
}
