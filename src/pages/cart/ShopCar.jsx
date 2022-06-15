import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { get } from '../../api'

export default function ShopCar() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        get(`/api/cart`).then(res => setProducts(res.data.items))
    }, [])

    console.log(products);

    return (
        <section className="h-screen">
            <div className=" flex flex-col mx-auto my-12 bg-white w-4/5 h-[600px] rounded shadow-xl px-20 py-10">
                <h1 className=' text-3xl font-semibold text-primary-400'> Shop Cart</h1>

                <section>

                    {products.map(({ product }) => {
                        console.log(product);
                        return (
                            <article key={product._id}>

                                <img src={product.imgURL[0]} alt="image" />
                                {product.name}
                            </article>
                        )

                    })}

                </section>


                <Link to={"/payment"} className=" ml-auto mt-auto w-1/3 bg-moztaza-500 text-center p-3 rounded-sm font-semibold  hover:bg-moztaza-400 text-white">
                    <button className=' text-white font-semibold text-lg' > BUY</button>
                </Link>
            </div>

        </section>
    )
}
