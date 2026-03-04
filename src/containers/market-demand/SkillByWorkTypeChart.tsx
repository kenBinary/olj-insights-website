import { useState } from "react";
import Plot from "react-plotly.js";
import chartJson from "../../data/market-demand/skills_by_work_type.json";
import type { Data, Layout } from "plotly.js";
import { ChartHeader } from "../../components/ChartHeader";

type WorkType = "Any" | "Full Time" | "Part Time" | "Gig";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const charts: any[] = (chartJson as any).charts;

const WORK_TYPES: WorkType[] = ["Any", "Full Time", "Part Time", "Gig"];

export function SkillByWorkTypeChart() {
  const [selectedWorkType, setSelectedWorkType] = useState<WorkType>("Any");

  const activeChart = charts.find((c) => c.key === selectedWorkType);

  return (
    <div className="p-5 border flex-1">
      <ChartHeader
        overLine="Work Type Breakdown"
        title="Top Skills by Work Type"
        description="Most in-demand skills segmented by employment type (Full Time, Gig, Part Time)."
      />

      <div className="flex flex-wrap gap-4 mb-4">
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium uppercase tracking-wide">
            Work Type
          </span>
          <div className="flex rounded-md overflow-hidden border border-gray-300">
            {WORK_TYPES.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedWorkType(type)}
                className={`px-3 py-1 text-sm font-medium transition-colors cursor-pointer ${
                  selectedWorkType === type
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </div>

      {activeChart ? (
        <Plot
          data={activeChart.data as Data[]}
          layout={{
            ...(activeChart.layout as unknown as Partial<Layout>),
            autosize: true,
            paper_bgcolor: "transparent",
            plot_bgcolor: "transparent",
            height: 400,
          }}
          config={{ responsive: true }}
          style={{ width: "100%" }}
        />
      ) : (
        <p className="text-sm text-gray-400 italic">
          No data available for {selectedWorkType}.
        </p>
      )}
    </div>
  );
}
