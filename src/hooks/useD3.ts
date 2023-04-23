import React, { DependencyList } from "react";
import * as d3 from "d3";

export type RenderD3 = (
  svg: d3.Selection<SVGSVGElement | null, unknown, null, undefined>
) => void;

export const useD3 = (renderD3: RenderD3, dependencies: DependencyList) => {
  const ref = React.useRef<SVGSVGElement>(null);

  React.useEffect(() => {
    const svg = d3.select(ref.current);
    renderD3(svg);
    return () => {};
  }, dependencies);

  return ref;
};
