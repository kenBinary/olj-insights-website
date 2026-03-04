import { MarketDemand } from "./containers/market-demand/MarketDemand";
import { SalaryLandscape } from "./containers/salary-landscape/SalaryLandscape";
import { MarketShape } from "./containers/market-shape/MarketShape";
import { PayVsHours } from "./containers/pay-vs-hours/PayVsHours";
import githubLogo from "./assets/github-logo.svg";

function App() {
  return (
    <>
      <header className="lg:mx-40 lg:my-10 p-5">
        <p className="text-sm">Philippine Remote Job Market · Data Report</p>
        <h1 className="lg:text-7xl font-extrabold text-4xl">
          The <i> Remote</i> <br />
          Job Market <br />
          Decoded.
        </h1>
        <p className="lg:w-[50ch] lg:my-2">
          25, 000+ listings scraped and analyzed to reveal where opportunity
          lives, what skills are in demand, and how to navigate the remote job
          market in the Philippines.
        </p>
      </header>
      <main className="lg:mx-40 lg:my-5 px-5">
        <SalaryLandscape />
        <MarketDemand />
        <MarketShape />
        <PayVsHours />
      </main>
      <footer className="lg:mx-40 lg:my-3 lg:p-2 p-5 border-t">
        <p>Source Codes for this Project</p>
        <div className="flex gap-4">
          <div className="flex gap-2 items-center">
            <img src={githubLogo} alt="GitHub Logo" className="w-4" />
            <a
              href="https://github.com/kenBinary/olj-insights"
              className="text-blue-500 underline"
            >
              Data Collection and Analysis
            </a>
          </div>

          <div className="flex gap-2 items-center">
            <img src={githubLogo} alt="GitHub Logo" className="w-4" />
            <a
              href="https://github.com/kenBinary/olj-insights-website"
              className="text-blue-500 underline"
            >
              Website Code
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
