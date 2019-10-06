import React from "react";
import Header from '../components/header';
import ProductList from '../components/product-list';

const IndexPage = () => (
  <div>
    <Header/>
    <div className='layout'>
      <h1>Products</h1>
      <ProductList />
    </div>
  </div>
)

export default IndexPage;
