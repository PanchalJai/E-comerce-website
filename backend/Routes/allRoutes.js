const express = require("express");
const { create, getAllProducts, getProductById, updateProduct, deleteProduct } = require("../Controllers/productController")
const { Signup, Login  } = require("../Controllers/AuthController");
const {userVerification} = require("../MiddleWeres/AuthMiddleware")
const { placeOrder } = require("../Controllers/orderController");

const {
  addToCart,
  getCart,
} = require("../Controllers/cartController");


const route = express.Router();

route.get("/", (req,res) => {
    res.send("hello! route");
})



route.post("/signup", Signup);
route.post('/login', Login)
route.post('/',userVerification)

route.post("/products/newproduct", create);
route.post("/place", placeOrder);

route.get("/products", getAllProducts );
route.get("/products/admin", getAllProducts );
route.get("/products/product/:id", getProductById)
route.put("/products/update/product/:id", updateProduct)
route.delete("/products/delete/product/:id", deleteProduct)

//Add to cart
route.post("/cart/add", addToCart);

//Get cart
route.get("/cart/:userId", getCart);
route.get("/cart/get",userVerification, getCart);


module.exports = route;