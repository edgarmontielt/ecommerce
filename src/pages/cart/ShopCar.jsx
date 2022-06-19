import React from 'react'
import { useSelector } from 'react-redux'
import MyCart from '../../components/Cart'

export default function ShopCar() {
    const { items } =  useSelector(state => state.cart)
    return (
        <section className="h-screen">
            <MyCart products={items} />
        </section>
    )
}
