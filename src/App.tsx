import React, { useContext } from "react";
import "./App.css";
import { rootStoreContext } from "./contexts";
import * as d3 from "d3";

function App() {
  const { dataStore } = useContext(rootStoreContext);

  return (
    <div className="App">
      <h1>Market Probabilities</h1>
      <h3>Hello world</h3>
    </div>
  );
}

export default App;
