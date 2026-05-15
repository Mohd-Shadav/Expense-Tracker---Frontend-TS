import { useState } from "react";

import {
  FaUtensils,
  FaPlane,
  FaBagShopping,
  FaLaptop,
  FaMoneyBillTrendUp,
  FaPen,
  FaTrash,
  FaPlus,
} from "react-icons/fa6";

interface Category {
  id: number;
  name: string;
  type: "income" | "expense";
  description: string;
  icon: JSX.Element;
}

const initialCategories: Category[] = [
  {
    id: 1,
    name: "Food",
    type: "expense",
    description: "Daily meals and restaurants",
    icon: <FaUtensils />,
  },
  {
    id: 2,
    name: "Travel",
    type: "expense",
    description: "Trips and transportation",
    icon: <FaPlane />,
  },
  {
    id: 3,
    name: "Shopping",
    type: "expense",
    description: "Clothing and accessories",
    icon: <FaBagShopping />,
  },
  {
    id: 4,
    name: "Freelance",
    type: "income",
    description: "Project based income",
    icon: <FaLaptop />,
  },
  {
    id: 5,
    name: "Salary",
    type: "income",
    description: "Monthly salary income",
    icon: <FaMoneyBillTrendUp />,
  },
];

const Categories = () => {
  const [categories] = useState<Category[]>(initialCategories);

  return (
    <div className="min-h-screen bg-[#f5f7fb] p-6 w-full">
      {/* Header */}
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            Categories
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Organize your income and expense categories efficiently.
          </p>
        </div>

        <button className="flex items-center gap-2 rounded-2xl bg-green-500 px-5 py-3 font-semibold text-white shadow-sm transition-all duration-300 hover:bg-green-600">
          <FaPlus />
          Add Category
        </button>
      </div>

      {/* Category Stats */}
      <div className="mb-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">Total Categories</p>

          <h1 className="mt-2 text-3xl font-bold text-slate-800">
            12
          </h1>
        </div>

        <div className="rounded-3xl bg-green-100 p-6 shadow-sm">
          <p className="text-sm text-green-700">Income Categories</p>

          <h1 className="mt-2 text-3xl font-bold text-green-700">
            4
          </h1>
        </div>

        <div className="rounded-3xl bg-red-100 p-6 shadow-sm">
          <p className="text-sm text-red-700">Expense Categories</p>

          <h1 className="mt-2 text-3xl font-bold text-red-700">
            8
          </h1>
        </div>

        <div className="rounded-3xl bg-blue-100 p-6 shadow-sm">
          <p className="text-sm text-blue-700">Most Used</p>

          <h1 className="mt-2 text-3xl font-bold text-blue-700">
            Food
          </h1>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {categories.map((category) => (
          <div
            key={category.id}
            className="group rounded-3xl bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            {/* Top Section */}
            <div className="mb-5 flex items-start justify-between">
              <div
                className={`rounded-2xl p-4 text-xl text-white ${
                  category.type === "income"
                    ? "bg-green-500"
                    : "bg-red-500"
                }`}
              >
                {category.icon}
              </div>

              <span
                className={`rounded-full px-4 py-2 text-xs font-semibold ${
                  category.type === "income"
                    ? "bg-green-100 text-green-600"
                    : "bg-red-100 text-red-500"
                }`}
              >
                {category.type}
              </span>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-xl font-semibold text-slate-800">
                {category.name}
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                {category.description}
              </p>
            </div>

            {/* Footer */}
            <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
              <div>
                <p className="text-sm text-slate-400">
                  Transactions
                </p>

                <h3 className="font-semibold text-slate-700">
                  24 Records
                </h3>
              </div>

              <div className="flex items-center gap-3">
                <button className="rounded-xl bg-slate-100 p-3 text-slate-600 transition-all duration-300 hover:bg-slate-200">
                  <FaPen size={14} />
                </button>

                <button className="rounded-xl bg-red-100 p-3 text-red-500 transition-all duration-300 hover:bg-red-200">
                  <FaTrash size={14} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="mt-8 rounded-3xl bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-slate-800">
              Manage Categories
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Edit, delete or create new categories for better tracking.
            </p>
          </div>

          <button className="rounded-2xl bg-slate-900 px-6 py-3 font-medium text-white transition-all duration-300 hover:bg-slate-800">
            View All Analytics
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;