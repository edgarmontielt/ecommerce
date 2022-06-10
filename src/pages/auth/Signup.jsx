import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import InputForm from "../../components/Forms/InputForm";

export default function Signup() {

  const dispatch = useDispatch()

  const signUp = (event) => {
    // event.preventDefault();

    const { email: { value: email }, username: { value: username }, password: { value: password } } = event.target
    dispatch(signUp({ email, username, password }))
  }
  return (
    <main className="max-w-screen-lg mx-auto flex items-center ">
      <div className=" w-screen desktop:w-[900px] h-[550px] tablet:h-[500px] mx-5 tablet:mx-20 desktop:mx-auto my-12 bg-[#F6F6F6] px-2 py-2 shadow-lg tablet:flex items-center">
        <form className=" w-full p-5 tablet:p-12" onSubmit={signUp}>
          <h1 className=" text-[24px] desktop:text-[40px] font-semibold mb-5 tablet:mb-10">
            Sign Up
          </h1>
          <section className=" tablet:grid  tablet:grid-cols-2 tablet:gap-12">
            <InputForm name={"username"} placeholder={"Username"} type={"text"} />
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
