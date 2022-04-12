import React, { createContext, useState } from "react";
import data from "../data/products.json";

const productsMockup = data;

export const productsContext = createContext();

export default function ProductsContext({ children }) {
  const [products, setProducts] = useState(productsMockup);

  return (
    <productsContext.Provider value={{ products: products }}>
      {children}
    </productsContext.Provider>
  );
}
