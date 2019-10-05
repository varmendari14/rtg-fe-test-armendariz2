import React from "react";
import CartItem from "./cart-item";
import '../assets/css/components/product-list.css';
import "../assets/css/components/cart-items.css";

const CartList = (props) => {
    console.log(props.items);
  return(
    <div className="product-list grid-x grid-margin-y">
      {props.items.length < 1 ? 'Nothing in Cart' : props.items.map(product => <CartItem product = {product} updateList = {props.updateList} key={product.sku}/>)}
    </div>
  )
}
export default CartList;
