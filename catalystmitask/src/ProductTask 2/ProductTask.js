import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import CardCounter from "./CardCounter";
import ProductList from "./ProductList";
import { loadProducts } from "./thunk-Product";
import { Route, Routes } from "react-router-dom";
import Cart from "./Cart";
const ProductTask = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadProducts());
  }, []);
  return (
    <>
      <section
        style={{ display: "flex", justifyContent: "space-around", padding: 5 }}
      >
        <h3>Shopping Cart</h3>
        <CardCounter />
      </section>
      <Routes>
        <Route path="" element={<ProductList />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </>
  );
};

export default ProductTask;
