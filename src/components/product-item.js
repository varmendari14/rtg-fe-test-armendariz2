import React from "react";

const ProductItem = product => {
    return (
      <div className="product cell small-12 grid-x grid-margin-x" id={ product.sku }>
        <div className="product-image cell small-2"><img src={ product.image } alt={ product.title } /></div>
        <div className="product-title cell small-4">{ product.title }</div>
        <div className="product-sku cell small-2">{ product.sku }</div>
        <div className="product-price cell small-2">${ product.price }</div>
        <div className="product-add-to-cart cell small-2" key={ `${product.sku}add`}>
          <button id="add-to-cart" onClick={() => {
              console.log("add to cart");
              fetch('/addToCart', {
                method: 'POST',
                body: JSON.stringify({
                  product: product
                }),
                headers: {"Content-Type": "application/json"}
              })
                .then(res => {
                console.log(res);
                return res.text();
                })
                .then(resp => { 
                console.log(resp); 
                });
            }}> Add to Cart</button>
        </div>
      </div>
    )

}

export default ProductItem;