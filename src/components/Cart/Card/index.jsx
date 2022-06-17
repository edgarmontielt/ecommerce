import React from 'react'

export default function Card({ data }) {
    return (
        <article key={data.product._id} className='flex gap-10'>
            <img src={data.product.imgURL[0]} alt=""
                className=' w-16 '
                />
            <p>{data.product.name}</p>
            <span>${data.product.price}</span>
            <span>{data.amount}</span>
        </article>
    )
}
