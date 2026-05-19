import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({children}:any){
    const [isAuthenticated,setIsAuthenticated] = useState(false)
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        async function checkAuth(){
          
        try{
                    let res = await axios.get('http://localhost:3000/user/auth',{
        withCredentials:true
      });

       

      if(res.status===200){
         setIsAuthenticated(true)
       
         return;
     
       
      }
 alert("Please Login")
        setIsAuthenticated(false)
        
      return;
        }catch(err){
            alert(err)
            return;
        }finally{
            setLoading(false)
        }


        }

        checkAuth()

    },[])

      if (loading) {
    return <h1>Loading...</h1>;
  }


    return  isAuthenticated ? children : <Navigate to={'/login'}/>

}

export default ProtectedRoute;