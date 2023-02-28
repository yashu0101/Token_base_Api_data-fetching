// import axios from "axios";
import { addProducts } from "./shoppingSlice";
export const loadProducts = () => (dispatch, getState) => {
  const token = "Ex9yLyRU7wvyxfblpq5HAhfQqUP1vIyo";

  fetch(
    "https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/products",
    {
      method: "get",
      headers: { Authorization: `Bearer ${token}` },
    }
  )
    .then((res) => res.json())
    .then((json) => dispatch(addProducts(json.products)));
};
