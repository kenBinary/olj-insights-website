import Plot from "react-plotly.js";
import chartJson from "../../data/market-shape/work_type_distribution.json";
import type { Data, Layout } from "plotly.js";
import { ChartHeader } from "../../components/ChartHeader";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const chartData: Data[] = (chartJson as any).data;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const chartLayout: Partial<Layout> = (chartJson as any).layout;

export function WorkTypeBreakdownChart() {
  return (
    <div className="lg:p-5 p-3 border flex-1">
      <ChartHeader
        overLine="Composition"
        title="Work Type Breakdown"
        description="Distribution of jobs across different employment types (Full-time, Part-time, etc.)."
      />

      <Plot
        data={chartData}
        layout={{
          ...chartLayout,
          autosize: true,
          paper_bgcolor: "transparent",
          plot_bgcolor: "transparent",
          height: 400,
        }}
        config={{ responsive: true }}
        style={{ width: "100%" }}
      />
    </div>
  );
}
