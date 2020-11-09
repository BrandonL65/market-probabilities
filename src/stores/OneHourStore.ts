import { observable } from "mobx";
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
    this.PercentCloseGreenRedAfterMovementOfCertainAmt();
  };

  PercentCloseGreenRedAfterMovementOfCertainAmt = () => {
    let data = new Map([
      ["totalDays", 0],
      ["totalGreenDays", 0],
      ["totalRedDays", 0],
      ["totalTouchedDev", 0],
      ["totalClosedGreenAfterDev", 0],
      ["totalClosedRedAfterDev", 0],
      ["totalTouchedOpenAgainAfterDev", 0],
      ["touchedOpenAndClosedGreen", 0],
      ["touchedOpenAndClosedRed", 0],
      ["wentBackToDevAgain", 0],
      ["wentLowerByDeviation", 0],
    ]);
    for (let [date, candlesArr] of this.sorted1HData) {
      let dailyOpen = candlesArr[0].Open;
      let dailyClose = candlesArr[candlesArr.length - 1].Close;
      let deviationUp = dailyOpen + 0.004;
      let deviationDown = dailyOpen - 0.004;
      data.set("totalDays", data.get("totalDays")! + 1);
      if (dailyClose > dailyOpen) {
        data.set("totalGreenDays", data.get("totalGreenDays")! + 1);
      } else {
        data.set("totalRedDays", data.get("totalRedDays")! + 1);
      }

      for (let i = 0; i < candlesArr.length; i++) {
        if (candlesArr[i].High >= deviationUp) {
          data.set("totalTouchedDev", data.get("totalTouchedDev")! + 1);
          if (dailyClose > dailyOpen) {
            data.set(
              "totalClosedGreenAfterDev",
              data.get("totalClosedGreenAfterDev")! + 1
            );
          } else {
            data.set(
              "totalClosedRedAfterDev",
              data.get("totalClosedRedAfterDev")! + 1
            );
          }
          for (let j = i + 1; j < candlesArr.length; j++) {
            if (candlesArr[j].Low <= dailyOpen) {
              data.set(
                "totalTouchedOpenAgainAfterDev",
                data.get("totalTouchedOpenAgainAfterDev")! + 1
              );
              if (dailyClose > dailyOpen) {
                data.set(
                  "touchedOpenAndClosedGreen",
                  data.get("touchedOpenAndClosedGreen")! + 1
                );
              } else {
                data.set(
                  "touchedOpenAndClosedRed",
                  data.get("touchedOpenAndClosedRed")! + 1
                );
              }
              for (let k = j + 1; k < candlesArr.length; k++) {
                if (candlesArr[k].High >= deviationUp) {
                  data.set(
                    "wentBackToDevAgain",
                    data.get("wentBackToDevAgain")! + 1
                  );
                  break;
                } else if (candlesArr[k].Low <= deviationDown) {
                  data.set(
                    "wentLowerByDeviation",
                    data.get("wentLowerByDeviation")! + 1
                  );
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
    console.log(data);
  };
}
