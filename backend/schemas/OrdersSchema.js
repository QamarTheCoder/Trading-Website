const {Schema} = require('mongoose')

const OrdersSchema= new Schema({
    name: String,
    qyt: Number,
    price: Number,
    mode: String,
});

module.exports = {OrdersSchema};

