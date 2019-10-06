import React, {Component} from "react";
import Header from '../components/header';
import CartList from '../components/cart-list';

class Cart extends Component {

  state = {
    items: [],
    subtotal: 0,
    tax: 0,
    shipping: 0,
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
        this.getTotals();
      });
    console.log("items got");
  }
  getTotals = () => {
    let totalQuantity = 0;
    let totalSub = 0;
    this.state.items.forEach((item) => {
      console.log("in here with");
      totalSub += item.price * item.total;
      console.log(totalSub);
      totalQuantity += item.total;
    });
    this.setState({subtotal: totalSub});
    this.setState({tax: parseFloat(Number(totalSub * .1).toFixed(2))});
    this.setState({shipping: parseFloat(Number((50 + totalSub * .02) - (5 * totalQuantity)).toFixed(2))});
    this.setState({total: parseFloat(Number(this.state.subtotal + this.state.tax + this.state.shipping).toFixed(2))})
  }

  render() {
    return(
      <div>
        <Header/>
        <div className='layout'>
          <h1>Cart</h1>
          <CartList items = {this.state.items} updateList = {this.getItems}/>
          <div className="totals">
            <div>
              Subtotal: ${this.state.subtotal}
            </div>
            <div>
              Tax: ${this.state.tax}
            </div>
            <div>
              Shipping: ${this.state.shipping}
            </div>
            <div>
              Total: ${this.state.total}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
