// import React from 'react'

// function Transaction() {
//   return (
//         <div className="rounded-3xl bg-white p-6 shadow-sm xl:col-span-1">
//           <h2 className="mb-6 text-xl font-semibold text-slate-800">
//             Add New Transaction
//           </h2>

//           <form className="space-y-4">
//             <input
//               type="text"
//               placeholder="Transaction Title"
//               className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition-all focus:border-green-500"
//             />

//             <input
//               type="number"
//               placeholder="Amount"
//               className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition-all focus:border-green-500"
//             />

//             <select className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition-all focus:border-green-500">
//               <option>Select Type</option>
//               <option>Income</option>
//               <option>Expense</option>
//             </select>

//             <input
//               type="date"
//               className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition-all focus:border-green-500"
//             />

//             <button className="w-full rounded-2xl bg-green-500 py-3 font-semibold text-white transition-all duration-300 hover:bg-green-600">
//               Add Transaction
//             </button>
//           </form>
//         </div>
//   )
// }

// export default Transaction


import { useState } from "react";

import {
  FaMagnifyingGlass,
  FaPen,
  FaTrash,
  FaFilter,
} from "react-icons/fa6";

interface Transaction {
  id: number;
  title: string;
  category: string;
  type: "income" | "expense";
  amount: number;
  date: string;
}

const transactionData: Transaction[] = [
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
    date: "15 May 2026",
  },
  {
    id: 5,
    title: "Travel",
    category: "Travel",
    type: "expense",
    amount: 1500,
    date: "16 May 2026",
  },
];

const Transactions = () => {
  const [search, setSearch] = useState("");

  const filteredTransactions = transactionData.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#f5f7fb] p-6 w-full">
      {/* Header */}
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            Transactions
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Manage and track all your financial activities.
          </p>
        </div>

        <button className="rounded-2xl bg-green-500 px-5 py-3 font-semibold text-white shadow-sm transition-all duration-300 hover:bg-green-600">
          + Add Transaction
        </button>
      </div>

      {/* Filters */}
      <div className="mb-6 rounded-3xl bg-white p-5 shadow-sm">
        <div className="grid gap-4 lg:grid-cols-4">
          {/* Search */}
          <div className="relative lg:col-span-2">
            <FaMagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

            <input
              type="text"
              placeholder="Search transactions..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3 pl-12 pr-4 outline-none transition-all focus:border-green-500"
            />
          </div>

          {/* Type Filter */}
          <select className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition-all focus:border-green-500">
            <option>All Types</option>
            <option>Income</option>
            <option>Expense</option>
          </select>

          {/* Category Filter */}
          <select className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition-all focus:border-green-500">
            <option>All Categories</option>
            <option>Food</option>
            <option>Travel</option>
            <option>Shopping</option>
            <option>Work</option>
          </select>
        </div>

        {/* Filter Button */}
        <div className="mt-4 flex justify-end">
          <button className="flex items-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-slate-800">
            <FaFilter />
            Apply Filters
          </button>
        </div>
      </div>

      {/* Transaction Table */}
      <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[850px]">
            <thead className="bg-slate-50">
              <tr className="text-left text-sm text-slate-500">
                <th className="px-6 py-5 font-medium">Title</th>
                <th className="px-6 py-5 font-medium">Category</th>
                <th className="px-6 py-5 font-medium">Type</th>
                <th className="px-6 py-5 font-medium">Amount</th>
                <th className="px-6 py-5 font-medium">Date</th>
                <th className="px-6 py-5 font-medium">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredTransactions.map((item) => (
                <tr
                  key={item.id}
                  className="border-b border-slate-100 transition-all duration-300 hover:bg-slate-50"
                >
                  <td className="px-6 py-5">
                    <div>
                      <h3 className="font-semibold text-slate-700">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-sm text-slate-400">
                        Transaction ID #{item.id}
                      </p>
                    </div>
                  </td>

                  <td className="px-6 py-5">
                    <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600">
                      {item.category}
                    </span>
                  </td>

                  <td className="px-6 py-5">
                    <span
                      className={`rounded-full px-4 py-2 text-xs font-semibold ${
                        item.type === "income"
                          ? "bg-green-100 text-green-600"
                          : "bg-red-100 text-red-500"
                      }`}
                    >
                      {item.type}
                    </span>
                  </td>

                  <td
                    className={`px-6 py-5 text-lg font-bold ${
                      item.type === "income"
                        ? "text-green-600"
                        : "text-red-500"
                    }`}
                  >
                    {item.type === "income" ? "+" : "-"}₹{item.amount}
                  </td>

                  <td className="px-6 py-5 text-slate-500">
                    {item.date}
                  </td>

                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <button className="rounded-xl bg-slate-100 p-3 text-slate-600 transition-all duration-300 hover:bg-slate-200">
                        <FaPen size={14} />
                      </button>

                      <button className="rounded-xl bg-red-100 p-3 text-red-500 transition-all duration-300 hover:bg-red-200">
                        <FaTrash size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex flex-col gap-4 border-t border-slate-100 px-6 py-5 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-slate-500">
            Showing 1 to 5 of 20 transactions
          </p>

          <div className="flex items-center gap-2">
            <button className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition-all hover:bg-slate-100">
              Previous
            </button>

            <button className="rounded-xl bg-green-500 px-4 py-2 text-sm font-medium text-white">
              1
            </button>

            <button className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition-all hover:bg-slate-100">
              2
            </button>

            <button className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition-all hover:bg-slate-100">
              3
            </button>

            <button className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition-all hover:bg-slate-100">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;