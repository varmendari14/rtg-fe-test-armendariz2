import React from "react";

const CartItem = props => {
    return (
      <div className="product cell small-12 grid-x grid-margin-x" id={ props.product.sku }>
        <div className="product-image cell small-2"><img src={ props.product.image } alt={ props.product.title } /></div>
        <div className="product-title cell small-4">{ props.product.title }</div>
        <div className="product-sku cell small-2">{ props.product.sku }</div>
        <div className="product-price cell small-2">${ props.product.price }</div>
        <div className="product-update-in-cart cell small-2">
            <button id="update-in-cart"> PUT MORE IN HERE </button>
        </div>
        <div className="product-remove-from-cart cell small-2">
            <button id="remove-from-cart" onClick={() => {
              console.log("add to cart");
              fetch('/removeFromCart', {
                method: 'POST',
                body: JSON.stringify({
                  product: props.product
                }),
                headers: {"Content-Type": "application/json"}
              })
                .then(res => {
                    console.log(res);
                    return res.text();
                })
                .then(resp => { 
                    console.log(resp);
                    props.updateList();
                });
            }}> Remove </button>
        </div>
      </div>
    )

}

export default CartItem;