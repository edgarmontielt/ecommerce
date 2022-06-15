import React, { useEffect, useState } from 'react'
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from '@stripe/stripe-js'
import { get } from "../../api"
import FormPayment from '../../components/Forms/FormPayment'

const stripe = loadStripe("pk_test_51L0GJWI7XrZmL34QV1hhu8UQnOnfiBSxiwiiigub3MNaHyLavVm7zArehbbLIbYeUltzjplDCHbmsWgfbvaa4pfS004k5IctBg")

export default function Payment() {
    const [clientSecret, setClientSecret] = useState("")

    useEffect(() => {
        get("/api/cart/pay")
            .then(({ data }) => {
                console.log(data);
                setClientSecret(data.clientSecret)
            })
    }, [])

    return (
        <div className=' my-20'>
            {clientSecret &&
                <Elements stripe={stripe} options={{
                    clientSecret
                }}>
                    <FormPayment />
                </Elements>
            }
        </div>
    )
}