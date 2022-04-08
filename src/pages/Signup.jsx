import React from "react";
import { Link } from "react-router-dom";
import InputForm from "../components/InputForm";

export default function Signup() {
  return (
    <main className="max-w-screen-lg mx-auto flex items-center ">
      <div className=" w-screen desktop:w-[900px] h-[380px] tablet:h-[500px] mx-5 tablet:mx-20 desktop:mx-auto my-12 bg-[#F6F6F6] px-2 py-2 shadow-lg tablet:flex items-center">
        <form action="" className=" w-full p-5 tablet:p-12">
          <h1 className=" text-[24px] desktop:text-[40px] font-semibold mb-5 tablet:mb-10">
            Login
          </h1>
          <section className=" grid grid-cols-2 gap-12">
            <InputForm name={"name"} placeholder={"Name"} type={"text"} />
            <InputForm
              name={"lastName"}
              placeholder={"Last name"}
              type={"text"}
            />
            <InputForm name={"email"} 
              placeholder={"Email"} 
              type={"email"} />
            <InputForm
              name={"password"}
              placeholder={"Password"}
              type={"password"}
            />
            <div>
              <article className=" flex items-center gap-5">
                <input type="checkbox" />{" "}
                <p>
                  I accept{" "}
                  <Link
                    to={"/"}
                    className=" font-semibold text-secondary_green-500 hover:underline"
                  >
                    Terms and Conditions
                  </Link>
                </p>
              </article>
              <button className=" bg-secondary_green-500 w-full p-2 rounded-sm text-white font-semibold mt-8 hover:bg-secondary_green-400">
                CONTINUE
              </button>
            </div>
          </section>
        </form>
      </div>
    </main>
  );
}
