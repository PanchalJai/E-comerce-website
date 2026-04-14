const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        
    },
    description: {
        type: String,
    },
    price: {
        type: String,
        required: true
    },
    rating: {
        type: String,
        min: 0,
        max: 5,
    },
    stock: {
        type: String,
        default: 0
    },
    image:  {
        type: String,
        }
        
    }, {
    timestamps: true
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;