import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../features/user/userSlice";
import { CgSpinner } from "react-icons/cg"

export default function Login() {
    const user = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    console.log(user);

    const signIn = (event) => {
        event.preventDefault()
        const { email: { value: email }, password: { value: password } } = event.target;

        dispatch(login({ email, password }))
    }

    useEffect(() => {
        if (user.logged) {
            navigate("/")
            localStorage.setItem("token", user.token)
        }
    }, [user])


    return (
        <main className="max-w-screen-lg mx-auto flex items-center ">
            <div className="relative w-screen desktop:w-[900px] h-[380px] tablet:h-[500px] mx-5 tablet:mx-20 desktop:mx-auto my-12 bg-[#F6F6F6] px-2 py-2 shadow-lg tablet:flex items-center">

                {user.loading && <CgSpinner className="animate-spin h-7 w-7 mr-16 ml-auto absolute top-16 left-[40%]" />}

                <form action="" className=" w-full tablet:w-1/2 p-5 tablet:p-12" onSubmit={signIn}>
                    <h1 className=" text-[24px] desktop:text-[40px] font-semibold mb-5 tablet:mb-10">
                        Login
                    </h1>
                    <div className=" border-b border-primary_variant-200 py-1 mb-8 tablet:mb-12">
                        <input
                            name="email"
                            type="text"
                            className=" appearance-none bg-transparent border-none w-full text-primary_variant-400 mr-3 py-1 px-2 leading-tight focus:outline-none"
                            placeholder="Email"
                        />
                    </div>
                    <div className=" border-b border-primary_variant-200 py-1 mb-8 tablet:mb-12">
                        <input
                            name="password"
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
