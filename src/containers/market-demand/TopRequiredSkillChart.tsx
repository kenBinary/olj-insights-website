import Plot from "react-plotly.js";
import { ChartHeader } from "../../components/ChartHeader";
import topSkillsData from "../../data/market-demand/top_skills_10.json";
import type { Data, Layout } from "plotly.js";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const chartData: Data[] = (topSkillsData as any).data;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const chartLayout: Partial<Layout> = (topSkillsData as any).layout;

export function TopRequiredSkillChart() {
  return (
    <div className="p-5 border flex-1">
      <ChartHeader
        overLine="Demand Frequency"
        title="Top 10 Required Skills"
        description="Skills listed most frequently across all job postings"
      />

      <Plot
        data={chartData}
        layout={{
          ...chartLayout,
          autosize: true,
          paper_bgcolor: "transparent",
          plot_bgcolor: "transparent",
        }}
        config={{ responsive: true }}
        style={{ width: "100%" }}
      />
    </div>
  );
}
