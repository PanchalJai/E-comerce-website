const Product = require("../Models/ProductModel");


const create = async (req,res) => {
    try {
        console.log(req.body);
        const { title, price, description, rating, stock, image } = req.body;
        
        const product = await Product.create( title, price, description, rating, stock, image);
       
        // const savedData = await newProduct.save();
        // console.log(savedData);
        console.log(product)
        res.status(200).json({message: "Product Saved Successfully.", data : product})
       
    } catch (error) {
         console.log("❌ ERROR:", error);  
        res.status(500).json({errorMessage: error.message})
    }
    
}

const getAllProducts = async (req,res) => {
    try {
        const data = await Product.find();
        if (!data || data.length === 0) {
            return res.status(404).json({message: "Data not found."})
        }
        res.status(200).json(data);
    } catch (error) {
       res.status(500).json({errorMessage: error.message}) 
    }
}

const getProductById = async (req,res) => {
    try {
        const {id} = req.params;
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({message: "Product not found"})
        }
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({errorMessage: error.message}) 
    }
}

const updateProduct = async (req,res) => {
    try {
        const {id} = req.params;
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({message: "Product not found"})
        }
        const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true});
        // res.status(200).json(updatedProduct);
        res.status(200).json({ message: "User Updated successfully." });
    } catch (error) {
        console.log("FULL ERROR:", error);
        res.status(500).json({errorMessage: error })  
    }
}

const deleteProduct = async (req,res) => {
    try {
        const {id} = req.params;
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({message: "Product not found"})
        }
        const deletedProduct = await Product.findByIdAndDelete(id, req.body, { new: true});
        console.log(deletedProduct)
    } catch (error) {
        res.status(500).json({errorMessage: error.message})
    }
}


module.exports = {create, getProductById, getAllProducts, updateProduct, deleteProduct}