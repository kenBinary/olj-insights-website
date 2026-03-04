import { PanelHeader } from "../../components/PanelHeader";
import { AveragePayByCategoryChart } from "./AveragePayByCategoryChart";
import { AveragePayBySubCategoryChart } from "./AveragePayBySubCategoryChart";
import { PayRangeChart } from "./PayRangeChart";
import { SalaryDistributionChart } from "./SalaryDistributionChart";

export function SalaryLandscape() {
  return (
    <section className="py-5">
      <PanelHeader overLine="01 · Compensation" title="Salary Landscape" />

      <div className="flex flex-col gap-1">
        <div className="flex flex-nowrap gap-1">
          <SalaryDistributionChart />
          <PayRangeChart />
        </div>

        <div className="flex flex-nowrap gap-1">
          <AveragePayByCategoryChart />
          <AveragePayBySubCategoryChart />
        </div>
      </div>
    </section>
  );
}
