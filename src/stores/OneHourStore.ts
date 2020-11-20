import { observable, toJS } from "mobx";
import { DSVRowArray } from "d3";

interface CandleStick {
  Open: number;
  High: number;
  Low: number;
  Close: number;
  Time: string;
}

export class OneHourStore {
  @observable sorted1HData = new Map<string, CandleStick[]>();
  @observable total1HCandles = 0;
  @observable total1HDays = 0;

  parse1HData = (csvFile: DSVRowArray<string>) => {
    let all1HDays = new Map<string, CandleStick[]>();
    let candlesFromSameDay: CandleStick[] = [];
    let currentDay = csvFile[0]["Local time"]!;

    for (let candle of csvFile) {
      this.total1HCandles++;
      let candleTime = candle["Local time"]!;
      let hour = candleTime.split(" ")[1].split(":")[0];
      let minute = candleTime.split(" ")[1].split(":")[1];
      let candleObject: CandleStick = {
        Open: parseFloat(candle["Open"]!),
        High: parseFloat(candle["High"]!),
        Low: parseFloat(candle["Low"]!),
        Close: parseFloat(candle["Close"]!),
        Time: candle["Local time"]!,
      };
      candlesFromSameDay.push(candleObject);
      if (hour === "16" && minute === "00") {
        currentDay = candleTime;
        all1HDays.set(currentDay, candlesFromSameDay);
        candlesFromSameDay = [];
        this.total1HDays++;
        continue;
      }
    }
    this.sorted1HData = all1HDays;
    console.log(all1HDays);

    this.betAtLeast30PipsOnAnySide();
  };

  betAtLeast30PipsOnAnySide = () => {
    let trades = {
      totalDays: 0,
      totalUpDays: 0,
      totalDownDays: 0,
      total1HCandles: 0,
      bothBelow10: 0,
      bothBelow20: 0,
      bothBelow30: 0,
      bothSides20: 0,
      atLeastOneSide20: 0,
      atLeastOneSide30: 0,
      win: 0,
      loss: 0,
      tradesWon: 0,
      tradesLost: 0,
      firstTradeTakenIsUp: 0,
      firstTradeTakenIsDown: 0,
    };

    for (let [date, candles] of this.sorted1HData) {
      let openPrice = candles[9].Open;
      let closePrice = candles[candles.length - 1].Close;
      let lowestPrice = 100;
      let highestPrice = -100;

      trades.totalDays++;
      for (let i = 0; i < candles.length; i++) {
        lowestPrice =
          candles[i].Low < lowestPrice ? candles[i].Low : lowestPrice;
        highestPrice =
          candles[i].High > highestPrice ? candles[i].High : highestPrice;
      }

      if (closePrice > openPrice) {
        trades.totalUpDays++;
      } else {
        trades.totalDownDays++;
      }

      let OH = this.diffInPips(highestPrice, openPrice);
      let OL = this.diffInPips(openPrice, lowestPrice);

      if (OH <= 10 && OL <= 10) {
        trades.bothBelow10++;
      } else if (OH <= 20 && OL <= 20) {
        trades.bothBelow20++;
      } else if (OH <= 30 && OL <= 30) {
        trades.bothBelow30++;
      }

      if (OH >= 20 && OL >= 20) {
        trades.bothSides20++;
      }
      if (OH >= 20 || OL >= 20) {
        trades.atLeastOneSide20++;
      }
      if (OH >= 30 || OL >= 30) {
        trades.atLeastOneSide30++;
      }

      for (let i = 9; i < candles.length; i++) {
        if (candles[i].High >= openPrice + 0.001) {
          trades.firstTradeTakenIsUp++;
          for (let j = i + 1; j < candles.length; j++) {
            if (candles[j].High >= openPrice + 0.003) {
              trades.win += 1;
              trades.tradesWon++;
              break;
            } else if (candles[j].Low <= openPrice - 0.001) {
              for (let k = j + 1; k < candles.length; k++) {
                if (candles[k].Low <= openPrice - 0.003) {
                  trades.win += 1;
                  trades.tradesWon++;
                  break;
                } else if (candles[k].High >= openPrice + 0.001) {
                  for (let m = k + 1; m < candles.length; m++) {
                    if (candles[m].High >= openPrice + 0.003) {
                      trades.win += 1;
                      trades.tradesWon++;
                      break;
                    } else if (candles[m].Low <= openPrice - 0.001) {
                      trades.loss += 7;
                      trades.tradesLost++;
                      break;
                    }
                  }
                  break;
                }
              }
              break;
            }
          }
          break;
        } else if (candles[i].Low <= openPrice - 0.001) {
          trades.firstTradeTakenIsDown++;
          for (let j = i + 1; j < candles.length; j++) {
            if (candles[j].Low <= openPrice - 0.003) {
              trades.win += 1;
              trades.tradesWon++;
              break;
            } else if (candles[j].High >= openPrice + 0.001) {
              for (let k = j + 1; k < candles.length; k++) {
                if (candles[k].High >= openPrice + 0.003) {
                  trades.win += 1;
                  trades.tradesWon++;
                  break;
                } else if (candles[k].Low <= openPrice - 0.001) {
                  for (let m = k + 1; m < candles.length; m++) {
                    if (candles[m].Low <= openPrice - 0.003) {
                      trades.win += 1;
                      trades.tradesWon++;
                      break;
                    } else if (candles[m].High >= openPrice + 0.001) {
                      trades.loss += 7;
                      trades.tradesLost++;
                      break;
                    }
                  }
                  break;
                }
              }
              break;
            }
          }
          break;
        }
      }
    }
    console.log(trades);
  };

