import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../api";

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
          console.log(products);
          product = products.filter((product) => product.id == id);
          console.log(product[0]);
     }

     return (
          <section className="h-screen">
               <div className=" grid grid-cols-2 items-center  mx-auto mt-10 bg-white w-4/5 h-[600px] rounded shadow-xl px-20">
                    {products.length > 0 ? (
                         <>
                              <img src={`${product[0].attributes.image}`} alt="" className="w-[400px] h-[400px]" />
                              <div className=" h-full pt-14 ">
                                   <h1 className=" font-semibold text-[24px] text-justify">{product[0].attributes.name}</h1>
                              </div>
                         </>
                    ) : (
                         <></>
                    )}
               </div>
          </section>
     );
}
