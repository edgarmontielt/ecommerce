import React from 'react'
import {AiFillCheckCircle} from "react-icons/ai"

export default function PaymentSucces() {
  return (
     <section className="h-screen">
     <div className=" flex flex-col gap-8 items-center justify-center mx-auto mt-12 bg-white w-4/5 h-[600px] rounded shadow-xl px-20">
          <AiFillCheckCircle className=' text-secondary_green-500 w-28 h-28'/>
          <h1 className=' text-secondary_green-500 font-semibold text-4xl'>Payment success</h1>
     </div>
</section>
  )
}
