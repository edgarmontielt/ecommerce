import React from 'react'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripe = loadStripe("pk_test_51KTd1dCxJ8HWxsAUvHdkJU90wXuUHO4qa4bF5dq3A7kCPWLAiaPnQ4bDpvBqIVMHPdABDwVMODmDff6jl8ok59OJ00SeHORvaW")

export default function Payment() {
    return (
        <div>
            <Elements stripe={stripe}></Elements>
        </div>
    )
}
