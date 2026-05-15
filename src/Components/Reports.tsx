import {
  FaArrowTrendUp,
  FaArrowTrendDown,
  FaWallet,
  FaDownload,
  FaCalendarDays,
} from "react-icons/fa6";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  CartesianGrid,
  Legend,
} from "recharts";

const monthlyData = [
  { name: "Jan", income: 5000, expense: 2400 },
  { name: "Feb", income: 6200, expense: 3100 },
  { name: "Mar", income: 7000, expense: 4000 },
  { name: "Apr", income: 8500, expense: 5200 },
  { name: "May", income: 9200, expense: 4800 },
  { name: "Jun", income: 11000, expense: 6500 },
];

const categoryData = [
  { name: "Food", value: 35 },
  { name: "Travel", value: 20 },
  { name: "Shopping", value: 25 },
  { name: "Bills", value: 20 },
];

const trendData = [
  { day: "Mon", balance: 4000 },
  { day: "Tue", balance: 5200 },
  { day: "Wed", balance: 6100 },
  { day: "Thu", balance: 5400 },
  { day: "Fri", balance: 7000 },
  { day: "Sat", balance: 8500 },
  { day: "Sun", balance: 9300 },
];

const COLORS = ["#22c55e", "#3b82f6", "#f97316", "#ef4444"];

const Reports = () => {
  return (
    <div className="min-h-screen bg-[#f5f7fb] p-6 w-full">
      {/* Header */}
      <div className="mb-8 flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            Financial Reports
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Analyze your income, expenses and downloadable reports.
          </p>
        </div>

        {/* Filters + Download */}
        <div className="flex flex-col gap-4 sm:flex-row">
          {/* Time Filter */}
          <div className="relative">
            <FaCalendarDays className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

            <select className="rounded-2xl border border-slate-200 bg-white py-3 pl-12 pr-6 text-sm font-medium text-slate-700 shadow-sm outline-none transition-all duration-300 focus:border-green-500">
              <option>This Week</option>
              <option>This Month</option>
              <option>Last 3 Months</option>
              <option>Last 6 Months</option>
              <option>This Year</option>
              <option>Custom Range</option>
            </select>
          </div>

          {/* Download */}
          <button className="flex items-center justify-center gap-2 rounded-2xl bg-green-500 px-6 py-3 font-semibold text-white shadow-sm transition-all duration-300 hover:bg-green-600">
            <FaDownload />
            Download Report
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="mb-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-3xl bg-green-100 p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <div className="rounded-2xl bg-green-500 p-4 text-white">
              <FaArrowTrendUp size={20} />
            </div>

            <span className="text-sm font-semibold text-green-700">
              +18%
            </span>
          </div>

          <p className="text-sm text-green-700">Total Income</p>

          <h1 className="mt-2 text-3xl font-bold text-slate-800">
            ₹1,25,000
          </h1>
        </div>

        <div className="rounded-3xl bg-red-100 p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <div className="rounded-2xl bg-red-500 p-4 text-white">
              <FaArrowTrendDown size={20} />
            </div>

            <span className="text-sm font-semibold text-red-700">
              +6%
            </span>
          </div>

          <p className="text-sm text-red-700">Total Expense</p>

          <h1 className="mt-2 text-3xl font-bold text-slate-800">
            ₹68,000
          </h1>
        </div>

        <div className="rounded-3xl bg-blue-100 p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <div className="rounded-2xl bg-blue-500 p-4 text-white">
              <FaWallet size={20} />
            </div>

            <span className="text-sm font-semibold text-blue-700">
              +12%
            </span>
          </div>

          <p className="text-sm text-blue-700">Net Balance</p>

          <h1 className="mt-2 text-3xl font-bold text-slate-800">
            ₹57,000
          </h1>
        </div>

        <div className="rounded-3xl bg-orange-100 p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <div className="rounded-2xl bg-orange-500 p-4 text-white">
              <FaDownload size={20} />
            </div>

            <span className="text-sm font-semibold text-orange-700">
              12 Reports
            </span>
          </div>

          <p className="text-sm text-orange-700">
            Reports Generated
          </p>

          <h1 className="mt-2 text-3xl font-bold text-slate-800">
            148
          </h1>
        </div>
      </div>

      {/* Charts */}
      <div className="grid gap-6 xl:grid-cols-2">
        {/* Income Expense Chart */}
        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-slate-800">
              Income vs Expense
            </h2>

            <button className="rounded-xl bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600 transition-all duration-300 hover:bg-slate-200">
              Monthly
            </button>
          </div>

          <div className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />

                <Bar
                  dataKey="income"
                  fill="#22c55e"
                  radius={[10, 10, 0, 0]}
                />

                <Bar
                  dataKey="expense"
                  fill="#ef4444"
                  radius={[10, 10, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Expense Categories */}
        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-slate-800">
              Expense Categories
            </h2>

            <button className="rounded-xl bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600 transition-all duration-300 hover:bg-slate-200">
              Details
            </button>
          </div>

          <div className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryData}
                  dataKey="value"
                  innerRadius={80}
                  outerRadius={120}
                >
                  {categoryData.map((_, index) => (
                    <Cell
                      key={index}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>

                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Trend Chart */}
      <div className="mt-6 rounded-3xl bg-white p-6 shadow-sm">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-slate-800">
              Financial Trend
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Weekly balance and financial performance overview.
            </p>
          </div>

          <div className="flex gap-3">
            <button className="rounded-xl bg-green-500 px-4 py-2 text-sm font-medium text-white">
              Weekly
            </button>

            <button className="rounded-xl bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600">
              Monthly
            </button>

            <button className="rounded-xl bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600">
              Yearly
            </button>
          </div>
        </div>

        <div className="h-[380px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={trendData}>
              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="day" />
              <YAxis />

              <Tooltip />
              <Legend />

              <Line
                type="monotone"
                dataKey="balance"
                stroke="#22c55e"
                strokeWidth={4}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Downloadable Reports Table */}
      <div className="mt-6 rounded-3xl bg-white p-6 shadow-sm">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-slate-800">
              Download Reports
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Export reports for different time periods.
            </p>
          </div>

          <button className="rounded-2xl bg-slate-900 px-5 py-3 font-medium text-white transition-all duration-300 hover:bg-slate-800">
            Generate New Report
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px]">
            <thead>
              <tr className="border-b border-slate-100 text-left text-sm text-slate-500">
                <th className="pb-5">Report Type</th>
                <th className="pb-5">Date Range</th>
                <th className="pb-5">Status</th>
                <th className="pb-5">Format</th>
                <th className="pb-5">Action</th>
              </tr>
            </thead>

            <tbody>
              {[
                "Monthly Report",
                "Weekly Report",
                "3 Months Report",
                "6 Months Report",
              ].map((report, index) => (
                <tr
                  key={index}
                  className="border-b border-slate-50"
                >
                  <td className="py-5 font-semibold text-slate-700">
                    {report}
                  </td>

                  <td className="text-slate-500">
                    01 Jan 2026 - 31 Jan 2026
                  </td>

                  <td>
                    <span className="rounded-full bg-green-100 px-4 py-2 text-xs font-semibold text-green-600">
                      Ready
                    </span>
                  </td>

                  <td className="text-slate-500">PDF</td>

                  <td>
                    <button className="flex items-center gap-2 rounded-xl bg-green-500 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-green-600">
                      <FaDownload />
                      Download
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Reports;