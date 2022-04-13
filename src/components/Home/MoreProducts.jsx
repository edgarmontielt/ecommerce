import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "./MoreProducts/ProductCard";
import Product from "./SliderOfferts/Product";

export default function MoreProducts({ products }) {
     return (
          <section className=" mt-20 max-w-screen-desktop mx-auto my-10">
               <h1 className="max-w-screen-desktop px-5  mx-auto pt-2 tablet:mt-40 py-10 text-4xl font-semibold">
                    More products
               </h1>

               <div className=" flex gap-7 flex-wrap justify-center items-center">
                    {products.map(product => {
                              const name = product.attributes.name.split(" ")
                              const newName = name[0] + " " + name[1]
                         return (
                              <Link to={`/product/details/${product.id}`}><ProductCard key={product.id} name={newName} image={product.attributes.image} price={product.attributes.price} /></Link>
                         )
                    })}
               </div>

          </section>
     );
}
