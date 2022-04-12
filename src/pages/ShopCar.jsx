import React from 'react'
import { Link } from 'react-router-dom'

export default function ShopCar() {
  return (
    <section className="h-screen">
      <div className=" flex flex-col mx-auto my-12 bg-white w-4/5 h-[600px] rounded shadow-xl px-20 py-10">
          <h1 className=' text-3xl font-semibold text-primary-400'> Shoping Cart</h1>
        
        <section>



        </section>


        <Link to={"/payment"} className=" ml-auto mt-auto w-1/3 bg-moztaza-500 text-center p-3 rounded-sm font-semibold  hover:bg-moztaza-400 text-white">
          <button className=' text-white font-semibold text-lg' > BUY</button>
        </Link>
      </div>

    </section>
  )
}
