import { Route, Routes } from "react-router-dom";
import AddTransaction from "./AddTransactions";
import Categories from "./Categories";
import Dashboard from "./Dashboard";
import Reports from "./Reports";
import Settings from "./Settings";
import Transactions from "./Transaction";
import Sidebar from "./Sidebar";


function MainLayout(){

    return  (
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
    )
}

export default MainLayout;