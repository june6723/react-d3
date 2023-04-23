import { DependencyList, PropsWithChildren } from "react";
import { RenderD3, useD3 } from "./hooks/useD3";

type Props = PropsWithChildren<{
  renderD3: RenderD3;
  dependencies?: DependencyList;
}>;

const D3Svg = ({ renderD3, dependencies = [], children }: Props) => {
  const ref = useD3(renderD3, dependencies);
  return <svg ref={ref}>{children}</svg>;
};
export default D3Svg;
