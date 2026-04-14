// controllers/orderController.js

const Order = require("../Models/Order");
const Cart = require("../Models/Cart");
const Product = require("../Models/ProductModel");

const placeOrder = async (req, res) => {
  try {
    const userId = req.user.id; // from auth middleware
    const { address, city, pincode } = req.body;

    // 1. Get user cart
    const cart = await Cart.findOne({ userId }).populate("items.productId");

    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ message: "Cart is empty" });
    }

    // 2. Prepare order items
    const orderItems = cart.items.map(item => ({
      productId: item.productId._id,
      title: item.productId.title,
      price: item.productId.price,
      quantity: item.quantity,
      image: item.productId.image,
    }));

    // 3. Calculate total
    const totalAmount = orderItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );

    // 4. Create order
    const order = await Order.create({
      userId,
      items: orderItems,
      totalAmount,
      shippingAddress: { address, city, pincode },
    });

    // 5. Clear cart
    cart.items = [];
    await cart.save();

    res.status(201).json({
      message: "Order placed successfully",
      order,
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { placeOrder };