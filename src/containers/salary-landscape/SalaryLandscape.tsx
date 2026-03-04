import { AveragePayByCategoryChart } from "./AveragePayByCategoryChart";
import { AveragePayBySubCategoryChart } from "./AveragePayBySubCategoryChart";
import { PayRangeChart } from "./PayRangeChart";
import { SalaryDistributionChart } from "./SalaryDistributionChart";

export function SalaryLandscape() {
  return (
    <section className="py-5">
      <div className="border-b pb-5 mb-5">
        <p className="text-sm tracking-wide">01 · Compensation</p>
        <h2 className="text-4xl font-bold">Salary Landscape</h2>
      </div>

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
