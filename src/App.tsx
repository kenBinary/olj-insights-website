import { MarketDemand } from "./containers/market-demand/MarketDemand";
import { SalaryLandscape } from "./containers/salary-landscape/SalaryLandscape";
import { MarketShape } from "./containers/market-shape/MarketShape";
import { PayVsHours } from "./containers/pay-vs-hours/PayVsHours";

function App() {
  return (
    <>
      <header className="mx-40 my-10">
        <p className="text-sm">Philippine Remote Job Market · Data Report</p>
        <h1 className="text-7xl font-extrabold">
          The <i> Remote</i> <br />
          Job Market <br />
          Decoded.
        </h1>
        <p className="w-[50ch] my-2">
          25, 000+ listings scraped and analyzed to reveal where opportunity
          lives, what skills are in demand, and how to navigate the remote job
          market in the Philippines.
        </p>
      </header>
      <main className="mx-40 my-5">
        <SalaryLandscape />
        <MarketDemand />
        <MarketShape />
        <PayVsHours />
      </main>
    </>
  );
}

export default App;
