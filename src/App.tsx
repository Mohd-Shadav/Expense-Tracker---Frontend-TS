// import Dashboard from "./Components/Dashboard"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import AddCategory from "./Components/AddCategory"
import AddTransaction from "./Components/AddTransactions"
import Categories from "./Components/Categories"
import Reports from "./Components/Reports"
import Settings from "./Components/Settings"
import Sidebar from "./Components/Sidebar"
import Transactions from  "./Components/Transaction"
import Dashboard from "./Components/Dashboard"


function App() {
  return (
    <div>
      <BrowserRouter>
      
   
  <div className="flex">

        <Sidebar/>

      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/transactions" element={<Transactions/>}/>
        <Route path="/add-transaction" element={<AddTransaction/>}/>
        <Route path="/categories" element={<Categories/>}/>
        <Route path="/reports" element={<Reports/>}/>
        <Route path="/settings" element={<Settings/>}/>


      </Routes>
  </div>




      </BrowserRouter>

    </div>
  )
}

export default App