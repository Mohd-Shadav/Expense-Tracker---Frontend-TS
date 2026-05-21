import axios from "axios";
import React, { useState } from "react";

import {
  FaLayerGroup,
  FaArrowTrendUp,
  FaArrowTrendDown,
  FaPalette,
  FaIcons,
} from "react-icons/fa6";

const AddCategory = () => {
  const [type, setType] = useState<"income" | "expense">(
    "expense"
  );

  const [formData, setFormData] = useState({
    name: "",
    type: "expense",
    color: "#22c55e",
    icon: "💰",
  });

  const icons = [
    "💰",
    "🍔",
    "✈️",
    "🛍️",
    "🎮",
    "🏠",
    "🚗",
    "📚",
    "💻",
    "❤️",
  ];

  const colors = [
    "#22c55e",
    "#ef4444",
    "#3b82f6",
    "#f97316",
    "#8b5cf6",
    "#ec4899",
    "#14b8a6",
    "#eab308",
  ];

  const handleSubmit = async (e:React.SubmitEvent<HTMLFormElement>)=>{
    e.preventDefault();
    try{
      let res = await axios.post("http://localhost:3000/category/addcategory",formData,{
        withCredentials:true,
        headers:{
          "Content-Type":"Application/json"
        }
      })

      if(res.status===200){
        alert("Category Has been Created Successfully")
        setFormData({
            name: "",
    type: "expense",
    color: "#22c55e",
    icon: "💰",
        })
      }

    }catch(err:any){
    
       alert(err.response.data.message)
    }

  }

  return (
    <div className="min-h-screen bg-[#f5f7fb] p-6 w-full">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800">
          Add Category
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          Create categories for organizing your expenses and
          income.
        </p>
      </div>

      {/* Layout */}
      <div className="grid gap-6 xl:grid-cols-3">
        {/* Form */}
        <div className="rounded-3xl bg-white p-6 shadow-sm xl:col-span-2">
          <h2 className="mb-6 text-2xl font-semibold text-slate-800">
            Category Details
          </h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Name */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-600">
                Category Name
              </label>

              <div className="relative">
                <FaLayerGroup className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                <input
                  type="text"
                  placeholder="Enter category name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: e.target.value,
                    })
                  }
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-4 pl-12 pr-4 outline-none transition-all duration-300 focus:border-green-500"
                />
              </div>
            </div>

            {/* Type */}
            <div>
              <label className="mb-3 block text-sm font-medium text-slate-600">
                Category Type
              </label>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => {
                    setType("income");

                    setFormData({
                      ...formData,
                      type: "income",
                    });
                  }}
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
                  onClick={() => {
                    setType("expense");

                    setFormData({
                      ...formData,
                      type: "expense",
                    });
                  }}
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

            {/* Color Picker */}
            <div>
              <label className="mb-3 flex items-center gap-2 text-sm font-medium text-slate-600">
                <FaPalette />
                Select Color
              </label>

              <div className="flex flex-wrap gap-4">
                {colors.map((color) => (
                  <button
                    key={color}
                    type="button"
                    onClick={() =>
                      setFormData({
                        ...formData,
                        color,
                      })
                    }
                    className={`h-12 w-12 rounded-2xl border-4 transition-all duration-300 ${
                      formData.color === color
                        ? "border-slate-800 scale-110"
                        : "border-transparent"
                    }`}
                    style={{
                      backgroundColor: color,
                    }}
                  ></button>
                ))}
              </div>
            </div>

            {/* Icon Picker */}
            <div>
              <label className="mb-3 flex items-center gap-2 text-sm font-medium text-slate-600">
                <FaIcons />
                Select Icon
              </label>

              <div className="grid grid-cols-5 gap-4">
                {icons.map((icon) => (
                  <button
                    key={icon}
                    type="button"
                    onClick={() =>
                      setFormData({
                        ...formData,
                        icon,
                      })
                    }
                    className={`flex h-16 items-center justify-center rounded-2xl border text-2xl transition-all duration-300 ${
                      formData.icon === icon
                        ? "border-green-500 bg-green-50"
                        : "border-slate-200 bg-slate-50 hover:bg-slate-100"
                    }`}
                  >
                    {icon}
                  </button>
                ))}
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

        {/* Preview */}
        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="mb-6 text-2xl font-semibold text-slate-800">
            Live Preview
          </h2>

          <div
            className="rounded-3xl p-6 text-white shadow-lg"
            style={{
              background: `linear-gradient(135deg, ${formData.color}, ${formData.color}dd)`,
            }}
          >
            <div className="mb-8 flex items-center justify-between">
              <div>
                <p className="text-sm opacity-80">
                  {formData.type}
                </p>

                <h1 className="mt-2 text-3xl font-bold">
                  {formData.name || "Category"}
                </h1>
              </div>

              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white/20 text-4xl backdrop-blur-sm">
                {formData.icon}
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
                <span className="opacity-80">Created</span>

                <span>Today</span>
              </div>
            </div>
          </div>

          {/* Preview Info */}
          <div className="mt-6 rounded-3xl bg-slate-50 p-5">
            <h3 className="mb-3 font-semibold text-slate-700">
              Category Info
            </h3>

            <ul className="space-y-2 text-sm text-slate-500">
              <li>• Use meaningful category names</li>
              <li>• Choose visually distinct colors</li>
              <li>• Icons improve readability</li>
              <li>• Separate income & expense types</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;