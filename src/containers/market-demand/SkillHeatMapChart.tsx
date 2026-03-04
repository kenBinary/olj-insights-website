import Plot from "react-plotly.js";
import chartJson from "../../data/market-demand/skill_pairing_heatmap_15.json";
import type { Data, Layout } from "plotly.js";
import { ChartHeader } from "../../components/ChartHeader";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const chartData: Data[] = (chartJson as any).data;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const chartLayout: Partial<Layout> = (chartJson as any).layout;

export function SkillHeatMapChart() {
  return (
    <div className="lg:p-5 p-3 border flex-1">
      <ChartHeader
        overLine="Skill Relationships"
        title="Skill Pairing Heatmap"
        description="How often the top 15 skills appear together in the same job listing, revealing natural skill clusters and complementary pairings."
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
