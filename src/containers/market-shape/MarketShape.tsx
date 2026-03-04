import { PanelHeader } from "../../components/PanelHeader";
import { WorkTypeBreakdownChart } from "./WorkTypeBreakdownChart";
import { PostingVolumeChart } from "./PostingVolumeChart";
import { WeeklyHourDistributionChart } from "./WeeklyHourDistributionChart";

export function MarketShape() {
  return (
    <section className="py-5">
      <PanelHeader overLine="03 · Market Shape" title="Market Dynamics" />

      <div className="flex flex-col gap-1">
        <div className="flex flex-nowrap gap-1">
          <WorkTypeBreakdownChart />
          <PostingVolumeChart />
        </div>

        <div className="flex flex-nowrap gap-1">
          <WeeklyHourDistributionChart />
        </div>
      </div>
    </section>
  );
}
