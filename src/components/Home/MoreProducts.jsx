import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "./MoreProducts/ProductCard";

export default function MoreProducts({ products }) {
     return (
          <section className=" mt-20 max-w-screen-desktop my-10 mx-24">

               <h1 className ="max-w-screen-desktop pt-2 py-10 text-4xl font-semibold">
                    More products
               </h1>
               <div className=" w-full flex gap-7 flex-wrap items-center">
                    {products.map(product => {
                         return (
                              <Link 
                                   key={product._id}
                                   to={`/product/details/${product._id}`}>
                                        <ProductCard name={product.name} image={product.imgURL} price={product.price} />
                              </Link>
                         )
                    })}
               </div>

          </section>
     );
}
