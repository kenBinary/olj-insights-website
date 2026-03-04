import { PanelHeader } from "../../components/PanelHeader";
import { TopRequiredSkillChart } from "./TopRequiredSkillChart";
import { SkillHeatMapChart } from "./SkillHeatMapChart";
import { SkillByWorkTypeChart } from "./SkillByWorkTypeChart";

export function MarketDemand() {
  return (
    <section className="py-5">
      <PanelHeader overLine="02 · Skills" title="Market Demands" />

      <div className="flex flex-col gap-1">
        <div className="flex flex-nowrap gap-1">
          <TopRequiredSkillChart />
          <SkillByWorkTypeChart />
        </div>
        <div className="flex flex-nowrap gap-1">
          <SkillHeatMapChart />
        </div>
      </div>
    </section>
  );
}
