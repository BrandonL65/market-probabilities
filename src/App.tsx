import React from "react";
import DataContainer from "./containers/DataContainer";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles["App"]}>
      <h1>Market Probabilities</h1>
      <DataContainer />
    </div>
  );
}

export default App;
