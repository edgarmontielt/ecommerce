import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { get } from "../../api";
import CardProduct from '../../components/Products/Details/CardProduct'
import useScrollTo from "../../hooks/useScrollTo";

export default function ProductDetails() {
     const { id } = useParams();
     const [ product, setProduct ] = useState([])
     
     useScrollTo()
     
     useEffect(() => {
          get(`/api/products/${id}`).then(res => setProduct(res.data.product))
     }, [])


     return (
          <section className="h-screen">
               <div className=" grid grid-cols-2 items-center  mx-auto mt-12 bg-white w-4/5 h-[600px] rounded shadow-xl px-20">
                    <CardProduct product={product}/>
               </div>
          </section>
     );
}