  // haveFunWith1HCandles = () => {
  //   let trades = {
  //     totalDays: 0,
  //     totalTrades: 0,
  //     wentToOpenAfter: 0,
  //     won: 0,
  //     lost: 0,
  //     predict: 0,
  //   };
  //   for (let [date, candlesArr] of this.sorted1HData) {
  //     let openPrice = candlesArr[0].Open;

  //     let closePrice = candlesArr[candlesArr.length - 1].Close;

  //     trades.totalDays++;

  //     for (let i = 0; i < candlesArr.length; i++) {
  //       let highestPrice = -300;
  //       let lowestPrice = 100;
  //       if (candlesArr[i].High >= openPrice + 0.002) {
  //         trades.totalTrades++;
  //         highestPrice = candlesArr[i].High;

  //         for (let j = i + 1; j < candlesArr.length; j++) {
  //           if (candlesArr[j].High > highestPrice) {
  //             highestPrice = candlesArr[j].High;
  //           }
  //           if (
  //             candlesArr[j].Low <= openPrice &&
  //             highestPrice < openPrice + 0.005
  //           ) {
  //             trades.wentToOpenAfter++;

  //             for (let k = j + 1; k < candlesArr.length; k++) {
  //               if (candlesArr[k].Low <= openPrice - 0.006) {
  //                 trades.won += 3;
  //                 break;
  //               } else if (candlesArr[k].High >= openPrice + 0.002) {
  //                 trades.lost++;
  //                 break;
  //               }

  //               if (k === candlesArr.length - 1) {
  //                 let finalPrice = candlesArr[k].Close;
  //                 if (finalPrice < openPrice) {
  //                   trades.won += 1;
  //                 } else {
  //                   trades.lost += 0.5;
  //                 }
  //               }
  //             }
  //             break;
  //           }
  //         }
  //         break;
  //       } else if (candlesArr[i].Low <= openPrice - 0.002) {
  //         trades.totalTrades++;
  //         lowestPrice = candlesArr[i].Low;

