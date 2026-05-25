import axios from "axios";
import { useEffect, useState } from "react";
import {
  FaArrowTrendUp,
  FaArrowTrendDown,
  FaMoneyBillWave,
  FaCalendarDays,
  FaFileLines,
} from "react-icons/fa6";

import {
  FaMagnifyingGlass,
  FaPen,
  FaTrash,
  FaFilter,
} from "react-icons/fa6";
import { Link} from "react-router-dom";

interface Transaction {
  _id:string;
  title: string;
  category: {name:string,color:string};
  type: "income" | "expense";
  amount: number;
  paymentMethod:"cash"|"upi"|"bank"|"card"
  date: string;
  notes:""
}

interface Category {
  name:string,
  user:string,
  type:string,
  color:string,
  icon:string
}

   interface Form {
    _id:string,
     title:string,
    amount:number,
    type:"income"|"expense",
    category:string,
    paymentMethod:"cash"|"upi"|"bank"|"card",
    date:string,
    notes:string
}



const Transactions = () => {
  const [search, setSearch] = useState("");
  const [type,setType] = useState("all")
  const [category,setCategory] = useState("all")
  const [categories,setCategories] = useState<Category[]>([])
  const [transactionData,setTransactiondata] = useState<Transaction[]>([])
  const [openModal, setOpenModal] = useState(false);
  const [formType, setFormType] = useState<"income" | "expense">("expense");


   const [formData,setFormData] = useState<Form>({
    _id:"",
    title:"",
      amount:0,
      type:"expense",
      category:"",
      paymentMethod:"cash",
      date:new Date().toISOString().split("T")[0],
      notes:""
  
    })

  const filteredTransactions = transactionData?.filter((item) =>
    item?.title?.toLowerCase().includes(search.toLowerCase()) && 
    (type === "all" || item?.type===type) &&
    (category==="all" || item?.category?.name === category)
  );

  const handleType = (e:any)=>{
    setType(e.target.value)
    

  }

  const handleCategory = (e:any) =>{
    setCategory(e.target.value)
  }


  const deleteTransaction =async (id:string)=>{
    
    try{
      let res = await axios.delete("http://localhost:3000/transaction/deleteTransaction",{
        data:{id},
        withCredentials:true
      })

      if(res.status===200){
        alert("Transaction Deleted Successfully")
         setTransactiondata((prev) =>
        prev.filter((item) => item._id !== id)
      );
        
        
      }


    }catch(err){
      alert(err)
    }

  }

 
  
    const handleSubmit =async (e:React.SubmitEvent<HTMLFormElement>)=>{
      e.preventDefault();
      try{
        const selectedDate = new Date(formData.date);
    const today = new Date();
  
    // Invalid date check
    if (isNaN(selectedDate.getTime())) {
      alert("Please enter a valid date");
      return;
    }
  
    // Future date check
    if (selectedDate > today) {
      alert("Future dates are not allowed");
      return;
    }
  
    // Year validation
    const year = selectedDate.getFullYear();
  
    if (year < 2000 || year > today.getFullYear()) {
      alert("Please enter a valid year");
      return;
    }
  
       
  
        let res = await axios.put("http://localhost:3000/transaction/updatetransaction",formData,{
          withCredentials:true,
          headers:{
            "Content-Type":"Application/json"
  
          }
        })
  
       
  
      
  
       if(res.status===200){
        alert("Your Expense Has been updated Successfully.")
        setOpenModal(false)
        setFormData({
          _id:"",
      title:"",
      amount:0,
      type:"expense",
      category:"",
      paymentMethod:"cash",
      date:new Date().toISOString().split("T")[0],
      notes:""
  
    })
        return;
       }
  
  
      }catch(err){
        alert("Something went Wrong")
        return;
      }
  
    }
  
  
    const handleChange = (e:React.ChangeEvent< HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>)=>{
      let {name,value} = e.target;
  
       setFormData((prev)=>({
          ...prev,
          type:formType
        }))
     
  
      if(name==="title"){
        setFormData((prev)=>({
          ...prev,
          [name]:value
        }))
        return;
      }
        if(name==="amount"){
          let dummy = Number(value)
        setFormData((prev)=>({
          ...prev,
          [name]:dummy
        }))
        return;
      }
      //   if(name==="type"){
      //   setFormData((prev)=>({
      //     ...prev,
      //     type:type
      //   }))
      //   return;
      // }
        if(name==="category"){
        setFormData((prev)=>({
          ...prev,
          [name]:value
        }))
        return;
      }
  
       if(name==="paymentMethod"){
        
        setFormData((prev)=>({
          ...prev,
          [name]:value as "cash"|"upi"|"bank"|"card" 
        }))
        return;
      }
        if(name==="date"){
        setFormData((prev)=>({
          ...prev,
          [name]:value
        }))
        return;
      }
        if(name==="notes"){
        setFormData((prev)=>({
          ...prev,
          [name]:value
        }))
        return;
      }
     
  
  
  
  
    }

    const handleUpdation = (id:string)=>{

      setOpenModal(true)
      const updateTransaction =  transactionData.filter((item)=> item._id===id)

      console.log(updateTransaction)
      setFormData({
      _id:updateTransaction[0]._id,
      title:updateTransaction[0].title,
      amount:updateTransaction[0].amount,
      type:updateTransaction[0].type,
      category:updateTransaction[0].category.name,
      paymentMethod:updateTransaction[0].paymentMethod,
      date:updateTransaction[0].date.split("T")[0],
      notes:updateTransaction[0].notes
  
    })



    }
  
  



  useEffect(()=>{
    async function getTransactions(){
      try{
        let res = await axios.get("http://localhost:3000/transaction/gettransactions",{
          withCredentials:true
        })
       if(res.status===200){
        
       
        setTransactiondata(res.data || [])
        
      
       }

      }catch(Err){
        alert(Err)
      }

    }
    getTransactions()

     async function getCategories(){
      let res = await axios.get("http://localhost:3000/category/getcategories",{
        withCredentials:true
      })
      setCategories(res.data)
    } 

   
    getCategories();
  },[])

  
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

        <Link to="/add-transaction" className="rounded-2xl bg-green-500 px-5 py-3 font-semibold text-white shadow-sm transition-all duration-300 hover:bg-green-600">
          + Add Transaction
        </Link>
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
          <select className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition-all focus:border-green-500" onChange={handleType}>
            <option value="all">All Types</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>

          {/* Category Filter */}
          <select className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition-all focus:border-green-500" onChange={handleCategory}>
            <option value={"all"}>All Categories</option>
            {categories.length>0 ?(categories.map((item)=>{
              return (
                <option value={item?.name}>{item?.name}</option>
              )
            })):(
              <option disabled>No Category Yet</option>
            )}
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
              {filteredTransactions.length>0 ? (
              
              filteredTransactions.map((item:any) => (
                <tr
                  key={item?._id}
                  className="border-b border-slate-100 transition-all duration-300 hover:bg-slate-50"
                >
                  <td className="px-6 py-5">
                    <div>
                      <h3 className="font-semibold text-slate-700">
                        {item?.title}
                      </h3>

                      <p className="mt-1 text-sm text-slate-400">
                        Transaction ID #{item?._id}
                      </p>
                    </div>
                  </td>

                  <td className="px-6 py-5">
                    <span style={{
    backgroundColor: item?.category?.color
  }} className={`rounded-full px-4 py-2 text-sm font-medium text-white`}>
                      {item?.category?.name}
                    </span>
                  </td>

                  <td className="px-6 py-5">
                    <span
                      className={`rounded-full px-4 py-2 text-xs font-semibold ${
                        item?.type === "income"
                          ? "bg-green-100 text-green-600"
                          : "bg-red-100 text-red-500"
                      }`}
                    >
                      {item?.type}
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
                    {item?.date?.split("T")[0]}
                  </td>

                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <button className="rounded-xl bg-slate-100 p-3 text-slate-600 transition-all duration-300 hover:bg-slate-200" onClick={()=>handleUpdation(item._id)}>
                        <FaPen size={14} />
                      </button>

                      <button className="rounded-xl bg-red-100 p-3 text-red-500 transition-all duration-300 hover:bg-red-200" onClick={()=>deleteTransaction(item?._id)}>
                        <FaTrash size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))):(
                  <tr>
      <td
        colSpan={6}
        className="py-10 text-center text-lg font-medium text-slate-400"
      >
        No Transactions Yet
      </td>
    </tr>
              )}
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
    {openModal && (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/30 p-4 backdrop-blur-sm">
       <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto bg-[#f8fafc] p-6 shadow-2xl">
               <div className="relative">
                 <h2 className="mb-6 text-2xl font-semibold text-slate-800 w-full">
                  Transaction Details
                </h2>
                <button
  className="absolute right-2 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-red-500 shadow-sm transition-all cursor-pointer duration-300 hover:rotate-90 hover:bg-red-500 hover:text-white"
onClick={()=>setOpenModal(false)}>
  ✕
</button>
               </div>
      
                <form className="space-y-5" onSubmit={handleSubmit}>
                  {/* Title */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-600">
                      Transaction Title
                    </label>
      
                    <input
                      type="text"
                      value={formData.title}
                      name="title"
                      placeholder="Enter transaction title"
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 outline-none transition-all duration-300 focus:border-green-500"
                       onChange={handleChange} required/>
                  </div>
      
                  {/* Amount */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-600">
                      Amount
                    </label>
      
                    <div className="relative">
                      <FaMoneyBillWave className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
      
                      <input
                        type="number"
                        placeholder="Enter amount"
                        value={formData.amount === 0 ? "" : formData.amount}
                        name="amount"
      
                        className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-4 pl-12 pr-4 outline-none transition-all duration-300 focus:border-green-500"
                        onChange={handleChange} required/>
                    </div>
                  </div>
      
                  {/* Type Toggle */}
                  <div>
                    <label className="mb-3 block text-sm font-medium text-slate-600">
                      Transaction Type
                    </label>
      
                    <div className="flex gap-4">
                      <button
                        type="button"
                        onClick={() => setFormType("income")}
                        className={`flex flex-1 items-center justify-center gap-2 rounded-2xl py-4 font-semibold transition-all duration-300 ${
                          formType === "income"
                            ? "bg-green-500 text-white"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        <FaArrowTrendUp />
                        Income
                      </button>
      
                      <button
                        type="button"
                        onClick={() => setFormType("expense")}
                        className={`flex flex-1 items-center justify-center gap-2 rounded-2xl py-4 font-semibold transition-all duration-300 ${
                          formType === "expense"
                            ? "bg-red-500 text-white"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        <FaArrowTrendDown />
                        Expense
                      </button>
                    </div>
                  </div>
      
                  {/* Category */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-600">
                      Category
                    </label>
      
                    <select value={formData.category} name="category" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 outline-none transition-all duration-300 focus:border-green-500" onChange={handleChange}required>
                      <option disabled selected value={""}>Select Category</option>
                      {categories.length>0 ? (
                        categories.map((item)=>{
                          return <option value={item?.name}>{item.name}</option>
                        })
                      ):(
                        <option disabled>No Category Added Yet</option>
                      )}
                    </select>
                  </div>
      
                  {/* Payment Method */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-600">
                      Payment Method
                    </label>
      
                    <select value={formData.paymentMethod} name="paymentMethod" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 outline-none transition-all duration-300 focus:border-green-500" onChange={handleChange}>
                      <option disabled>Select Payment Method</option>
                      <option value={"cash"}>Cash</option>
                      <option value={"upi"}>UPI</option>
                      <option value={"bank"}>Bank</option>
                      <option value={"card"}>Card</option>
                      
                    </select>
                  </div>
      
                  {/* Date */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-600">
                      Date
                    </label>
      
                    <div className="relative">
                      <FaCalendarDays className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
      
                      <input
                        type="date"
                        name={"date"}
                        value={formData.date}
                        className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-4 pl-12 pr-4 outline-none transition-all duration-300 focus:border-green-500"
                      onChange={handleChange} required/>
                    </div>
                  </div>
      
                  {/* Notes */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-600">
                      Notes
                    </label>
      
                    <div className="relative">
                      <FaFileLines className="absolute left-4 top-5 text-slate-400" />
      
                      <textarea
                        rows={5}
                        name={"notes"}
                        value={formData.notes}
                        placeholder="Write transaction notes..."
                        className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-4 pl-12 pr-4 outline-none transition-all duration-300 focus:border-green-500"
                      onChange={handleChange}></textarea>
                    </div>
                  </div>
      
                  {/* Buttons */}
                  <div className="flex flex-col gap-4 pt-4 sm:flex-row">
                    <button
                      type="submit"
                      className="flex-1 rounded-2xl bg-green-500 py-4 font-semibold text-white shadow-sm transition-all duration-300 hover:bg-green-600"
                    >
                      Add Transaction
                    </button>
      
                    <button
                      type="reset"
                      className="flex-1 rounded-2xl bg-slate-100 py-4 font-semibold text-slate-700 transition-all duration-300 hover:bg-slate-200"
                    >
                      Reset
                    </button>
                  </div>
                </form>
              </div></div>)}

      
    </div>
  );
};

export default Transactions;