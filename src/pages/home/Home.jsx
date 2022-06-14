import React from "react";
import { useSelector } from "react-redux";
import Banner from "../../components/Home/Banner";
import Categories from "../../components/Home/Categories";
import MoreProducts from "../../components/Home/MoreProducts";
import Slider from "../../components/Home/SliderOfferts";

export default function Home() {

  const { products } = useSelector(state => state.product)

  return (
    <main>
      <Banner />
      <Slider />
      <Categories />
      <MoreProducts products={products}/>
    </main>
  );
}
