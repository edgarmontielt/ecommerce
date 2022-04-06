import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <main className="max-w-screen-lg mx-auto ">
      <div className=" w-[900px] h-[500px] my-12 mx-auto bg-[#F6F6F6] px-5 py-2 shadow-lg md:flex md:gap-10 md:items-center">
        <form action="" className=" w-1/2 p-12">
          <h1 className=" text-[40px] font-semibold mb-10">Login</h1>
          <div className=" border-b border-primary_variant-200 py-1 mb-12">
            <input
              type="text"
              className=" appearance-none bg-transparent border-none w-full text-primary_variant-400 mr-3 py-1 px-2 leading-tight focus:outline-none"
              placeholder="Email"
            />
          </div>
          <div className=" border-b border-primary_variant-200 py-1 mb-12">
            <input
              type="text"
              className=" appearance-none bg-transparent border-none w-full text-primary_variant-400 mr-3 py-1 px-2 leading-tight focus:outline-none"
              placeholder="Password"
            />
          </div>
          <button className=" bg-secondary_green-500 w-full p-2 rounded-sm text-white font-medium mt-5 hover:bg-secondary_green-400">
            Sign In
          </button>

          <p className=" text-center mt-10">No account?, <Link to={"/auth/signup"} className=" text-secondary_green-500 font-semibold hover:underline">Sign Up</Link></p>
        </form>
          <img
            src="/images/arduinoUNO.png"
            alt=""
            className="md:w-[350px] md:h-[250px]"
          />
      </div>
    </main>
  );
}
