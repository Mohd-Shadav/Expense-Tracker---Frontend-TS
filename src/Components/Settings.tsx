import { useState } from "react";

import {
  FaUser,
  FaLock,
  FaBell,
  FaPalette,
  FaGlobe,
  FaMoon,
  FaSun,
  FaDownload,
  FaTrash,
  FaShieldHalved,
} from "react-icons/fa6";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="min-h-screen bg-[#f5f7fb] p-6 w-full">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800">
          Settings
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          Manage your account preferences and application settings.
        </p>
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        {/* Left Settings Sections */}
        <div className="space-y-6 xl:col-span-2">
          {/* Profile Settings */}
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-2xl bg-green-100 p-4 text-green-600">
                <FaUser size={20} />
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-800">
                  Profile Settings
                </h2>

                <p className="text-sm text-slate-500">
                  Update your personal information.
                </p>
              </div>
            </div>

            <form className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-600">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter full name"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 outline-none transition-all duration-300 focus:border-green-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-600">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter email"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 outline-none transition-all duration-300 focus:border-green-500"
                />
              </div>

              <div className="md:col-span-2">
                <button className="rounded-2xl bg-green-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-green-600">
                  Save Changes
                </button>
              </div>
            </form>
          </div>

          {/* Security */}
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-2xl bg-red-100 p-4 text-red-500">
                <FaLock size={20} />
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-800">
                  Security
                </h2>

                <p className="text-sm text-slate-500">
                  Update password and secure your account.
                </p>
              </div>
            </div>

            <form className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-600">
                  Current Password
                </label>

                <input
                  type="password"
                  placeholder="Enter current password"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 outline-none transition-all duration-300 focus:border-red-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-600">
                  New Password
                </label>

                <input
                  type="password"
                  placeholder="Enter new password"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 outline-none transition-all duration-300 focus:border-red-500"
                />
              </div>

              <button className="rounded-2xl bg-red-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-red-600">
                Update Password
              </button>
            </form>
          </div>

          {/* Notifications */}
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-2xl bg-blue-100 p-4 text-blue-500">
                <FaBell size={20} />
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-800">
                  Notifications
                </h2>

                <p className="text-sm text-slate-500">
                  Manage notification preferences.
                </p>
              </div>
            </div>

            <div className="space-y-5">
              {[
                "Email Notifications",
                "Expense Alerts",
                "Monthly Reports",
                "Security Updates",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-2xl bg-slate-50 px-5 py-4"
                >
                  <p className="font-medium text-slate-700">{item}</p>

                  <label className="relative inline-flex cursor-pointer items-center">
                    <input
                      type="checkbox"
                      className="peer sr-only"
                      defaultChecked
                    />

                    <div className="peer h-6 w-11 rounded-full bg-slate-300 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all peer-checked:bg-green-500 peer-checked:after:translate-x-full"></div>
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Appearance */}
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-2xl bg-purple-100 p-4 text-purple-500">
                <FaPalette size={20} />
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-800">
                  Appearance
                </h2>

                <p className="text-sm text-slate-500">
                  Customize application theme.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {/* Dark Mode */}
              <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-5 py-4">
                <div className="flex items-center gap-3">
                  {darkMode ? (
                    <FaMoon className="text-slate-700" />
                  ) : (
                    <FaSun className="text-yellow-500" />
                  )}

                  <span className="font-medium text-slate-700">
                    Dark Mode
                  </span>
                </div>

                <label className="relative inline-flex cursor-pointer items-center">
                  <input
                    type="checkbox"
                    className="peer sr-only"
                    checked={darkMode}
                    onChange={() => setDarkMode(!darkMode)}
                  />

                  <div className="peer h-6 w-11 rounded-full bg-slate-300 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all peer-checked:bg-green-500 peer-checked:after:translate-x-full"></div>
                </label>
              </div>

              {/* Language */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-600">
                  Language
                </label>

                <div className="relative">
                  <FaGlobe className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                  <select className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-4 pl-12 pr-4 outline-none transition-all duration-300 focus:border-green-500">
                    <option>English</option>
                    <option>Hindi</option>
                    <option>Urdu</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Backup & Export */}
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-2xl bg-orange-100 p-4 text-orange-500">
                <FaDownload size={20} />
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-800">
                  Backup & Export
                </h2>

                <p className="text-sm text-slate-500">
                  Download or backup your data.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <button className="w-full rounded-2xl bg-green-500 py-4 font-semibold text-white transition-all duration-300 hover:bg-green-600">
                Export Reports
              </button>

              <button className="w-full rounded-2xl bg-slate-100 py-4 font-semibold text-slate-700 transition-all duration-300 hover:bg-slate-200">
                Backup Data
              </button>
            </div>
          </div>

          {/* Privacy */}
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-2xl bg-indigo-100 p-4 text-indigo-500">
                <FaShieldHalved size={20} />
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-800">
                  Privacy
                </h2>

                <p className="text-sm text-slate-500">
                  Manage account privacy settings.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <button className="w-full rounded-2xl bg-slate-100 py-4 font-semibold text-slate-700 transition-all duration-300 hover:bg-slate-200">
                Manage Permissions
              </button>

              <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-red-500 py-4 font-semibold text-white transition-all duration-300 hover:bg-red-600">
                <FaTrash />
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;