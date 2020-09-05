import React, { useContext } from "react";
import DataContainer from "./containers/DataContainer";
import "./App.css";
import { rootStoreContext } from "./contexts";

function App() {
  return (
    <div className="App">
      <h1>Market Probabilities</h1>
      <DataContainer />
    </div>
  );
}

export default App;
