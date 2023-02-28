import { Container } from "@mui/material";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectProducts, selectCard, addCard } from "./shoppingSlice";

const Product = ({ id, price, image, colorId, materialId, name }) => {
  const dispatch = useDispatch();
  const card = useSelector(selectCard);
  let message = "Add To Card";
  if (card?.products?.some((pro) => pro.id == id)) message = "Added To Card";
  return (
    <div
      style={{ border: "1px solid #444", width: 250, padding: 5, margin: 5 }}
    >
      <img src={image} style={{ width: "100%" }} alt="image" />
      <h3>
        {id}-{name}
      </h3>
      <h3>colorId:{colorId}</h3>
      <h3>materialId :-{materialId}</h3>
      <h2>price:{price}</h2>
      <button onClick={() => dispatch(addCard({ id: id }))}>{message}</button>
    </div>
  );
};

const ProductList = () => {
  const products = useSelector(selectProducts);
  return (
    <>
      <Container>
        <section style={{ display: "flex", flexWrap: "wrap" }}>
          {Array.isArray(products) &&
            products.map((prod, i) => <Product key={i} {...prod} />)}
        </section>
      </Container>
    </>
  );
};

export default ProductList;
