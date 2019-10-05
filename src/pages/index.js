import React from "react";
import Header from '../components/header';
import ProductList from '../components/product-list';

const IndexPage = () => (
  <div className='layout'>
    <Header/>
    <h1>Products</h1>
    <ProductList />
  </div>
)

export default IndexPage;
