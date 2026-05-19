import { Link } from "react-router-dom";

import {
  FaEnvelope,
  FaLock,
  FaWallet,
  FaArrowRight,
  FaUser,
} from "react-icons/fa6";

const Signup = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f5f7fb] p-6">
      <div className="grid w-full max-w-6xl overflow-hidden rounded-[35px] bg-white shadow-xl lg:grid-cols-2">
        {/* Left Side */}
        <div className="hidden bg-gradient-to-br from-green-500 to-emerald-600 p-12 text-white lg:flex lg:flex-col lg:justify-between">
          <div>
            <div className="flex items-center gap-4">
              <div className="rounded-2xl bg-white/20 p-4 backdrop-blur-sm">
                <FaWallet size={28} />
              </div>

              <div>
                <h1 className="text-3xl font-bold">
                  ExpenseFlow
                </h1>

                <p className="text-sm text-white/80">
                  Smart Finance Tracker
                </p>
              </div>
            </div>

            <div className="mt-20">
              <h2 className="text-5xl font-bold leading-tight">
                Start Your <br /> Financial Journey.
              </h2>

              <p className="mt-6 max-w-md text-lg leading-8 text-white/80">
                Create your account and track every expense
                with beautiful analytics and reports.
              </p>
            </div>
          </div>

          <div className="rounded-3xl bg-white/10 p-6 backdrop-blur-md">
            <p className="leading-7 text-white/90">
              “Small savings today create a stronger tomorrow.”
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="p-8 sm:p-12 lg:p-16">
          <div className="mx-auto max-w-md">
            <div>
              <h1 className="text-4xl font-bold text-slate-800">
                Create Account
              </h1>

              <p className="mt-3 text-slate-500">
                Join and manage your finances professionally.
              </p>
            </div>

            {/* Form */}
            <form className="mt-10 space-y-5">
              {/* Name */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-600">
                  Full Name
                </label>

                <div className="relative">
                  <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                  <input
                    type="text"
                    placeholder="Enter full name"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-4 pl-12 pr-4 outline-none transition-all duration-300 focus:border-green-500"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-600">
                  Email Address
                </label>

                <div className="relative">
                  <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                  <input
                    type="email"
                    placeholder="Enter email"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-4 pl-12 pr-4 outline-none transition-all duration-300 focus:border-green-500"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-600">
                  Password
                </label>

                <div className="relative">
                  <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                  <input
                    type="password"
                    placeholder="Create password"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-4 pl-12 pr-4 outline-none transition-all duration-300 focus:border-green-500"
                  />
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-600">
                  Confirm Password
                </label>

                <div className="relative">
                  <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                  <input
                    type="password"
                    placeholder="Confirm password"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-4 pl-12 pr-4 outline-none transition-all duration-300 focus:border-green-500"
                  />
                </div>
              </div>

              {/* Signup Button */}
              <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-green-500 py-4 font-semibold text-white transition-all duration-300 hover:bg-green-600">
                Create Account
                <FaArrowRight />
              </button>
            </form>

            {/* Footer */}
            <p className="mt-8 text-center text-sm text-slate-500">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-semibold text-green-600"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;