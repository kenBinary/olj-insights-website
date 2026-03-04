import Plot from "react-plotly.js";
import payVsHoursScatterPlot from "../../data/pay-vs-hours/pay_vs_hours.json";
import type { Data, Layout } from "plotly.js";
import { ChartHeader } from "../../components/ChartHeader";
import { useState } from "react";

type Currency = "PHP" | "USD";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const charts: any[] = (payVsHoursScatterPlot as any).charts;

const CURRENCIES: Currency[] = ["PHP", "USD"];

export function PayVsHourScatterPlot() {
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>("USD");
  const activeChart = charts.find((c) => c.key === selectedCurrency);

  return (
    <div className="p-5 border flex-1">
      <ChartHeader
        overLine="Pay vs Hours"
        title="Pay vs Hours"
        description="The relationship between pay and hours for job postings."
      />

      <div className="flex flex-wrap gap-4 mb-4">
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium uppercase tracking-wide">
            Currency
          </span>
          <div className="flex rounded-md overflow-hidden border border-gray-300">
            {CURRENCIES.map((currency) => (
              <button
                key={currency}
                onClick={() => setSelectedCurrency(currency)}
                className={`px-3 py-1 text-sm font-medium transition-colors cursor-pointer ${
                  selectedCurrency === currency
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {currency}
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
            height: 450,
          }}
          config={{ responsive: true }}
          style={{ width: "100%" }}
        />
      ) : (
        <p className="text-sm text-gray-400 italic">
          No data available for {selectedCurrency}.
        </p>
      )}
    </div>
  );
}
