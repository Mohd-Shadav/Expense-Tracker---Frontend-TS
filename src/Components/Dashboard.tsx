

import {
  FaArrowTrendUp,
  FaArrowTrendDown,
  FaWallet,
  FaMoneyBills,
  FaBell,
  FaPen,
  FaTrash,
} from "react-icons/fa6";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

interface Transaction {
  id: number;
  title: string;
  category: string;
  type: "income" | "expense";
  amount: number;
  date: string;
}

const transactions: Transaction[] = [
  {
    id: 1,
    title: "Salary",
    category: "Job",
    type: "income",
    amount: 5000,
    date: "12 May 2026",
  },
  {
    id: 2,
    title: "Shopping",
    category: "Lifestyle",
    type: "expense",
    amount: 1200,
    date: "13 May 2026",
  },
  {
    id: 3,
    title: "Freelance",
    category: "Work",
    type: "income",
    amount: 2500,
    date: "14 May 2026",
  },
  {
    id: 4,
    title: "Food",
    category: "Food",
    type: "expense",
    amount: 800,
    date: "14 May 2026",
  },
];

const financeData = [
  { name: "Income", value: 7500 },
  { name: "Expense", value: 2000 },
];

const categoryData = [
  { name: "Food", value: 35 },
  { name: "Shopping", value: 40 },
  { name: "Travel", value: 25 },
];

const COLORS = ["#22c55e", "#ef4444", "#3b82f6"];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#f5f7fb] p-6 w-full">
      {/* Topbar */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Dashboard</h1>
          <p className="mt-1 text-sm text-slate-500">
            Welcome back, manage your finances smartly.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <button className="rounded-full bg-white p-3 shadow-sm transition-all duration-300 hover:scale-105">
            <FaBell className="text-slate-600" />
          </button>

          <img
            src="https://i.pravatar.cc/100"
            alt="profile"
            className="h-12 w-12 rounded-full object-cover shadow-md"
          />
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-3xl bg-green-100 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
          <div className="mb-4 flex items-center justify-between">
            <div className="rounded-2xl bg-green-500 p-4 text-white">
              <FaArrowTrendUp size={22} />
            </div>

            <span className="text-sm font-medium text-green-700">
              +12.5%
            </span>
          </div>

          <h3 className="text-slate-500">Total Income</h3>

          <h1 className="mt-2 text-3xl font-bold text-slate-800">
            ₹75,000
          </h1>
        </div>

        <div className="rounded-3xl bg-red-100 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
          <div className="mb-4 flex items-center justify-between">
            <div className="rounded-2xl bg-red-500 p-4 text-white">
              <FaArrowTrendDown size={22} />
            </div>

            <span className="text-sm font-medium text-red-700">+4.2%</span>
          </div>

          <h3 className="text-slate-500">Total Expense</h3>

          <h1 className="mt-2 text-3xl font-bold text-slate-800">
            ₹20,000
          </h1>
        </div>

        <div className="rounded-3xl bg-blue-100 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
          <div className="mb-4 flex items-center justify-between">
            <div className="rounded-2xl bg-blue-500 p-4 text-white">
              <FaWallet size={22} />
            </div>

            <span className="text-sm font-medium text-blue-700">
              +8.1%
            </span>
          </div>

          <h3 className="text-slate-500">Total Balance</h3>

          <h1 className="mt-2 text-3xl font-bold text-slate-800">
            ₹55,000
          </h1>
        </div>

        <div className="rounded-3xl bg-orange-100 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
          <div className="mb-4 flex items-center justify-between">
            <div className="rounded-2xl bg-orange-500 p-4 text-white">
              <FaMoneyBills size={22} />
            </div>

            <span className="text-sm font-medium text-orange-700">
              +10%
            </span>
          </div>

          <h3 className="text-slate-500">Transactions</h3>

          <h1 className="mt-2 text-3xl font-bold text-slate-800">128</h1>
        </div>
      </div>

      {/* Middle Section */}
      <div className="mt-8 grid gap-6 xl:grid-cols-3">
        {/* Add Transaction */}
    

        {/* Recent Transactions */}
        <div className="rounded-3xl bg-white p-6 shadow-sm xl:col-span-3">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-slate-800">
              Recent Transactions
            </h2>

            <button className="text-sm font-medium text-green-600">
              View All
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px]">
              <thead>
                <tr className="border-b border-slate-100 text-left text-sm text-slate-500">
                  <th className="pb-4">Title</th>
                  <th className="pb-4">Category</th>
                  <th className="pb-4">Type</th>
                  <th className="pb-4">Amount</th>
                  <th className="pb-4">Date</th>
                  <th className="pb-4">Action</th>
                </tr>
              </thead>

              <tbody>
                {transactions.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b border-slate-50 transition-all hover:bg-slate-50"
                  >
                    <td className="py-5 font-medium text-slate-700">
                      {item.title}
                    </td>

                    <td className="text-slate-500">{item.category}</td>

                    <td>
                      <span
                        className={`rounded-full px-4 py-1 text-xs font-semibold ${
                          item.type === "income"
                            ? "bg-green-100 text-green-600"
                            : "bg-red-100 text-red-600"
                        }`}
                      >
                        {item.type}
                      </span>
                    </td>

                    <td
                      className={`font-semibold ${
                        item.type === "income"
                          ? "text-green-600"
                          : "text-red-500"
                      }`}
                    >
                      {item.type === "income" ? "+" : "-"}₹{item.amount}
                    </td>

                    <td className="text-slate-500">{item.date}</td>

                    <td>
                      <div className="flex items-center gap-3">
                        <button className="rounded-full bg-slate-100 p-2 transition-all hover:bg-slate-200">
                          <FaPen size={12} />
                        </button>

                        <button className="rounded-full bg-red-100 p-2 text-red-500 transition-all hover:bg-red-200">
                          <FaTrash size={12} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {/* Income vs Expense */}
        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="mb-6 text-xl font-semibold text-slate-800">
            Income vs Expense
          </h2>

          <div className="h-[320px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={financeData}
                  innerRadius={80}
                  outerRadius={110}
                  dataKey="value"
                >
                  {financeData.map((_, index) => (
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

        {/* Expense Categories */}
        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="mb-6 text-xl font-semibold text-slate-800">
            Expense Categories
          </h2>

          <div className="h-[320px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryData}
                  innerRadius={70}
                  outerRadius={110}
                  dataKey="value"
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
    </div>
  );
};

export default Dashboard;