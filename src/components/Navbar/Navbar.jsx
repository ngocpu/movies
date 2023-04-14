import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import {AiOutlineMenu} from 'react-icons/ai'
import "./Navbar.css";

export default function Navbar() {
  const { user, LogOut } = UserAuth();
  const navigate = useNavigate();
  const [mobile, setMobile] = useState(false);
  const handelLogout = async () => {
    try {
      await LogOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <nav className="flex items-center justify-between p-5 z-[100] w-full absolute">
      <Link to="/">
        <h1 className="text-red-600 text-4xl font-bold cursor-poiter">
          NETFLIX
        </h1>
      </Link>
      {user?.email ? (
        <div>
          <div className="form">
            <Link to="/account">
              <button className="text-white pr-4  transition-all  hover:translate-y-0.5 hover:text-red-400 font-bold shadow">
                Account
              </button>
            </Link>
            <button
              onClick={handelLogout}
              className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white transition-all duration-300 nav-background"
            >
              Log Out
            </button>
          </div>
          <button className=" text-white btn-mobile px-3 py-2 sm:hidden"><AiOutlineMenu /></button>
        </div>
      ) : (
        <div>
          <div className="form">
            <Link to="/login">
              <button className="text-white px-6 py-2 pr-4  transition-all  hover:translate-y-0.5 hover:text-red-400 font-bold shadow-sm">
                Sign In
              </button>
            </Link>
            <Link to="/signup">
              <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white transition-all duration-300 nav-background">
                Sign Up
              </button>
            </Link>
            
          </div>
          <button className=" text-white btn-mobile px-3 py-2 sm:hidden"><AiOutlineMenu /></button>
        </div>
      )}
    </nav>
  );
}
