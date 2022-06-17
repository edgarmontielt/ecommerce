import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { get } from '../../api'
import MyCart from '../../components/Cart'

export default function ShopCar() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        get(`/api/cart`).then(res => setProducts(res.data.items))
    }, [])

    return (
        <section className="h-screen">
            <MyCart products={products} />
        </section>
    )
}
