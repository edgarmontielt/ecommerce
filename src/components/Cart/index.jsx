import React from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'
import { Container, Title } from './styles'

export default function MyCart({ products }) {

    const total = products.reduce((res, item) => {
        return res + (item.product.price * item.amount)
    }, 0)

    return (
        <Container>
            <Title>Shop Cart</Title>
            {products.length > 0 ? <>
                {products.map(item => <Card key={item.product._id} data={item} />)}
                <p>total: ${total} </p>
                <Link
                    to={"/payment"}
                    className=" ml-auto mt-auto w-1/3 bg-moztaza-500 text-center p-3 rounded-sm font-semibold  hover:bg-moztaza-400 text-white">
                    BUY
                </Link>
            </> :
                <div className='h-full flex justify-center items-center'>Sin productos</div>}
        </Container>
    )
}
