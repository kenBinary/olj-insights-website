import Plot from "react-plotly.js";
import avgPayBySubCategory from "../../data/salary-landscape/avg_pay_by_subcategory.json";
import type { Data, Layout } from "plotly.js";
import { ChartHeader } from "../../components/ChartHeader";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const chartData: Data[] = (avgPayBySubCategory as any).data;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const chartLayout: Partial<Layout> = (avgPayBySubCategory as any).layout;

export function AveragePayBySubCategoryChart() {
  return (
    <div className="p-5 border flex-2">
      <ChartHeader
        overLine="SubCategory Comparison"
        title="Avg Salary by Job SubCategory"
        description="Average monthly USD by job subcategory"
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
