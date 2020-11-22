import { DataStore } from "./DataStore";
import { OneHourStore } from "./OneHourStore";

export default class RootStore {
  dataStore: DataStore;
  oneHourStore: OneHourStore;

  constructor() {
    this.dataStore = new DataStore();
    this.oneHourStore = new OneHourStore();
  }
}
