import Plot from "react-plotly.js";
import chartJson from "../../data/market-shape/weekly_hours_distribution.json";
import type { Data, Layout } from "plotly.js";
import { ChartHeader } from "../../components/ChartHeader";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const chartData: Data[] = (chartJson as any).data;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const chartLayout: Partial<Layout> = (chartJson as any).layout;

export function WeeklyHourDistributionChart() {
  return (
    <div className="p-5 border flex-1">
      <ChartHeader
        overLine="Engagement"
        title="Weekly Hours Distribution"
        description="The distribution of required weekly working hours for job postings."
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
