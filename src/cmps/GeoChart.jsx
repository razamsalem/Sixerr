import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Country", "Views"],
  ["Germany", 841],
  ["United States", 1621],
  ["Brazil", 1382],
  ["Canada", 1078],
  ["France", 1074],
  ["Russia", 1509],
  ["Israel", 1200],
  ["Argentina", 932],
  ["Spain", 456],
  ["Norway", 510],
  ["South Africa", 815],
  ["Morocco", 105],
  ["Angola", 385],
  ["mali", 1385],
  ["Sudan", 915],
  ["Cameroon", 918],
  ["Algeria", 574],
  ["China", 847],
  ["Australia", 1750],
  ["India", 1657],
  ["Sweden", 1057],
  ["Kazakhstan", 257],
  ["Saudi Arabia", 154],
  ["Mexico", 354],
  ["Indonesia", 1354],
  ["Iran", 872],
  ["Mongolia", 471],
  ["Chad", 172],
  ["Peru", 422],
  ["Venezuela", 942],
  ["Egypt", 239],
  ["Bolivia", 578],
  ["Colombia", 1472],
  ["Niger", 478],
  ["Mali", 872],
  ["United Kingdom", 1429],
  ["Chile", 1129],
  ["Greenland", 2],
  ["Iraq", 17],
  ["Turkey", 656],
  ["Romania", 1012],
  ["Italy", 786],
  ["Poland", 950],
  ["Bulgaria", 823],
];

export function GeoChart() {
  return (
    <Chart
      chartEvents={[
        {
          eventName: "select",
          callback: ({ chartWrapper }) => {
            const chart = chartWrapper.getChart();
            const selection = chart.getSelection();
            if (selection.length === 0) return;
            const region = data[selection[0].row + 1];
            console.log("Selected : " + region);
          },
        },
      ]}
      chartType="GeoChart"
      width="100%"
      height="300px"
      data={data}
    />
  );
}
