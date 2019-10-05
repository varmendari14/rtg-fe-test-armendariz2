import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import IndexPage from './pages/index';
import Cart from './pages/cart';
import './assets/css/layout.css';

class App extends Component {
  state = {
    products: null
  };

  componentDidMount() {
      // Call our fetch function below once the component mounts
    this.getProducts();
  }
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  getProducts = () => {
    fetch('/products')
      .then(res => {
        console.log(res);
        return res.json();
      })
      .then(resp => { 
        console.log(resp); 
        this.setState({ products: resp });
      });
  };

  render() {
    return (
      <Router>
        <div>
          <Switch>
              <Route path="/cart">
                <Cart />
              </Route>
              <Route path="/">
                <IndexPage />
              </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
