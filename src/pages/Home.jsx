import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <main className=' px-20 flex mt-10 flex-wrap justify-center lg:px-8'>
      <div className='w-1/2 mt-20'>
        <div>
          <h3 className=' text-xl text-primary-400'>New products</h3>
          <h1 className=' text-5xl mt-8 font-semibold'>Arduino UNO</h1>
          <p className=' w-4/5 mt-10 text-primary-200'>Arduino board is te best for begin with programming and electronic if is your first experience with electronic enviroment </p>
        </div>
        <Link to={"/auth/login"}>
          <div className=' w-48 mt-10 bg-moztaza-500 text-center p-[8px] rounded-sm font-semibold text-[13px] hover:bg-moztaza-400 text-white'>BUY</div>
        </Link>
      </div>
      <img src="/images/arduinoUNO.png" alt="" className=' w-[550px] mt-10' />
    </main>
  )
}