  //         for (let j = i + 1; j < candlesArr.length; j++) {
  //           if (candlesArr[j].Low < lowestPrice) {
  //             lowestPrice = candlesArr[j].Low;
  //           }
  //           if (
  //             candlesArr[j].High >= openPrice &&
  //             lowestPrice > openPrice - 0.005
  //           ) {
  //             trades.wentToOpenAfter++;

  //             for (let k = j + 1; k < candlesArr.length; k++) {
  //               if (candlesArr[k].High >= openPrice + 0.006) {
  //                 trades.won += 3;
  //                 break;
  //               } else if (candlesArr[k].Low <= openPrice - 0.002) {
  //                 trades.lost++;
  //                 break;
  //               }
  //               if (k === candlesArr.length - 1) {
  //                 if (candlesArr[k].Close > openPrice) {
  //                   trades.won += 1;
  //                 } else {
  //                   trades.lost += 0.5;
  //                 }
  //               }
  //             }
  //             break;
  //           }
  //         }
  //         break;
  //       }
  //     }
  //   }
  //   console.log(trades);
  // };

  @observable rangeStats = {
    LW3: {
      correspondingAvgOH: 0,
      totalCandlesWithThisLW: 0,
    },
    LW6: {
      correspondingAvgOH: 0,
      totalCandlesWithThisLW: 0,
    },
    LW9: {
      correspondingAvgOH: 0,
      totalCandlesWithThisLW: 0,
    },
    LW12: {
      correspondingAvgOH: 0,
      totalCandlesWithThisLW: 0,
    },
    LW15: {
      correspondingAvgOH: 0,
      totalCandlesWithThisLW: 0,
    },
    Others: {
      correspondingAvgOH: 0,
      totalCandlesWithThisLW: 0,
    },
  };

  @observable chances = {
    OH5: {
      closedGreen: 0,
      closedRed: 0,
    },
    OH10: {
      closedGreen: 0,
      closedRed: 0,
    },
    OH15: {
      closedGreen: 0,
      closedRed: 0,
    },
    OH20: {
      closedGreen: 0,
      closedRed: 0,
    },
    OH25: {
      closedGreen: 0,
      closedRed: 0,
    },
    OH30: {
      closedGreen: 0,
      closedRed: 0,
    },
    OH35: {
      closedGreen: 0,
      closedRed: 0,
    },
  };

