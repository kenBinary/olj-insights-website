import { useState } from "react";
import Plot from "react-plotly.js";
import payRange from "../../data/salary-landscape/pay_range_by_work_type.json";
import type { Data, Layout } from "plotly.js";
import { ChartHeader } from "../../components/ChartHeader";

type Currency = "PHP" | "USD";
type TimeRange = "Hourly" | "Weekly" | "Monthly";

function buildKey(currency: Currency, range: TimeRange): string {
  return `${currency}_${range.toLowerCase()}`;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const charts: any[] = (payRange as any).charts;

const CURRENCIES: Currency[] = ["PHP", "USD"];
const TIME_RANGES: TimeRange[] = ["Hourly", "Weekly", "Monthly"];

export function PayRangeChart() {
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>("USD");
  const [selectedRange, setSelectedRange] = useState<TimeRange>("Monthly");

  const activeKey = buildKey(selectedCurrency, selectedRange);
  const activeChart = charts.find((c) => c.key === activeKey);

  return (
    <div className="p-5 border flex-1">
      <ChartHeader
        overLine="By Work Type"
        title="Pay Range by Work Type"
        description="IQR box plots showing median, Q1-Q3, and outlier range across work types."
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

        <div className="flex items-center gap-2">
          <span className="text-xs font-medium uppercase tracking-wide">
            Period
          </span>
          <div className="flex rounded-md overflow-hidden border border-gray-300">
            {TIME_RANGES.map((range) => (
              <button
                key={range}
                onClick={() => setSelectedRange(range)}
                className={`px-3 py-1 text-sm font-medium transition-colors cursor-pointer ${
                  selectedRange === range
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {range}
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
          No data available for {selectedCurrency} · {selectedRange}.
        </p>
      )}
    </div>
  );
}
