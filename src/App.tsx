import "./App.css";
import D3Svg from "./D3Svg";
import { RenderD3 } from "./hooks/useD3";
import { interpolateRgb } from "d3-interpolate";
import {
  line,
  curveCardinal,
  axisBottom,
  scaleLinear,
  axisRight,
  NumberValue,
  scaleBand,
} from "d3";
import { useMemo, useState } from "react";

function App() {
  const [data, setData] = useState([25, 30, 45, 60, 20, 65, 75]);

  const renderD3: RenderD3 = (svg) => {
    const xScale = scaleBand()
      .domain(data.map((_, idx) => `${idx}`))
      .range([0, 300]);
    const yScale = scaleLinear().domain([0, 150]).range([150, 0]);

    const xAxis = axisBottom(xScale)
      .ticks(data.length)
      .tickFormat((index) => `${index.valueOf()}`);
    const yAxis = axisRight(yScale);

    svg
      .append("g")
      .attr("class", "x-axis")
      .style("transform", "translateY(150px)")
      .call(xAxis);
    svg
      .append("g")
      .attr("class", "y-axis")
      .style("transform", "translateX(300px)")
      .call(yAxis);

    svg.selectAll(".bar").data(data).join("rect").attr("class", "bar");
  };

  const dependencies = useMemo(() => [data], [data]);

  return (
    <div className="App">
      <D3Svg renderD3={renderD3} dependencies={dependencies}></D3Svg>
      <div className="btns">
        <button
          type="button"
          onClick={() => setData(data.map((value) => value + 5))}
        >
          update
        </button>
        <button
          type="button"
          onClick={() => setData((prev) => prev.filter((value) => value > 35))}
        >
          filter
        </button>
      </div>
    </div>
  );
}

export default App;
