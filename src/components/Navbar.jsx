import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RiFlashlightLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineUser, AiOutlineShoppingCart  } from "react-icons/ai"
import { logout } from "../features/user/userSlice";

export default function Navbar() {

  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const signOut = () => {
    dispatch(logout())
    navigate("/")
  }

  return (
    <nav className="p-10">
      <div className="max-w-screen-xl flex mx-auto items-center justify-center px-6">
        <div className=" flex items-end gap-2">
          <span>
            <RiFlashlightLine className=" w-11 h-11 text-[#CD8A20]" />
          </span>
          <h1 className="font-extrabold text-[28px] text-primary-400">
            <Link to={"/"}>Felcy</Link>
          </h1>
          <ul className=" hidden tablet:visible tablet:flex tablet:ml-8 tablet:gap-[25px] tablet:pb-1">
            <li className="font-medium text-lg text-primary-400 hover:underline">
              <Link to={"/#"}>Kits</Link>
            </li>
            <li className="font-medium text-lg text-primary-400 hover:underline">
              <Link to={"/#"}>Protoboards</Link>
            </li>
            <li className="font-medium text-lg text-primary-400 hover:underline">
              <Link to={"/#"}>Components</Link>
            </li>
          </ul>
        </div>
        {!user.logged ? <section className="hidden tablet:visible tablet:ml-auto tablet:flex gap-7">
          <Link to={"/auth/signup"}>
            <div className="w-28 bg-primary-300 text-center p-[7px] rounded-sm font-semibold text-[13px] text-moztaza-100 hover:bg-primary-200">
              Sign Up{" "}
            </div>
          </Link>
          <Link to={"/auth/login"}>
            <div className=" w-28 bg-moztaza-500 text-center p-[7px] rounded-sm font-semibold text-[13px] text-white hover:bg-moztaza-400">
              Log In
            </div>
          </Link>
        </section> : 
        <section className=" ml-auto flex items-center text-lg">
         <Link to={"/shopcar"}> <AiOutlineShoppingCart className=" w-6 h-6 text-primary-400 mr-10 hover:scale-105 cursor-pointer hover:opacity-80" /></Link>
          <p className=" hover:opacity-60 cursor-pointer hover:underline mr-5" onClick={signOut}>Logout</p>
          <AiOutlineUser className=" w-6 h-7 "/>
          {user.name}
        </section>
        }
      </div>
    </nav>

  );
}