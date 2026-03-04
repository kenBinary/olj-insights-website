import { PanelHeader } from "../../components/PanelHeader";
import { PayVsHourScatterPlot } from "./PayVsHourScatterPlot";

export function PayVsHours() {
  return (
    <section className="lg:py-5">
      <PanelHeader overLine="04 · Relationship View" title="Pay vs. Hours" />

      <div className="flex flex-col lg:gap-1 gap-4">
        <div className="flex flex-col lg:flex-row lg:flex-nowrap lg:gap-1 gap-4">
          <PayVsHourScatterPlot />
        </div>
      </div>
    </section>
  );
}
