import React, { useEffect, useState } from "react";
import { getProducts } from "../api";
import Banner from "../components/Home/Banner";
import Categories from "../components/Home/Categories";
import MoreProducts from "../components/Home/MoreProducts";
import Slider from "../components/Home/SliderOfferts";

export default function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts(
      "/products?populate=*&filters[user][id]=2",
    )
      .then(({ data }) => {
        setProducts(data.data);
      });
  }, []);

  console.log(products);

  return (
    <main>
      <Banner />
      <Slider />
      <Categories />
      <MoreProducts products={products}/>
    </main>
  );
}
