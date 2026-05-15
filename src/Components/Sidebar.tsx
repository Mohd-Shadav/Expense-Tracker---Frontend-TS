import { NavLink } from "react-router-dom";

import {
  FaChartPie,
  FaMoneyBillTransfer,
  FaPlus,
  FaLayerGroup,
  FaChartLine,
  FaGear,
  FaWallet,
  FaArrowRightFromBracket,
} from "react-icons/fa6";

const Sidebar = () => {
  const navItems = [
    {
      title: "Dashboard",
      path: "/",
      icon: <FaChartPie />,
    },
    {
      title: "Transactions",
      path: "/transactions",
      icon: <FaMoneyBillTransfer />,
    },
    {
      title: "Add Transaction",
      path: "/add-transaction",
      icon: <FaPlus />,
    },
    {
      title: "Categories",
      path: "/categories",
      icon: <FaLayerGroup />,
    },
    {
      title: "Reports",
      path: "/reports",
      icon: <FaChartLine />,
    },
    {
      title: "Settings",
      path: "/settings",
      icon: <FaGear />,
    },
  ];

  return (
    <div className="sticky top-0 flex h-screen w-[290px] flex-col justify-between border-r border-slate-200 bg-white p-6 shadow-sm">
      {/* Logo */}
      <div>
        <div className="mb-10 flex items-center gap-4">
          <div className="rounded-2xl bg-green-500 p-4 text-white shadow-md">
            <FaWallet size={22} />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-slate-800">
              ExpenseFlow
            </h1>

            <p className="text-sm text-slate-400">
              Finance Tracker
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="space-y-3">
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `group flex items-center gap-4 rounded-2xl px-5 py-4 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-green-500 text-white shadow-md"
                    : "text-slate-600 hover:bg-slate-100"
                }`
              }
            >
              <span className="text-lg">{item.icon}</span>

              <span>{item.title}</span>
            </NavLink>
          ))}
        </nav>

        {/* Premium Card */}
        {/* <div className="mt-10 rounded-3xl bg-gradient-to-br from-green-500 to-emerald-600 p-6 text-white shadow-lg">
          <h2 className="text-xl font-semibold">
            Premium Features
          </h2>

          <p className="mt-2 text-sm leading-6 text-white/80">
            Unlock advanced reports, cloud sync and unlimited
            transactions.
          </p>

          <button className="mt-5 w-full rounded-2xl bg-white py-3 font-semibold text-green-600 transition-all duration-300 hover:bg-slate-100">
            Upgrade Plan
          </button>
        </div> */}
      </div>

      {/* Bottom User Section */}
      <div>
        <div className="mb-5 flex items-center gap-4 rounded-2xl bg-slate-50 p-4">
          <img
            src="https://i.pravatar.cc/100"
            alt="profile"
            className="h-14 w-14 rounded-full object-cover"
          />

          <div>
            <h3 className="font-semibold text-slate-800">
              Mohd Shadav
            </h3>

            <p className="text-sm text-slate-500">
              Premium User
            </p>
          </div>
        </div>

        {/* Logout */}
        <button className="flex w-full items-center justify-center gap-3 rounded-2xl bg-red-500 py-4 font-semibold text-white transition-all duration-300 hover:bg-red-600">
          <FaArrowRightFromBracket />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;