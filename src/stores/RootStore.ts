import { DataStore } from "./DataStore";

export default class RootStore {
  dataStore: DataStore;

  constructor() {
    this.dataStore = new DataStore();
  }
}
