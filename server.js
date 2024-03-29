const products = require('./src/lib/data/products.json');

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var currInCart = [];

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.get('/products', function (req, res) {
    return res.send(products);
});
app.get('/itemsInCart', function (req, res) {
    return res.send(currInCart);
});
app.post('/addToCart', function (req, res) {
    console.log(req.body.product);
    let curProduct = req.body.product;
    let wasFound = false;
    // Search for if it exists already
    for (let i = 0; i < currInCart.length; i++) {
        if (curProduct.sku == currInCart[i].sku) {
            currInCart[i].total += 1;
            if (currInCart[i].total > 10) {
                // Could put a message pop up telling user they cannot add more of this item
                currInCart[i].total = 10;
            }
            wasFound = true;
            break;
        }
    }
    if (!wasFound) {
        curProduct.total = 1;
        currInCart.push(curProduct);
    }
    console.log(currInCart);
    res.end("added to cart");
});
app.post('/removeFromCart', function (req, res) {
    const curProduct = req.body.product;
    let index = -1;
    for (let i = 0; i < currInCart.length; i++) {
        if (curProduct.sku == currInCart[i].sku) {
            index = i;
            break;
        }
    }
    if (index > -1) {
        currInCart.splice(index, 1);
    }
    console.log(currInCart);
    res.end("removed from cart");
});

// Update Total
app.post('/updateProductTotal', function (req, res) {
    const curProduct = req.body.product;
    // Search for if it exists already
    for (let i = 0; i < currInCart.length; i++) {
        if (curProduct.sku == currInCart[i].sku) {
            currInCart[i].total = req.body.total;
            break;
        }
    }
    console.log(currInCart);
    res.end("updated number");
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080);