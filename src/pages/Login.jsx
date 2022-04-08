import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <main className="max-w-screen-lg mx-auto flex items-center ">
      <div className=" w-screen desktop:w-[900px] h-[380px] tablet:h-[500px] mx-5 tablet:mx-20 desktop:mx-auto my-12 bg-[#F6F6F6] px-2 py-2 shadow-lg tablet:flex items-center">
        <form action="" className=" w-full tablet:w-1/2 p-5 tablet:p-12">
          <h1 className=" text-[24px] desktop:text-[40px] font-semibold mb-5 tablet:mb-10">
            Login
          </h1>
          <div className=" border-b border-primary_variant-200 py-1 mb-8 tablet:mb-12">
            <input
              type="text"
              className=" appearance-none bg-transparent border-none w-full text-primary_variant-400 mr-3 py-1 px-2 leading-tight focus:outline-none"
              placeholder="Email"
            />
          </div>
          <div className=" border-b border-primary_variant-200 py-1 mb-8 tablet:mb-12">
            <input
              type="text"
              className=" appearance-none bg-transparent border-none w-full text-primary_variant-400 mr-3 tablet:py-1 px-2 leading-tight focus:outline-none"
              placeholder="Password"
            />
          </div>
          <button className=" bg-secondary_green-500 w-full p-2 rounded-sm text-white font-medium mt-5 hover:bg-secondary_green-400">
            Sign In
          </button>
          <p className=" text-center mt-10">
            No account?,{" "}
            <Link
              to={"/auth/signup"}
              className=" text-secondary_green-500 font-semibold hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </form>
        <div className=" opacity-0 tablet:opacity-100">
          <img
            src="/images/loginImg.svg"
            alt=""
            className="tablet:w-[350px] tablet:ml-10"
          />
        </div>
      </div>
    </main>
  );
}
