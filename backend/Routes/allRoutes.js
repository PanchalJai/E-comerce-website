const express = require("express");
const { create, getAllProducts, getProductById, updateProduct, deleteProduct } = require("../Controllers/productController")
const { Signup, Login  } = require("../Controllers/AuthController");
const {userVerification} = require("../MiddleWeres/AuthMiddleware")

const route = express.Router();

route.get("/", (req,res) => {
    res.send("hello! route");
})



route.post("/signup", Signup);
route.post('/login', Login)
route.post('/',userVerification)

route.post("/newproduct", create);
route.get("/", getAllProducts );
route.get("/product/:id", getProductById)
route.put("/update/product/:id", updateProduct)
route.delete("/delete/product/:id", deleteProduct)
module.exports = route;