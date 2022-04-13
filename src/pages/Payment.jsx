import React, { useEffect, useState } from 'react'
import {Elements} from "@stripe/react-stripe-js"
import { loadStripe } from '@stripe/stripe-js'
import {postProducts} from "../api"
import FormPayment from '../components/FormPayment'

const stripe = loadStripe("pk_test_51KTd1dCxJ8HWxsAUvHdkJU90wXuUHO4qa4bF5dq3A7kCPWLAiaPnQ4bDpvBqIVMHPdABDwVMODmDff6jl8ok59OJ00SeHORvaW")

export default function Payment() {

    const [clientSecret,setClientSecret] = useState("")

    useEffect(()=>{
        postProducts("/orders",{
            amount:100
        })
        .then(({data})=>{

            setClientSecret(data.data.attributes.clientSecret)
        })
    },[])

    

  return (
    <div className=' my-20'>
        {clientSecret&&<Elements stripe={stripe} options={{
            clientSecret
        }}>
            <FormPayment/>
        </Elements>}
    </div>
  )
}