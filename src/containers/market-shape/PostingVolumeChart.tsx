import Plot from "react-plotly.js";
import chartJson from "../../data/market-shape/monthly_posting_volume.json";
import type { Data, Layout } from "plotly.js";
import { ChartHeader } from "../../components/ChartHeader";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const chartData: Data[] = (chartJson as any).data;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const chartLayout: Partial<Layout> = (chartJson as any).layout;

export function PostingVolumeChart() {
  return (
    <div className="p-5 border flex-1">
      <ChartHeader
        overLine="Trends"
        title="Job Posting Volume"
        description="Number of job postings over time on a monthly basis."
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
