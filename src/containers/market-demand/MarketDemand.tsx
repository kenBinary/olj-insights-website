import { PanelHeader } from "../../components/PanelHeader";
import { TopRequiredSkillChart } from "./TopRequiredSkillChart";
import { SkillHeatMapChart } from "./SkillHeatMapChart";
import { SkillByWorkTypeChart } from "./SkillByWorkTypeChart";

export function MarketDemand() {
  return (
    <section className="lg:py-5">
      <PanelHeader overLine="02 · Skills" title="Market Demands" />

      <div className="flex flex-col lg:gap-1 gap-4">
        <div className="flex flex-col lg:flex-row lg:flex-nowrap lg:gap-1 gap-4">
          <TopRequiredSkillChart />
          <SkillByWorkTypeChart />
        </div>
        <div className="flex flex-col lg:flex-row lg:flex-nowrap lg:gap-1 gap-4">
          <SkillHeatMapChart />
        </div>
      </div>
    </section>
  );
}
