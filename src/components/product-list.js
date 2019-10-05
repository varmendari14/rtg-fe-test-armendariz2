import React, { Component } from "react";
import ProductItem from "./product-item";
import '../assets/css/components/product-list.css';

class ProductList extends Component {
    state = {
        products: []
    }

    componentDidMount() {
      this.getProducts();
    }

    getProducts = () => {
      fetch('/products')
        .then(res => {
          console.log(res);
          return res.json();
        })
        .then(resp => { 
          console.log(resp); 
          this.setState({ products: resp.products });
        });
    };

    render() {
        console.log(this.state.products);
        return(
            <div className="product-list grid-x grid-margin-y">
              {this.state.products.length < 1 ? 'No Products' : this.state.products.map(product => <ProductItem {...product} key={product.sku}/>)}
            </div>
        );
    }
}
export default ProductList;
