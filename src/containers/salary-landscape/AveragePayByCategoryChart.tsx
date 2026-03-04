import { ChartHeader } from "../../components/ChartHeader";

export function AveragePayByCategoryChart() {
  return (
    <div className="lg:p-5 p-3 border flex-1">
      <ChartHeader
        overLine="Rankings"
        title="Average Pay by Category"
        description="Top-paying job categories"
      />

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Category</th>
              <th>Pay</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-base-300">
              <th>01</th>
              <td>Legal & Compliance</td>
              <td>$963</td>
            </tr>
            <tr className="hover:bg-base-300">
              <th>02</th>
              <td>Engineering & Architecture</td>
              <td>$963</td>
            </tr>
            <tr className="hover:bg-base-300">
              <th>03</th>
              <td>Technology & Development</td>
              <td>$929</td>
            </tr>
            <tr className="hover:bg-base-300">
              <th>04</th>
              <td>Human Resources & Recruiting</td>
              <td>$916</td>
            </tr>
            <tr className="hover:bg-base-300">
              <th>05</th>
              <td>Finance & Accounting</td>
              <td>$897</td>
            </tr>
            <tr className="hover:bg-base-300">
              <th>06</th>
              <td>Marketing & Advertising</td>
              <td>$824</td>
            </tr>
            <tr className="hover:bg-base-300">
              <th>07</th>
              <td>Sales & Business Development</td>
              <td>$814</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
