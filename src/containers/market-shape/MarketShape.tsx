import { PanelHeader } from "../../components/PanelHeader";
import { WorkTypeBreakdownChart } from "./WorkTypeBreakdownChart";
import { PostingVolumeChart } from "./PostingVolumeChart";
import { WeeklyHourDistributionChart } from "./WeeklyHourDistributionChart";

export function MarketShape() {
  return (
    <section className="lg:py-5">
      <PanelHeader overLine="03 · Market Shape" title="Market Dynamics" />

      <div className="flex flex-col lg:gap-1 gap-4">
        <div className="flex flex-col lg:flex-row lg:flex-nowrap lg:gap-1 gap-4">
          <WorkTypeBreakdownChart />
          <PostingVolumeChart />
        </div>

        <div className="flex flex-col lg:flex-row lg:flex-nowrap lg:gap-1 gap-4">
          <WeeklyHourDistributionChart />
        </div>
      </div>
    </section>
  );
}
