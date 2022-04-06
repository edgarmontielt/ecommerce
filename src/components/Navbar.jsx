import React from 'react'
import { Link } from 'react-router-dom'
import { RiFlashlightLine } from 'react-icons/ri'

export default function Navbar() {
    return (
        <nav className='p-10'>
            <div className=' max-w-screen-xl flex mx-auto items-center px-6'>
                <div className=' flex items-end gap-2'>
                    <span><RiFlashlightLine className=' w-11 h-11 text-[#CD8A20]' /></span>
                    <h1 className=' font-extrabold text-[28px] text-primary-400'><Link to={"/"}>Felcy</Link></h1>
                    <ul className='flex ml-16 gap-[50px] pb-1'>
                        <li className='font-medium text-lg text-primary-400 hover:underline'><Link to={"/#"}>Kits</Link></li>
                        <li className='font-medium text-lg text-primary-400 hover:underline'><Link to={"/#"}>Protoboards</Link></li>
                        <li className='font-medium text-lg text-primary-400 hover:underline'><Link to={"/#"}>Components</Link></li>
                    </ul>
                </div>
                <section className='ml-auto flex gap-7'>
                    <Link to={"/auth/signup"}>
                        <div className='w-28 bg-primary-300 text-center p-[7px] rounded-sm font-semibold text-[13px] text-moztaza-100 hover:bg-primary-200'>Sign Up                  </div>
                    </Link>
                    <Link to={"/auth/login"}>
                        <div className=' w-28 bg-moztaza-500 text-center p-[7px] rounded-sm font-semibold text-[13px] text-white hover:bg-moztaza-400'>Log In</div>
                    </Link>
                </section>
            </div>
        </nav>
    )
}
