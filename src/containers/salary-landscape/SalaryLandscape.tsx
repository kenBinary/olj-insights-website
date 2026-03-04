import { PanelHeader } from "../../components/PanelHeader";
import { AveragePayByCategoryChart } from "./AveragePayByCategoryChart";
import { AveragePayBySubCategoryChart } from "./AveragePayBySubCategoryChart";
import { PayRangeChart } from "./PayRangeChart";
import { SalaryDistributionChart } from "./SalaryDistributionChart";

export function SalaryLandscape() {
  return (
    <section className="lg:py-5">
      <PanelHeader overLine="01 · Compensation" title="Salary Landscape" />

      <div className="flex flex-col lg:gap-1 gap-4">
        <div className="flex flex-col lg:flex-row lg:flex-nowrap lg:gap-1 gap-4">
          <SalaryDistributionChart />
          <PayRangeChart />
        </div>

        <div className="flex flex-col lg:flex-row lg:flex-nowrap lg:gap-1 gap-4">
          <AveragePayByCategoryChart />
          <AveragePayBySubCategoryChart />
        </div>
      </div>
    </section>
  );
}
