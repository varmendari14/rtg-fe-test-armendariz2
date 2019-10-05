import React, {Component} from "react";
import Header from '../components/header';
import CartList from '../components/cart-list';

class Cart extends Component {

  state = {
    items: [],
    subtotal: 0,
    tax: 0,
    delivery: 0,
    total: 0
  }

  componentDidMount() {
    this.getItems();
  }

  getItems = () => {
    fetch('/itemsInCart')
      .then(res => {
        console.log(res);
        return res.json();
      })
      .then(resp => { 
        console.log(resp); 
        this.setState({ items: resp });
      });
    console.log("items got");
  }

  render() {
    return(
      <div className='layout'>
        <Header/>
        <h1>Cart</h1>
        <CartList items = {this.state.items} updateList = {this.getItems}/>
      </div>
    );
  }
}

export default Cart;
