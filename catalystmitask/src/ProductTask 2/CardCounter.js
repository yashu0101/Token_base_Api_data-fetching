import React from "react";
import { useSelector } from "react-redux";
import { selectCard } from "./shoppingSlice";
import { Link } from "react-router-dom";
const CardCounter = () => {
  const length = useSelector(selectCard)?.products?.length;
  return (
    <>
      <Link to="/cart">
        <span style={{ backgroundColor: "cyan", padding: 15, borderRadius: 5 }}>
          {length}
        </span>
      </Link>
    </>
  );
};

export default CardCounter;
