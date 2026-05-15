import { useState } from "react";

import {
  FaLayerGroup,
  FaArrowTrendUp,
  FaArrowTrendDown,
  FaFileLines,
  FaIcons,
} from "react-icons/fa6";

const AddCategory = () => {
  const [type, setType] = useState<"income" | "expense">("expense");

  return (
    <div className="min-h-screen bg-[#f5f7fb] p-6 w-full">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800">
          Add Category
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          Create and organize categories for better expense tracking.
        </p>
      </div>

      {/* Main Layout */}
      <div className="grid gap-6 xl:grid-cols-3">
        {/* Form */}
        <div className="rounded-3xl bg-white p-6 shadow-sm xl:col-span-2">
          <h2 className="mb-6 text-2xl font-semibold text-slate-800">
            Category Details
          </h2>

          <form className="space-y-5">
            {/* Category Name */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-600">
                Category Name
              </label>

              <div className="relative">
                <FaLayerGroup className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                <input
                  type="text"
                  placeholder="Enter category name"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-4 pl-12 pr-4 outline-none transition-all duration-300 focus:border-green-500"
                />
              </div>
            </div>

            {/* Category Type */}
            <div>
              <label className="mb-3 block text-sm font-medium text-slate-600">
                Category Type
              </label>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setType("income")}
                  className={`flex flex-1 items-center justify-center gap-2 rounded-2xl py-4 font-semibold transition-all duration-300 ${
                    type === "income"
                      ? "bg-green-500 text-white"
                      : "bg-slate-100 text-slate-600"
                  }`}
                >
                  <FaArrowTrendUp />
                  Income
                </button>

                <button
                  type="button"
                  onClick={() => setType("expense")}
                  className={`flex flex-1 items-center justify-center gap-2 rounded-2xl py-4 font-semibold transition-all duration-300 ${
                    type === "expense"
                      ? "bg-red-500 text-white"
                      : "bg-slate-100 text-slate-600"
                  }`}
                >
                  <FaArrowTrendDown />
                  Expense
                </button>
              </div>
            </div>

            {/* Icon */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-600">
                Select Icon
              </label>

              <div className="relative">
                <FaIcons className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                <select className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-4 pl-12 pr-4 outline-none transition-all duration-300 focus:border-green-500">
                  <option>Select Icon</option>
                  <option>Food</option>
                  <option>Travel</option>
                  <option>Shopping</option>
                  <option>Salary</option>
                  <option>Freelance</option>
                </select>
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-600">
                Description
              </label>

              <div className="relative">
                <FaFileLines className="absolute left-4 top-5 text-slate-400" />

                <textarea
                  rows={5}
                  placeholder="Write category description..."
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-4 pl-12 pr-4 outline-none transition-all duration-300 focus:border-green-500"
                ></textarea>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-4 pt-4 sm:flex-row">
              <button
                type="submit"
                className={`flex-1 rounded-2xl py-4 font-semibold text-white shadow-sm transition-all duration-300 ${
                  type === "income"
                    ? "bg-green-500 hover:bg-green-600"
                    : "bg-red-500 hover:bg-red-600"
                }`}
              >
                Add Category
              </button>

              <button
                type="reset"
                className="flex-1 rounded-2xl bg-slate-100 py-4 font-semibold text-slate-700 transition-all duration-300 hover:bg-slate-200"
              >
                Reset
              </button>
            </div>
          </form>
        </div>

        {/* Preview Card */}
        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="mb-6 text-2xl font-semibold text-slate-800">
            Live Preview
          </h2>

          <div
            className={`rounded-3xl p-6 text-white shadow-lg transition-all duration-300 ${
              type === "income"
                ? "bg-gradient-to-br from-green-500 to-emerald-600"
                : "bg-gradient-to-br from-red-500 to-rose-600"
            }`}
          >
            <div className="mb-8 flex items-center justify-between">
              <div>
                <p className="text-sm opacity-80">
                  {type === "income"
                    ? "Income Category"
                    : "Expense Category"}
                </p>

                <h1 className="mt-2 text-3xl font-bold">
                  New Category
                </h1>
              </div>

              <div className="rounded-2xl bg-white/20 p-4 backdrop-blur-sm">
                {type === "income" ? (
                  <FaArrowTrendUp size={24} />
                ) : (
                  <FaArrowTrendDown size={24} />
                )}
              </div>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between">
                <span className="opacity-80">Status</span>

                <span className="rounded-full bg-white/20 px-3 py-1 text-xs">
                  Active
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="opacity-80">Transactions</span>

                <span>0 Records</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="opacity-80">Visibility</span>

                <span>Public</span>
              </div>
            </div>
          </div>

          {/* Info Box */}
          <div className="mt-6 rounded-3xl bg-slate-50 p-5">
            <h3 className="mb-3 font-semibold text-slate-700">
              Category Tips
            </h3>

            <ul className="space-y-2 text-sm text-slate-500">
              <li>• Keep category names simple</li>
              <li>• Use clear descriptions</li>
              <li>• Separate income & expenses</li>
              <li>• Avoid duplicate categories</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;