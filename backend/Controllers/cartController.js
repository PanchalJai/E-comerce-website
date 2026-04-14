const Cart = require("../Models/Cart");

// ✅ Add to Cart
const addToCart = async (req, res) => {
  const { userId, productId } = req.body;

  try {
    let cart = await Cart.findOne({ userId });

    // create cart if not exists
    if (!cart) {
      cart = new Cart({
        userId,
        products: [{ productId, quantity: 1 }],
      });
    } else {
      const index = cart.products.findIndex(
        (p) => p.productId.toString() === productId
      );

      if (index > -1) {
        cart.products[index].quantity += 1;
      } else {
        cart.products.push({ productId, quantity: 1 });
      }
    }

    await cart.save();

    res.status(200).json({
      success: true,
      message: "Product added to cart",
      cart,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error adding to cart",
    });
  }
};

// ✅ Get Cart
// const getCart = async (req, res) => {
//   const { userId } = req.params;

//   try {
//     const cart = await Cart.findOne({ userId }).populate(
//       "products.productId"
//     );

//     res.status(200).json({
//       success: true,
//       cart,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: "Error fetching cart",
//     });
//   }
// };

// controllers/cartController.js



const getCart = async (req, res) => {
  try {
    const userId = req.user.id;

    // populate product details
    const cart = await Cart.findOne({ userId }).populate("items.productId");

    if (!cart) {
      return res.status(200).json({ items: [] });
    }

    res.status(200).json(cart);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getCart };

module.exports = {
  addToCart,
  getCart,
};