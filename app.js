const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
require('dotenv').config();

const sequelize = require('./util/dbconfig');
const api_routes = require('./routes/api_routes');

const Product = require('./models/product');
const User = require('./models/user');
const Cart = require('./models/cart');
const CartItem = require('./models/cart-item');
const Order = require('./models/order');
const OrderItem = require('./models/order-item');


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(cors());


app.use(process.env.API_BASE_URL, api_routes)


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Methods',
        'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});
Product.belongsTo(User, { constraints: true, onDelete: 'CASCADE' });
User.hasMany(Product);
User.hasOne(Cart);
User.hasMany(Order);
Cart.belongsTo(User);
Cart.belongsToMany(Product, { through: CartItem });
Order.belongsTo(User);
Order.belongsToMany(Product, { through: OrderItem });
Product.belongsToMany(Cart, { through: CartItem });
var port = process.env.PORT || 8090;

sequelize.sync({ alter: true })
    .then(() => {
        app.listen(port);
        console.log('API is running at ' + port)
    })