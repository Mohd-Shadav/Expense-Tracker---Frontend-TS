// import Dashboard from "./Components/Dashboard"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import Login from "./Components/Login"
import Signup from "./Components/Signup"
import ProtectedRoute from "./Components/ProtectedRoute"
import MainLayout from "./Components/MainLayout"


function App() {
  return (
    <div>
      <BrowserRouter>
      
   


       
       

      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>

        <Route path="/*" element={
          <ProtectedRoute>
            <MainLayout/>
          </ProtectedRoute>
        }/>
        

      </Routes>
 




      </BrowserRouter>

    </div>
  )
}

export default App