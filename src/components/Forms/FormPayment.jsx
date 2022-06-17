import React, { useState } from 'react'
import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js"
import { CgSpinner } from "react-icons/cg"
import { Form, PayButton, Title } from './styles'

export default function FormPayment() {
     const [ready, setReady] = useState(false)
     const stripe = useStripe()
     const elements = useElements()

     const makePayment = async (event) => {
          event.preventDefault()
          await stripe.confirmPayment({
               elements,
               confirmParams: {
                    return_url: "http://localhost:3000/paymentsuccess",
               }
          })
     }

     return (
          <>
               {stripe &&
                    <Form onSubmit={makePayment}>
                         <Title>Payment</Title>
                         <PaymentElement
                              onReady={() => setReady(true)} id='pay'
                         />
                         {ready ?
                              <PayButton>Pay</PayButton> :
                              <CgSpinner
                                   className="animate-spin h-7 w-7 absolute top-1/2 left-[48%]"
                              />
                         }
                    </Form>}
          </>
     )
}