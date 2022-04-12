import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../api";
import CardProduct from "../components/Details/CardProduct";

export default function ProductDetails() {
     const { id } = useParams();
     const [products, setProducts] = useState([]);
     useEffect(() => {
          getProducts("/products?populate=*&filters[user][id]=2").then(({ data }) => {
               setProducts(data.data);
          });
     }, []);

     let product;
     if (products.length > 0) {
          product = products.filter((product) => product.id == id);
     }

     return (
          <section className="h-screen">
               <div className=" grid grid-cols-2 items-center  mx-auto mt-12 bg-white w-4/5 h-[600px] rounded shadow-xl px-20">
                    {products.length > 0 ? (
                         <CardProduct product={product}/>
                    ) : (
                         <>No Existe</>
                    )}
               </div>
          </section>
     );
}
