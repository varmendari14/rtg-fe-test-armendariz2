import React from "react";
import Select from 'react-select';

const CartItem = props => {
    const amounts = [
        { label: "1", value: 1 },
        { label: "2", value: 2 },
        { label: "3", value: 3 },
        { label: "4", value: 4 },
        { label: "5", value: 5 },
        { label: "6", value: 6 },
        { label: "7", value: 7 },
        { label: "8", value: 8 },
        { label: "9", value: 9 },
        { label: "10", value: 10 }
    ];
    return (
      <div className="product cell small-12 grid-x grid-margin-x" id={ props.product.sku }>
        <div className="product-image cell small-2"><img src={ props.product.image } alt={ props.product.title } /></div>
        <div className="product-title cell small-4">{ props.product.title }</div>
        <div className="product-sku cell small-2">{ props.product.sku }</div>
        <div className="product-price cell small-2">${ props.product.price }</div>
        <div className="product-update-in-cart cell small-2">
            <Select 
                options={ amounts }
                defaultValue={amounts[props.product.total - 1]}
                onChange={(v) => {
                    console.log(v);
                    fetch('/updateProductTotal', {
                        method: 'POST',
                        body: JSON.stringify({
                          product: props.product,
                          total: v.value
                        }),
                        headers: {"Content-Type": "application/json"}
                      })
                        .then(resp => { 
                            console.log(resp);
                            props.updateList();
                        });
                }}
            />
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