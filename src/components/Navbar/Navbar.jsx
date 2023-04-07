import React from "react";
import { Link,Navigate, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

export default function Navbar() {
  const{user, LogOut} = UserAuth()
  const navigate = useNavigate()
  const handelLogout = async() =>{
    try{
      await LogOut()
      navigate('/')
      
    } catch(error){
      console.log(error);
    }
  }
  console.log(user?.email)
  return(
    <nav className="flex items-center justify-between p-5 z-[100] w-full absolute">
      <Link to="/">
        <h1 className="text-red-600 text-4xl font-bold cursor-poiter">
          NETFLIX
        </h1>
      </Link>
      {user?.email ?(
         <div>
         <Link to="/account">
           <button className="text-white pr-4 ">Account</button>
         </Link>
           <button onClick={handelLogout} className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">
             Log Out
           </button>
       </div>
      ) :(
        <div>
        <Link to="/login">
          <button className="text-white pr-4 ">Sign In</button>
        </Link>
        <Link to="/signup">
          <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">
            Sign Up
          </button>
        </Link>
      </div>
      )}
    </nav>
)}

