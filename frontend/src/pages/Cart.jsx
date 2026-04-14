import React, { useEffect, useState } from "react";
import axios from "axios";

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3000/cart/get",
        {
          withCredentials: true, 
        }
      );

      setCart(res.data.items);

    } catch (err) {
      console.log(err);
    }
  };
const products = [
  {
      id: 1,
      title: "Asus VivoBook 15",
      price: 44999,
      image: "https://m.media-amazon.com/images/I/71sbtM3Yi5L._SL1500_.jpg",
      description: "Lightweight laptop with AMD Ryzen 5 processor, 8GB RAM, and fast SSD storage. Perfect for students and daily use."
    },
    {
      id: 2,
      title: "Acer Aspire 7",
      price: 55999,
      image: "https://m.media-amazon.com/images/I/71p4O7dKp1L._SL1500_.jpg",
      description: "Powerful gaming laptop with dedicated GTX graphics, ideal for gaming and heavy tasks like video editing."
    },
    {
      id: 3,
      title: "MSI GF63 Gaming Laptop",
      price: 69999,
      image: "https://m.media-amazon.com/images/I/71vFKBpKakL._SL1500_.jpg",
      description: "High-performance gaming laptop with Intel i7 processor, sleek design, and excellent cooling system."
    }
  ];

  return (
    <div className="container">
      <h2 className="text-center fw-bold" >My Cart</h2>

      {cart.length === 0 ? (
        <div>
        <p>Cart is empty</p>

        <h2>Dummy Data</h2>
        {products.map((item) => (
        <div
          className="row "
          key={item.id}
          style={{
            border: "1px solid #ccc",
            padding: "15px",
           
            
          }}
        >
          <div className="col-3"><img
            src={item.image}
            alt={item.title}
            style={{ width: "100%", height: "150px", objectFit: "contain" }}
          /></div>
          <div className="col-8">
              <h3 className="fs-2">{item.title}</h3>
              <p>₹ {item.price}</p>
              <p>{item.description}</p>
              <button className="btn btn-outline-info">Buy Now</button>
          </div>
          
        </div>
      ))}
        </div>
      ) : (
        cart.map((item, index) => (
          <div key={index} style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
            
            <img 
              src={item.productId.image} 
              alt={item.productId.title} 
              width="100"
            />

            <h3>{item.productId.title}</h3>
            <p>Price: ₹{item.productId.price}</p>
            <p>Quantity: {item.quantity}</p>

          </div>
        ))
      )}
    </div>
  );
}

export default Cart;