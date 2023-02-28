import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import AddCardIcon from '@mui/icons-material/AddCard';
import {
  selectCard,
  selectProducts,
  addCard,
  removeCard,
} from "./shoppingSlice";
import { Container } from "@mui/material";

const Cart = () => {
  const dispatch = useDispatch();
  const cardProducts = useSelector(selectCard);
  //   const cardProduct = [users:0,products:[{id:1,quantity:1},{id:2,quantity:2}]]
  const products = useSelector(selectProducts);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const prodList = cardProducts.products.map((prod) => {
      const p = products.find(({ id }) => id == prod.id);
      return { ...prod, ...p };
    });
    setProductList(prodList);
  }, [cardProducts]);

  const addToCard = (id) => {
    dispatch(addCard({ id: id }));
  };
  const removeToCard = (id) => {
    dispatch(removeCard({ id: id }));
  };

  let total = 0;
  return (
    <>
      <Container>
        <Link to="/">Go to list</Link>
        <h1>cart</h1>
        {productList.map((prod) => {
          total += prod.price * prod.quantity;
          return (
            <div key={prod.id} style={{ border: "1px solid #999", padding: 5 }}>
              <img
                src={prod.image}
                style={{ padding: 5, margin: 5 }}
                alt="image"
              />
              <h2>
                {prod.id}-{prod.name}
              </h2>
              <h3>colorId:{prod.colorId}</h3>
              <h3>materialId:{prod.materialId}</h3>
              <h2>price:{prod.price}</h2>
              <div>
                <button onClick={() => removeToCard(prod.id)}>--</button>
                <span>Quantity:{prod.quantity}</span>
                <button onClick={() => addToCard(prod.id)}>++</button>
              </div>
              <h2>Sub-Total:-{prod.price * prod.quantity}</h2>
            </div>
          );
        })}
        <h2>Total:-{Math.round(total)}</h2>
      </Container>
    </>
  );
};

export default Cart;
