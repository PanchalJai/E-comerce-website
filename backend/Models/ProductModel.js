const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  
    id: {
    type: Number,
    required: true,
    unique: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        required: true
    },
    discountPercentage: {
        type: Number,
        default: 0
    },
    rating: {
        type: Number,
        min: 0,
        max: 5
    },
    stock: {
        type: Number,
        default: 0
    },
    brand: {
        type: String
    },
    category: {
        type: String
    },
    thumbnail: {
        type: String
    },
    images: [
        {
        type: String
        }
    ]
    }, {
    timestamps: true
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;