  doStuffWithLondonOpenCandles = () => {
    let cumLondonOpenRange = 0;
    let cumLondonOpenCandles = 0;

    let avgLowerWick = 0;
    let avgUpperWick = 0;
    let totalLONYUpCandles = 0;

    let trades = 0;
    for (let [k, candlesArr] of this.sorted1HData) {
      for (let i = 0; i < candlesArr.length; i++) {
        let candleRange = parseFloat(
          ((candlesArr[i].High - candlesArr[i].Low) * 10000).toFixed(2)
        );
        if (i >= 10) {
          cumLondonOpenRange += candleRange;
          cumLondonOpenCandles++;

          let candleClose = candlesArr[i].Close;
          let candleOpen = candlesArr[i].Open;

          let lowerWick = parseFloat(
            ((candlesArr[i].Open - candlesArr[i].Low) * 10000).toFixed(2)
          );
          let upperWick = parseFloat(
            ((candlesArr[i].High - candlesArr[i].Open) * 10000).toFixed(2)
          );

          if (candlesArr[i].Close > candlesArr[i].Open) {
            avgLowerWick += lowerWick;
            avgUpperWick += upperWick;
            totalLONYUpCandles++;

            if (lowerWick <= 3 && lowerWick > 0) {
              this.rangeStats.LW3.correspondingAvgOH += upperWick;
              this.rangeStats.LW3.totalCandlesWithThisLW++;
            } else if (lowerWick <= 6) {
              this.rangeStats.LW6.correspondingAvgOH += upperWick;
              this.rangeStats.LW6.totalCandlesWithThisLW++;
            } else if (lowerWick <= 9) {
              this.rangeStats.LW9.correspondingAvgOH += upperWick;
              this.rangeStats.LW9.totalCandlesWithThisLW++;
            } else if (lowerWick <= 12) {
              this.rangeStats.LW12.correspondingAvgOH += upperWick;
              this.rangeStats.LW12.totalCandlesWithThisLW++;
            } else if (lowerWick <= 15) {
              this.rangeStats.LW15.correspondingAvgOH += upperWick;
              this.rangeStats.LW15.totalCandlesWithThisLW++;
            } else {
              this.rangeStats.Others.correspondingAvgOH += upperWick;
              this.rangeStats.Others.totalCandlesWithThisLW++;
            }
          }
          if (upperWick >= 5) {
            if (candleClose > candleOpen) {
              this.chances.OH5.closedGreen++;
            } else {
              this.chances.OH5.closedRed++;
            }
          }
          if (upperWick >= 10) {
            if (candleClose > candleOpen) {
              this.chances.OH10.closedGreen++;
            } else {
              this.chances.OH10.closedRed++;
            }
          }
          if (upperWick >= 15) {
            if (candleClose > candleOpen) {
              this.chances.OH15.closedGreen++;
            } else {
              this.chances.OH15.closedRed++;
            }
          }
          if (upperWick >= 20) {
            if (candleClose > candleOpen) {
              this.chances.OH20.closedGreen++;
            } else {
              this.chances.OH20.closedRed++;
            }
          }
          if (upperWick >= 25) {
            if (candleClose > candleOpen) {
              this.chances.OH25.closedGreen++;
            } else {
              this.chances.OH25.closedRed++;
            }
          }
        }
      }
    }
    console.log(`Average Range: ${cumLondonOpenRange / cumLondonOpenCandles}`);
    console.log(`Total LONY Candles: ${cumLondonOpenCandles}`);
    console.log(`Total Up Candles in LONY Sessions: ${totalLONYUpCandles}`);
    console.log(
      avgUpperWick / totalLONYUpCandles,
      avgLowerWick / totalLONYUpCandles
    );

    for (let [k, v] of Object.entries(this.rangeStats)) {
      console.log(k);
      console.log(v.totalCandlesWithThisLW);
      console.log(v.correspondingAvgOH / v.totalCandlesWithThisLW);
    }
    console.log(this.chances);
  };

  PercentCloseGreenRedAfterMovementOfCertainAmt = () => {
    let data = {
      total1HCandles: 0,
      totalGreenCandles: 0,
      totalRedCandles: 0,
      atLeastOne5: 0,
      bothWithWicksAtLeast5: 0,
      bothWithWicksAtLeast10: 0,
      bothWithWicksAtLeast15: 0,
      bothWithWicksAtLeast20: 0,
    };

    for (let [date, candlesArr] of this.sorted1HData) {
      let dailyOpen = candlesArr[0].Open;
      let dailyClose = candlesArr[candlesArr.length - 1].Close;

      for (let i = 0; i < candlesArr.length; i++) {
        if (i >= 10) {
          data.total1HCandles++;
          //london begins
          let OH = this.diffInPips(candlesArr[i].High, candlesArr[i].Open);
          let OL = this.diffInPips(candlesArr[i].Open, candlesArr[i].Low);
          if (OH >= 5 || OL >= 5) {
            data.atLeastOne5++;
          }
          if (OH >= 5 && OL >= 5) {
            data.bothWithWicksAtLeast5++;
          }
          if (OH >= 10 && OL >= 10) {
            data.bothWithWicksAtLeast10++;
          }
          if (OH >= 15 && OL >= 15) {
            data.bothWithWicksAtLeast15++;
          }
          if (OH >= 20 && OL >= 20) {
            data.bothWithWicksAtLeast20++;
          }
        }
      }
    }
    console.log(data);
  };

  diffInPips = (value1: number, value2: number) => {
    return parseFloat(((value1 - value2) * 10000).toFixed(2));
  };
}
