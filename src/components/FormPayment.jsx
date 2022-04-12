import React, { useState } from 'react'
import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js"
import { motion } from "framer-motion"
import { CgSpinner } from "react-icons/cg"

export default function FormPayment() {
     const [ready, setReady] = useState(false)
     const stripe = useStripe()
     const elements = useElements()
     const makePayment = async (event) => {
          event.preventDefault()

          const response = await stripe.confirmPayment({
               elements,
               confirmParams: {
                    return_url: "http://localhost:3000"
               }
          })

          console.log(response)
     }
     return (
          <>
               {stripe ? <form className=' bg-white shadow-xl w-4/5 h-[400px] mx-auto mt-20 p-10 flex gap-20 flex-col rounded-md' onSubmit={makePayment}>
                    <PaymentElement onReady={() => setReady(true)} id='pay' />
                    {ready ? <button className=' bg-secondary_green-500 font-semibold hover:bg-secondary_green-400 hover:scale-105 hover:transition-transform  ease-in-out text-white py-2 px-20 w-1/3 ml-auto mt-10 rounded-sm'>Pagar</button> :
                          <div className='mt-20'>
                               <CgSpinner className="animate-spin h-7 w-7 mr-16 ml-auto absolute top-16 left-[40%]" />
                          </div>
                    }
               </form> : <motion.div animate={{ x: 100 }} className='w-16 h-16 bg-indigo-900 mx-auto'>

               </motion.div>}


          </>
     )
}