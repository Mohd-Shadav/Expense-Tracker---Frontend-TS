import { Link, useNavigate } from "react-router-dom";

import {
  FaEnvelope,
  FaLock,
  FaWallet,
  FaArrowRight,
  FaGoogle,
} from "react-icons/fa6";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Login = () => {

   
    const navigate = useNavigate();
    const [formData,setFormData] = useState({
        email:"",
        password:""
    })
       const fetchUser = async(e:any)=>{
        e.preventDefault()
         try{
                let res = await axios.post("http://localhost:3000/user/login",formData,{
            headers:{
                "content-type":"application/json"
                
            },
          withCredentials:true
         });

         if(res.status===200)
         {
          navigate("/")
          return;
         }


         
         

      
          

         }catch(error:any){

            alert(error.response.data.message)

         }
       }

       const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{


        let {name,value} = e.target;
        if(name==="email"){
            setFormData((prev)=>({
                ...prev,
                email:value
            }))
            return;
        }
     
           if(name==="password"){
            setFormData((prev)=>({
                ...prev,
               password:value
            }))
            return;
        }

       }

       

  





  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f5f7fb] p-6 w-full">
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
                Manage Your <br /> Money Smarter.
              </h2>

              <p className="mt-6 max-w-md text-lg leading-8 text-white/80">
                Track expenses, manage income and generate
                powerful financial reports easily.
              </p>
            </div>
          </div>

          <div className="rounded-3xl bg-white/10 p-6 backdrop-blur-md">
            <p className="leading-7 text-white/90">
              “Financial freedom begins when you control your
              money instead of your money controlling you.”
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="p-8 sm:p-12 lg:p-16">
          <div className="mx-auto max-w-md">
            <div>
              <h1 className="text-4xl font-bold text-slate-800">
                Welcome Back
              </h1>

              <p className="mt-3 text-slate-500">
                Login to continue managing your finances.
              </p>
            </div>

            {/* Form */}
            <form className="mt-10 space-y-5" onSubmit={fetchUser}>
              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-600">
                  Email Address
                </label>

                <div className="relative">
                  <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                  <input
                    type="email"
                    name="email"
                      autoComplete="email"
                    value={formData.email}
                    placeholder="Enter your email"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-4 pl-12 pr-4 outline-none transition-all duration-300 focus:border-green-500"
                    onChange={handleChange}/>
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
                    name="password"
                      autoComplete="current-password"
                    value={formData.password}
                    placeholder="Enter your password"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-4 pl-12 pr-4 outline-none transition-all duration-300 focus:border-green-500"
                  onChange={handleChange}/>
                </div>
              </div>

              {/* Remember */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-3 text-sm text-slate-600">
                  <input type="checkbox" />
                  Remember me
                </label>

                <button
                  type="button"
                  className="text-sm font-medium text-green-600"
                >
                  Forgot Password?
                </button>
              </div>

              {/* Login Button */}
              <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-green-500 py-4 font-semibold text-white cursor-pointer transition-all duration-300 hover:bg-green-600" type="submit" >
                Login
                <FaArrowRight />
              </button>

              {/* Divider */}
              <div className="relative py-4 text-center">
                <div className="absolute left-0 top-1/2 h-[1px] w-full bg-slate-200"></div>

                <span className="relative bg-white px-4 text-sm text-slate-400">
                  OR CONTINUE WITH
                </span>
              </div>

              {/* Google */}
              <button
                type="button"
                className="flex w-full items-center justify-center gap-3 rounded-2xl border border-slate-200 py-4 font-medium text-slate-700 transition-all duration-300 hover:bg-slate-50"
              >
                <FaGoogle />
                Continue with Google
              </button>
            </form>

            {/* Footer */}
            <p className="mt-8 text-center text-sm text-slate-500">
              Don’t have an account?{" "}
              <Link
                to="/signup"
                className="font-semibold text-green-600"
              >
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;