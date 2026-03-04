import { PanelHeader } from "../../components/PanelHeader";
import { PayVsHourScatterPlot } from "./PayVsHourScatterPlot";

export function PayVsHours() {
  return (
    <section className="py-5">
      <PanelHeader overLine="04 · Relationship View" title="Pay vs. Hours" />

      <div className="flex flex-col gap-1">
        <div className="flex flex-nowrap gap-1">
          <PayVsHourScatterPlot />
        </div>
      </div>
    </section>
  );
}
